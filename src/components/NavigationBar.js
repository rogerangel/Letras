"use client";

import Image from "next/image";
// import AvianDrivingSchoolLogo from "../../public/AvianDrivingSchoolLogo.png";
import letras from "../../public/letras.png";

function NavigationBar() {
  const scroll2Sel = (sel) => () => {
    const el = document.getElementById(sel);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky w-full top-0 z-10">
      <div className="flex w-full h-28 bg-stone-300/90 backdrop-blur-sm flex-col items-center justify-center shadow-md">
        <div className="flex w-full items-center justify-between px-4">
          <div className="flex items-center">
            <button onClick={scroll2Sel("hero")}>
              <Image
                src={letras}
                alt="Avian Driving School Logo"
                width="auto"
                height={80}
              />
            </button>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 md:space-x-8 md:text-lg text-xs">
            <button className="mt-2 pt-3 underline-offset-4 hover:underline font-medium hover:font-semibold hover:bg-neutral-700/70 rounded-md hover:text-neutral-200 hover:duration-500 duration-500 p-2 px-3">
              About Us
            </button>
            <button className="mt-2 pt-3 underline-offset-4 hover:underline font-medium hover:font-semibold hover:bg-neutral-700/70 rounded-md hover:text-neutral-200 hover:duration-500 duration-500 p-2 px-3">
              Current Projects
            </button>
            <button className="mt-2 pt-3 underline-offset-4 hover:underline font-medium hover:font-semibold hover:bg-neutral-700/70 rounded-md hover:text-neutral-200 hover:duration-500 duration-500 p-2 px-3">
              Contact Us
            </button>
            <button className="bg-amber-400 pt-3 pb-1 px-3 rounded-full font-semibold hover:duration-300 duration-300 hover:scale-110 text-neutral-700 hover:bg-amber-500 shadow-lg">
              Donate Today!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
