"use client";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
// import { Baloo_2 } from "next/font/google";
import kids_tiles from "../../public/kids_tiles.jpg";
// import Link from "next/link";
// import LetterStagger from "./LetterStagger";

// const LogoFont = Baloo_2({
//   subsets: ["latin"],
// });

// const classNames = (...classes) => {
//   return classes.filter(Boolean).join(" ");
// };

export default function Hero({ children }) {
  const ref = useRef();

  // const fadeInAndDarken = {
  //   initial: {
  //     opacity: 0,
  //     backgroundColor: "rgba(28, 25, 23, 0.9)",
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1.9,
  //       delay: 1.7,
  //       ease: [0, 0.71, 0.2, 1.01],
  //     },
  //     backgroundColor: "rgba(28, 25, 23, 0.9)",
  //   },
  //   darken: {
  //     backgroundColor: "rgba(28, 25, 23, 0.6)",
  //     transition: {
  //       duration: 1,
  //       delay: 6.7,
  //       ease: [0, 0.71, 0.2, 1.01],
  //     },
  //   },
  // };

  return (
    <div className="relative" id="hero">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.9,
          delay: 0.0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src={kids_tiles}
          alt="Tiles of kids reading"
          className="img h-auto min-h-[550px] w-full object-cover"
        />
      </motion.div>
      <AnimatePresence>
        <motion.div
          ref={ref}
          // variants={fadeInAndDarken}
          // initial="initial"
          // animate={["animate", "darken"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.9,
            delay: 1.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="absolute top-0 flex h-full w-full flex-col items-center justify-around bg-stone-900 bg-opacity-70 px-3 shadow-2xl md:justify-evenly md:bg-opacity-60"
          // className="absolute top-0 flex h-full w-full flex-col items-center justify-around px-3 shadow-2xl md:justify-evenly"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
