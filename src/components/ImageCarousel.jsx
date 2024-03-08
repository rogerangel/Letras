"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const variants = {
  enter: (direction) => ({
    zIndex: 0,
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function ImageCarousel({ images, captions }) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isTimerActive, setIsTimerActive] = useState(true); // New state to control timer
  const imageIndex = wrap(0, images.length, page);

  const paginate = useCallback(
    (newDirection) => {
      setPage([page + newDirection, newDirection]);
      setIsTimerActive(true); // Reactivate timer when paginating
    },
    [page],
  );

  useEffect(() => {
    if (!isTimerActive) return; // If timer is not active, don't set it

    const timer = setTimeout(() => {
      paginate(1);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup function now clears the timer
  }, [page, isTimerActive, paginate]); // Depend on isTimerActive to restart the timer

  const handleImageClick = () => {
    isTimerActive ? setIsTimerActive(false) : setIsTimerActive(true);
  };

  return (
    <div className="relative mx-auto h-[38rem] w-full rounded-2xl border border-zinc-300 bg-white/85 p-7 drop-shadow md:w-[72%]">
      <div className="relative mx-auto flex h-full w-[100%] items-center justify-center rounded-md bg-black shadow-inner">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="absolute"
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 15 },
              opacity: { duration: 0.1 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onClick={handleImageClick} // Add click handler to the image
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Image
              src={Object.values(images)[imageIndex].src}
              alt="carousel image"
              className="aspect-square max-h-[550px] object-contain"
              onContextMenu={(e) => e.preventDefault()}
              width={550}
              height={550}
            />
          </motion.div>
        </AnimatePresence>
        <div className="text-md absolute left-[10px] top-1 z-10 flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-gray-800/90 font-bold text-white">
          {isTimerActive ? (
            <FaPause onClick={() => setIsTimerActive(false)} />
          ) : (
            <FaPlay onClick={() => setIsTimerActive(true)} />
          )}
        </div>
        <div
          className="absolute right-5 top-[calc(50%-2rem)] z-10 flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-gray-800/90 text-2xl font-bold text-white"
          onClick={() => paginate(1)}
        >
          <FaRegArrowAltCircleRight />
        </div>
        <div
          className="absolute left-5 top-[calc(50%-2rem)] z-10 flex h-8 w-8 cursor-pointer select-none items-center justify-center rounded-full bg-gray-800/90 text-2xl font-bold text-white"
          onClick={() => paginate(-1)}
        >
          <FaRegArrowAltCircleLeft />
        </div>
        <div className="absolute bottom-6 z-10 flex items-center justify-center rounded-md bg-gray-900/80 p-2">
          <p className="text-sm text-white">
            {Object.values(images)[imageIndex].caption ||
              "No captions available"}
          </p>
        </div>
        <div className="absolute bottom-2 z-10 flex items-center justify-center space-x-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 cursor-pointer rounded-full bg-gray-800/50 ${
                imageIndex === i ? "bg-gray-50/100" : ""
              }`}
              onClick={() => setPage([i, i - page])}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
