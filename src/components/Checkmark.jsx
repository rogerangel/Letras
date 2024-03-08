"use client";

import { motion } from "framer-motion";

const circleVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.09, 1],
    transition: { duration: 0.32, delay: 1.03 },
  },
};

const checkVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 0.34, delay: 0.8 },
  },
};

const outlineVariants = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 0.38 },
  },
};

const circleFadeVariants = {
  initial: { scale: 1 },
  animate: {
    scale: 0,
    transition: { duration: 0.35, delay: 0.35 },
  },
};

const Checkmark = () => {
  return (
    <motion.svg
      className="h-28 w-28" // TailwindCSS classes for width and height
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 133 133"
      initial="initial"
      animate="animate"
      variants={circleVariants}
    >
      <motion.circle
        cx="66.5"
        cy="66.5"
        r="54.5"
        fill="#059669"
        stroke="#059669"
        strokeWidth="8"
        variants={outlineVariants}
      />
      <motion.circle
        cx="66.5"
        cy="66.5"
        r="55.5"
        fill="#fafaf9"
        variants={circleFadeVariants}
      />
      <motion.polyline
        fill="none"
        stroke="#fafaf9"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="41 70 56 85 92 49"
        variants={checkVariants}
        style={{ pathLength: 0 }}
      />
    </motion.svg>
  );
};

export default Checkmark;
