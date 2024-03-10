"use client";

import React from "react";
import { motion } from "framer-motion";

function LetterStagger({
  children,
  className,
  as = "div",
  variant,
  animeDelay = 0,
  stagger = 0.05,
}) {
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

  const letters = children.split("");

  const parentVariants = {
    initial: {},
    animate: {
      transition: { delay: animeDelay, staggerChildren: stagger },
    },
  };

  const MotionEl = motion[as];
  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      animate="animate"
      className={className}
    >
      {letters.map((letter, index) => (
        <MotionEl
          //   className={index < letters.length - 1 ? "mr-1" : ""}
          key={index}
          variants={variant}
        >
          {/* {letter} */}
          {letter === " " ? "\u00A0" : letter}
        </MotionEl>
      ))}
    </motion.div>
  );
}

export default LetterStagger;
