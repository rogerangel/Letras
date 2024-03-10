"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import letras from "../../public/letras.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LetterStagger from "./LetterStagger";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const routes = [
    { name: "About Us", route: "/about" },
    { name: "Current Projects", route: "/projects" },
    { name: "Contact Us", route: "/contact" },
    { name: "Donate", route: "/donate", className: "rounded-xl bg-amber-400 px-4 pt-4 align-text-bottom font-semibold tracking-tight text-neutral-700 duration-300 hover:bg-amber-500 hover:duration-300 md:rounded-3xl md:pt-2 md:shadow-lg" },
  ];

  const animationVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="sticky top-0 z-10 w-full select-none">
      <div
        className="flex h-24 w-full flex-col items-center justify-center shadow-sm backdrop-blur-sm bg-stone-300/90"
      >
        <div className="relative flex w-full items-end justify-between px-3">
          <div className="">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src={letras}
                alt="Letras Icon Logo"
                width="auto"
                height={80}
              />
            </Link>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-stone-400 focus:bg-stone-400 focus:outline-none md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={classNames(
              "sm:text-md absolute right-0 z-10 w-full md:block md:w-auto md:text-lg",
              open ? "block text-3xl" : "hidden",
            )}
          >
            <ul className="absolute me-4 mt-[8px] flex h-screen w-full flex-col whitespace-nowrap bg-stone-300/90 p-4 rtl:space-x-reverse md:relative md:mt-0 md:h-auto md:flex-row md:space-x-2 md:border-0 md:bg-transparent md:p-0 md:font-medium lg:space-x-8">
              {routes.map((route, index) => (
                <li key={index}>
                  <button
                    onClick={() => setOpen(false)}
                    className={classNames(
                      route.name === "Donate" ? route.className : "mb-2 rounded-md px-2 pt-2 font-medium duration-500 hover:bg-neutral-700/70 hover:font-semibold hover:text-neutral-200 hover:duration-500",
                      path === route.route && route.name !== "Donate" ? "bg-neutral-500/70 font-semibold text-neutral-200" : "",
                    )}
                  >
                    <Link href={route.route}>
                      <LetterStagger as="p" variant={animationVariants} className="flex">
                        {route.name}
                      </LetterStagger>
                    </Link>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
