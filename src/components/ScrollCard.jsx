"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollCard({
  children,
  className,
  offset = ["0 1", "0.5 1"],
}) {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["0 1", "0.5 1"],
    offset: isMobile ? ["0 1.5", "0.5 1.2"] : offset,
  });
  // change a value depending on viewport width
  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, []);

  return (
    <motion.div
      className={className}
      ref={ref}
      style={{ scale: scrollYProgress }}
    >
      {children}
    </motion.div>
  );
}
