"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion"

export default function ScrollCard({children, className}) {
const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.5 1"]
    });

  return (
    <motion.div
    className={className}
    ref={ref}
    style={{ scale: scrollYProgress }}
    >
  {children}
    </motion.div>
  )
}
