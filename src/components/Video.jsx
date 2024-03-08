"use client";

import { useRef, useEffect } from "react";
import { scroll } from "framer-motion/dom";

export default function Video({ source, className }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.pause();

    scroll((progress) => {
      if (video.readyState) {
        video.currentTime = video.duration * (progress * 2.0);
      }
    });
  }, []);

  return (
    <video
      ref={videoRef}
      src={source}
      controls={false}
      autoPlay
      loop
      muted
      className={className}
    />
  );
}
