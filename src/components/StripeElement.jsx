"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function StripeElement({ children, clientSecret }) {
  const options = {
    clientSecret,
    // appearance,
  };

  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={options}>
        {children}
      </Elements>
    )
  );
}
