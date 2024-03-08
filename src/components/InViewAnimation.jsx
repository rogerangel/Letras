"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function InViewAnimation({
  children,
  parentClassName,
  className,
  animateOnce = true,
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: animateOnce, offset: 0.5 });

  const style = {};
  for (const key in props) {
    if (key in props) {
      switch (key) {
        case "transform":
          style.transform = isInView ? props.transform.in : props.transform.out;
          break;
        case "opacity":
          style.opacity = isInView ? props.opacity.in : props.opacity.out;
          break;
        case "scale":
          style.scale = isInView ? props.scale.in : props.scale.out;
          break;
        case "rotate":
          style.rotate = isInView ? props.rotate.in : props.rotate.out;
          break;
        case "transition":
          style.transition = props.transition;
          break;
        default:
          break;
      }
    }
  }

  return (
    <div ref={ref} className={parentClassName}>
      <div className={className} style={style} {...props}>
        {children}
      </div>
    </div>
  );
}
