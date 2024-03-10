"use client";

import { useState, useEffect } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter, useSearchParams } from "next/navigation";

export default function CheckoutForm() {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = searchParams.has("payment_intent_client_secret")
      ? searchParams.get("payment_intent_client_secret")
      : null;

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          router.replace("/donate/confirmation");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, searchParams, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${
          process.env.NEXT_PUBLIC_DOMAIN
        }?amount=${searchParams.get("amount")}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "auto",
  };

  return (
    <div className="xl:px-10">
      <h1 className="mb-5 text-center text-4xl font-bold text-zinc-700">
        Finalize Contribution
      </h1>
      <p className="mb-5 text-center text-lg font-semibold text-zinc-700">
        ${searchParams.get("amount")}.00 will be charged to your card.
      </p>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="mt-5 w-full rounded-2xl bg-amber-400 px-11 pb-1 pt-4 text-2xl font-medium text-neutral-700 shadow-lg duration-300 hover:scale-95 hover:bg-green-600 hover:text-white hover:duration-300"
        >
          {isLoading ? (
            <div className="spinner animate-pulse" id="spinner">
              Loading...
            </div>
          ) : (
            "Complete Your Donation"
          )}
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
