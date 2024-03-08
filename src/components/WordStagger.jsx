"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WordStagger({
  children,
  className,
  as = "div",
  variant,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (typeof children !== "string") {
    throw new Error("Children must be a string");
  }

  if (!as && typeof as !== "string") {
    throw new Error("As prop must be a string");
  }

  const validAs = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"];

  if (!validAs.includes(as)) {
    throw new Error("As prop must a valid Text HTML element");
  }

  // const words = children.replace(/ /g, "\u00A0").split(" ");
  const words = children.split(" ");

  const parentVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.03 } },
  };

  const MotionEl = motion[as];

  return (
    <motion.p
      ref={ref}
      variants={parentVariants}
      initial="initial"
      animate={isInView ? "animate" : ""}
      // className="flex-no-wrap flex"
      // className="flex w-full flex-wrap justify-center px-1.5 text-xl font-medium text-neutral-700 md:w-1/2 md:p-0 md:text-2xl"
      className={className}
    >
      {words.map((word, index) => (
        <MotionEl
          // className={`${className} ${index < words.length - 1 ? "mr-1" : ""}`}
          className={index < words.length - 1 ? "mr-1" : ""}
          key={index}
          variants={variant}
        >
          {word}
          {/* {index < word.length - 1 && "\u00A0"}{" "} */}
          {/* Add a space after each word except the last one */}
        </MotionEl>
      ))}
    </motion.p>
  );
}
