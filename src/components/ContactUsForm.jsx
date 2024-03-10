"use client";

import { useFormState, useFormStatus } from "react-dom";
import { enforceFormat, formatToPhone } from "./phoneFormatter";
import { contactConf } from "@/app/libs/actions";
import { usePathname } from "next/navigation";
import Checkmark from "./Checkmark";

const initialState = {
  message: "",
};

function SendButton({ className }) {
  const { pending } = useFormStatus();

  return (
    <button className={className} type="submit" aria-disabled={pending}>
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export default function ContactUsForm({
  className,
  children,
  txtAreaRows = 4,
}) {
  const pathname = usePathname();
  const [state, formAction] = useFormState(contactConf, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center">
        <Checkmark />
        <p className="mt-5 text-2xl font-semibold text-blue-900">
          Your message has been sent!
        </p>
        <p className="text-lg text-gray-700">
          We will get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form className="flex w-full flex-col" action={formAction}>
      <input type="hidden" name="pathname" value={pathname} />
      <div className={className}>
        {children}
        <div className="flex flex-col justify-start gap-4 lg:flex-row">
          <div className="flex w-full flex-col gap-1">
            <label
              htmlFor="f_name"
              className="text-left text-lg font-medium text-gray-900"
            >
              First Name
              <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 font-sans text-lg text-gray-900 shadow-inner focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="f_name"
              name="f_name"
              pattern="\D+"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              htmlFor="l_name"
              className="text-left text-lg font-medium text-gray-900"
            >
              Last Name
              <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 font-sans text-lg text-gray-900 shadow-inner focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="l_name"
              name="l_name"
              pattern="\D+"
              required
            />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4 lg:flex-row">
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-left text-lg font-medium text-gray-900"
              htmlFor="email"
            >
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 font-sans text-lg text-gray-900 shadow-inner focus:border-blue-500 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-left text-lg font-medium text-gray-900"
              htmlFor="telephone"
            >
              Phone Number &nbsp;
              <i className="text-xs text-gray-500">(optional)</i>
            </label>
            <input
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 font-sans text-lg text-gray-900 shadow-inner focus:border-blue-500 focus:ring-blue-500"
              type="text"
              id="telephone"
              name="telephone"
              placeholder="e.g. (718) 123-4567"
              onKeyDown={enforceFormat}
              onKeyUp={formatToPhone}
              maxLength="16"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-4">
          <label
            htmlFor="message"
            className="text-left text-lg font-medium text-gray-900"
          >
            Your message
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={txtAreaRows}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-mono text-lg text-gray-900 shadow-inner focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            <span className="text-red-500">*</span> Required fields
          </p>
          <SendButton className="rounded-xl bg-[#0095F6] px-5 pb-2 pt-3 text-center text-base font-bold text-white shadow duration-500 hover:bg-blue-900" />
        </div>
        <p className="text-sm text-gray-500" aria-live="polite" role="status">
          {state.message}
        </p>
      </div>
    </form>
  );
}
