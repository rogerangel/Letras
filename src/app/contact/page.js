import Image from "next/image";
import kids_school from "../../../public/kids_school.jpg";
import ContactUsForm from "@/components/ContactUsForm";

export default async function Contact() {
  return (
    <main className="flex h-screen select-none flex-col items-center bg-stone-200 md:min-h-[calc(100vh-96px)] md:flex-row md:justify-center">
      <div className="md:block md:h-full md:w-1/2">
        <Image
          src={kids_school}
          alt="Students"
          className="h-full w-full object-cover object-[left_10%]"
          priority={true}
        />
      </div>
      <div className="w-full md:flex md:h-full md:w-1/2 md:flex-col md:items-center md:justify-center">
        <div className="md:px-2">
          <ContactUsForm
            className="flex w-full max-w-3xl flex-col gap-4 border border-gray-300 bg-stone-100 p-4 drop-shadow-md md:rounded-lg"
            txtAreaRows={8}
          >
            <div className="mb-2 py-2.5">
              <h1 className="text-2xl font-semibold md:text-4xl">Contact Us</h1>
              <p className="md:pt-7 md:text-lg">
                We’d love to hear from you! Please fill out the form below and
                we’ll get back to you as soon as we can.
              </p>
            </div>
          </ContactUsForm>
        </div>
      </div>
    </main>
  );
}
