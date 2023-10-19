"use client";
import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Baloo_2 } from "next/font/google";
import kids_tiles from "../../public/kids_tiles.jpg";

const LogoFont = Baloo_2({
  subsets: ["latin"],
});

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function Hero() {
  const ref = useRef();
  const inView = useInView(ref, {
    once: true,
  });
  return (
    <div className="relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        // initial={{ x: -300, opacity: 0, scale: 0.1 }}
        // animate={{ x: 0, opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
        transition={{
          duration: 1.9,
          delay: 0.0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Image
          src={kids_tiles}
          alt="Tiles of kids reading"
          className="img w-full h-auto min-h-[550px] object-cover"
          priority
        />
      </motion.div>
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          // initial={{ x: -300, opacity: 0, scale: 0.1 }}
          // animate={{ x: 0, opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{
            duration: 1.9,
            delay: 1.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          // className="absolute top-0 h-full flex flex-col justify-around md:justify-evenly items-center gap-1 md:top-[12.25%] md:left-[5%] md:w-[38%] md:h-[72%] bg-stone-700 md:bg-stone-600 rounded-lg shadow-2xl px-3 bg-opacity-70 md:bg-opacity-90 md:backdrop-blur-sm"
          className="absolute w-full top-0 h-full flex flex-col justify-around md:justify-evenly items-center bg-stone-900 shadow-2xl px-3 bg-opacity-70 md:bg-opacity-70"
        // className="h-full flex flex-col justify-around md:justify-evenly items-center bg-stone-900 shadow-2xl px-3 bg-opacity-70 md:bg-opacity-70"
        >
          <h1
            className={classNames(
              LogoFont.className,
              "text-4xl lg:text-5xl text-center md:text-left md:px-5 font-extrabold md:font-bold text-emerald-500"
            )}
          >
            Little Learners Need Your Help!
          </h1>
          <h3 className="text-2xl lg:text-3xl md:px-10 text-center font-semibold tracking-wider italic text-neutral-200">
            {`"Together we strive to empower people and transform lives through the
          power of education and cultural understanding."`}
          </h3>
          <div className="flex flex-row">
            <button className="bg-amber-400 duration-300 rounded-full pt-4 pb-1 px-4 text-neutral-800 text-xl font-semibold hover:duration-300 hover:scale-110 hover:font-semibold hover:bg-amber-500 shadow-xl">
              Donate Today!
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
