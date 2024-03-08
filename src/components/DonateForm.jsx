"use client";

import { useState } from "react";
import CurrencyInput from "./CurrencyInput";
import { TbHeartHandshake } from "react-icons/tb";
import { enforceFormat, formatToPhone } from "./phoneFormatter";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function DonateForm({ actions, children, ...props }) {
  const [amountValue, setAmount] = useState("");
  const [custom, setCustom] = useState(true);

  const selectedAmount = (e) => {
    if (e.target.value === "Custom") {
      setCustom(true);
      setAmount("");
    } else {
      setCustom(false);
      setAmount(e.target.value);
    }
  };

  return (
    <>
      {children}
      <form
        action={actions}
        className={classNames("mt-3 xl:px-10", props.className)}
      >
        <div className="flex flex-col items-center">
          <label htmlFor="name" className="mt-3 w-11/12 text-left md:w-full">
            Full Name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="block h-12 w-11/12 rounded-md border border-gray-300 p-2 shadow-inner focus:border-blue-500 focus:ring-blue-500 md:w-full"
            required
          />
          <label htmlFor="email" className="mt-3 w-11/12 text-left md:w-full">
            Email Address
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="JohnDoe@email.com"
            className="block h-12 w-11/12 rounded-md border border-gray-300 p-2 shadow-inner focus:border-blue-500 focus:ring-blue-500 md:w-full"
            required
          />
          <label htmlFor="contact" className="mt-3 w-11/12 text-left md:w-full">
            Phone Number
            <span className="ml-1 text-xs italic text-gray-500">
              (Optional)
            </span>
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            onKeyDown={enforceFormat}
            onKeyUp={formatToPhone}
            maxLength="16"
            placeholder="(123) 456-7890"
            className="block h-12 w-11/12 rounded-md border border-gray-300 p-2 shadow-inner focus:border-blue-500 focus:ring-blue-500 md:w-full"
          />
          <label htmlFor="amount" className="mt-3 w-11/12 text-left md:w-full">
            Choose or Type an Amount
            <span className="text-red-500">*</span>
          </label>
          <CurrencyInput
            id="amount"
            name="amount"
            placeholder="$0.00"
            amount={setAmount}
            value={amountValue}
            {...(!custom && { readOnly: true })}
            className="block h-20 w-11/12 rounded-md border border-gray-300 p-2 text-center text-3xl font-semibold shadow-inner focus:border-blue-500 focus:ring-blue-500 md:w-full"
            required
          />
          <label
            htmlFor="amount"
            className={classNames(
              !custom ? "hidden" : "block",
              "text-md mt-2 italic text-gray-500",
            )}
          >
            {"Type an amount of $5-$1,200 per transaction"}
          </label>
        </div>
        <div className="mt-10 w-full">
          <ul className="flex max-w-xl select-none flex-row flex-wrap justify-center gap-4">
            {["$10.00", "$20.00", "$50.00", "$100.00", "$200.00", "Custom"].map(
              (amount) => (
                <li key={amount} className="mx-auto">
                  <input
                    type="radio"
                    id={`contr-${amount}`}
                    name="donation"
                    value={amount}
                    className="peer hidden shadow-md"
                    onClick={(e) => selectedAmount(e)}
                    {...(amount === "Custom" && { defaultChecked: true })}
                  />
                  <label
                    htmlFor={`contr-${amount}`}
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-3 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600 xl:p-5"
                  >
                    <div className="block">
                      <div className="w-full font-semibold xl:text-lg">{`${amount}`}</div>
                      <div className="w-full">
                        <p className="xl:text-base">Donation</p>
                      </div>
                    </div>
                    <TbHeartHandshake className="text-3xl text-rose-700 xl:text-4xl" />
                  </label>
                </li>
              ),
            )}
          </ul>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="my-5 inline-flex w-full justify-center rounded-lg bg-blue-600 px-4 pb-2 pt-3 text-center font-bold text-white hover:bg-blue-800"
          >
            Continue
            <svg
              className="ml-3 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
