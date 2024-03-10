import DonateForm from "@/components/DonateForm";
import Stripe from "stripe";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const customers = async ({ name, email, phone }) => {
  try {
    const checkifCustomerExists = await stripe.customers.search({
      query: `name:\'${name}\' email:\'${email}\'`,
      limit: 1,
    });
    if (checkifCustomerExists.data.length > 0) {
      return checkifCustomerExists.data[0];
    } else {
      return await stripe.customers.create({
        email: email.toLowerCase(),
        name: name,
        phone: phone,
      });
    }
  } catch (error) {
    console.error("Error creating customer: ", error);
  }
};

const calculateOrderAmount = (amount) => (amount = Number(amount) * 100);

const paymentIntent = async (id, amount) => {
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    customer: id,
    amount: calculateOrderAmount(amount),
    currency: "usd",
  });

  return paymentIntent.client_secret;
};

export default async function Donate() {
  const handleDonateForm = async (data) => {
    "use server";
    const customerInfo = {
      email: data.get("email"),
      name:
        data.get("name") !== null || data.get("name") !== ""
          ? data
              .get("name")
              .toString()
              .replace(
                /\w\S*/g,
                (txt) =>
                  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
              )
          : null,
      phone: data.has("contact")
        ? data.get("contact").replaceAll(/\D+/g, "")
        : null,
      amount: data.get("amount").replace(/\.\d+/g, "").replace(/\D/g, ""),
    };
    const { amount, ...customer } = customerInfo;
    const { id } = await customers(customer);
    const transaction = await paymentIntent(id, amount);
    redirect(`/donate/checkout?client=${transaction}&amount=${amount}`);
  };

  return (
    <div className="mx-auto w-full rounded-md bg-stone-50 p-5 drop-shadow-lg md:w-5/12">
      <DonateForm actions={handleDonateForm}>
        <h3 className="text-left text-3xl font-bold text-green-800">
          Choose your donation amount
        </h3>
        <p className="mt-2 text-xl font-medium">
          Every dollar makes a difference. Together, we can build a brighter
          future for each child.
        </p>
        <p className="text-xl font-medium">
          Please consider donating today to help us turn this dream into
          reality.
        </p>
      </DonateForm>
    </div>
  );
}
