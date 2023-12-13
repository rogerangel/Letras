"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const getPaymentIntent = async (body) => {
    const response = await fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    const { clientSecret } = await response.json();
    return clientSecret;
}


export default function Checkout({ searchParams }) {

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        async function getClientSecret() {
            const clientSecretFetch = await getPaymentIntent({ amount: searchParams["amount"] });
            setClientSecret(clientSecretFetch);
        }
        getClientSecret();
    }
        , [searchParams]);

    // const appearance = {
    //     theme: 'stripe',
    // };

    const options = {
        clientSecret,
        // appearance,
    };

    return (
        <div className="bg-stone-200 w-full py-10 gap-10 flex flex-col justify-center items-center text-center">
            <div className="bg-white p-7 rounded-lg">
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </div>
    )
}
