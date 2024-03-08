import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";
import Stripe from "stripe";

const resend = new Resend(process.env.RESEND_API_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const POST = async (req) => {

    const data = await req.text();
    const sig = req.headers.get("stripe-signature");

    let event;

    try {
        event = stripe.webhooks.constructEvent(data, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
        return new Response(`Webhook Error: ${error.message}`, { status: 400 });
    }

    const { customer, amount, payment_method, created } = event.data.object;
    const { name, email } = await stripe.customers.retrieve(customer);

    switch (event.type) {
        case 'payment_intent.succeeded':
            try {
                const paymentMethod = await stripe.paymentMethods.retrieve(payment_method);
                const { card: { brand, last4 } } = paymentMethod;

                await resend.emails.send({
                    from: "Letras Inc <Receipt@letrasinc.org>",
                    to: email,
                    subject: "Your contribution is changing lives!",
                    react: <EmailTemplate name={name} amount={amount} ccn={last4} cc={brand} time={created} />,
                });
                return new Response("Email sent successfully", { status: 200 });
            } catch (error) {
                return new Response(`Error sending email: ${error.message}`, { status: 500 });
            }
            break;
        case 'payment_intent.payment_failed':
            try {
                await resend.emails.send({
                    from: "Letras Inc <Receipt@letrasinc.org>",
                    to: email,
                    subject: "We're sorry, we couldn't process your payment",
                    text: "Your payment has failed. Please try again.",
                });
                return new Response("Email sent successfully", { status: 200 });
            } catch (error) {
                return new Response(`Error sending email: ${error.message}`, { status: 500 });
            }
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
}