import CheckoutForm from "@/components/CheckoutForm";
import StripeElement from "@/components/StripeElement";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.

export default async function Checkout({ searchParams: { client, payment_intent_client_secret } }) {
    const clientId = client ?? payment_intent_client_secret;

    return (

        <div className="mx-auto w-full rounded-md bg-stone-50 p-5 drop-shadow-lg md:w-5/12">
            <StripeElement clientSecret={clientId}>
                <CheckoutForm />
            </StripeElement>
        </div>
    )
}
