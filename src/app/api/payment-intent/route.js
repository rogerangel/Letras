import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (amount) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    amount = Number(amount) * 100;
    return amount;
}

export async function POST(res, req) {
    const { amount } = await res.json();
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(amount),
        currency: "usd",
    });

    return Response.json({
        clientSecret: paymentIntent.client_secret,
    });
}