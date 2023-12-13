"use client";

import { useState } from "react";
import Link from "next/link";

export default function DonateForm() {
  const [amount, setAmount] = useState("");

  return (
    <div className="px-1 md:px-16">
      <div className="mb-5">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Donation Amount
        </label>
        <input
          id="amount"
          name="amount"
          type="text"
          placeholder="$0.00"
          value={amount}
          className="mt-1 h-20 p-2 font-semibold text-right focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm text-2xl border-gray-300 rounded-md"
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <ul className="flex flex-row flex-wrap gap-4 justify-center">
        <li>
          <input
            type="radio"
            id="contr-ten"
            name="contr_ten"
            value={10}
            className="peer hidden"
            onClick={(e) => setAmount(e.target.value)}
          />
          <label
            htmlFor="contr-ten"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">$10.00</div>
              <div className="w-full">
                <p className="text-base">Contribution</p>
              </div>
            </div>
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
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="contr-twenty"
            name="contr_twenty"
            value={20}
            className="peer hidden"
            onClick={(e) => setAmount(e.target.value)}
          />
          <label
            htmlFor="contr-twenty"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">$20.00</div>
              <div className="w-full">
                <p className="text-base">Contribution</p>
              </div>
            </div>
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
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="contr-fifty"
            name="contr_fifty"
            value={50}
            className="peer hidden"
            onClick={(e) => setAmount(e.target.value)}
          />
          <label
            htmlFor="contr-fifty"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">$50.00</div>
              <div className="w-full">
                <p className="text-base">Contribution</p>
              </div>
            </div>
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
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="contr-hundred"
            name="contr_hundred"
            value={100}
            className="peer hidden"
            onClick={(e) => setAmount(e.target.value)}
          />
          <label
            htmlFor="contr-hundred"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">$100.00</div>
              <div className="w-full">
                <p className="text-base">Contribution</p>
              </div>
            </div>
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
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="contr-two-hundred"
            name="contr_two_hundred"
            value={200}
            className="peer hidden"
            onClick={(e) => setAmount(e.target.value)}
          />
          <label
            htmlFor="contr-two-hundred"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">$200.00</div>
              <div className="w-full">
                <p className="text-base">Contribution</p>
              </div>
            </div>
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
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="contr-custom"
            name="contr_custom"
            value={0}
            className="peer hidden"
            onClick={(e) => setAmount(e.target.value)}
            defaultChecked
          />
          <label
            htmlFor="contr-custom"
            className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-blue-600"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">Custom</div>
              <div className="w-full">
                <p className="text-base">Contribution</p>
              </div>
            </div>
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
          </label>
        </li>
      </ul>
      <Link
        className="inline-flex mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold pt-3 pb-2 px-4 rounded"
        href={`/donate/checkout?amount=${amount}`}
        prefetch={false}
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
      </Link>
    </div>
  );
}
