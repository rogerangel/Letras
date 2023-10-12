"use client";
import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Baloo_2 } from "next/font/google";
import kids_tiles from "../../public/kids_tiles.png";

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
      <Image
        src={kids_tiles}
        alt="Tiles of kids reading"
        className="img w-full h-auto min-h-[550px] object-cover"
        priority
      />
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial={{ x: -300, opacity: 0, scale: 0.1 }}
          animate={{ x: 0, opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="hidden md:flex flex-col justify-evenly items-center gap-1 absolute top-[12.25%] left-[5%] w-[38%] h-[72%] bg-stone-600 rounded-lg shadow-2xl px-3 bg-opacity-90 backdrop-blur-sm"
        >
          <h1
            className={classNames(
              LogoFont.className,
              "text-xs sm:text-2xl md:text-4xl lg:text-5xl px-5 font-bold text-emerald-600"
            )}
          >
            Little Learners Need Your Help!
          </h1>
          <h3 className="text-xs sm:text-xl md:text-2xl lg:text-3xl px-10 text-center font-semibold tracking-wider italic text-neutral-200">
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
