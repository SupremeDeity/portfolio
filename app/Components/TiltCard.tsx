"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

export function TiltCard(props: React.HTMLAttributes<HTMLDivElement>) {
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = 32.5 / 2;
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
  const background = useMotionValue(
    "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #018445, #0a0a0a) border-box"
  );

  const handleMouseMove = (e: any) => {
    if (!ref.current) return [0, 0];

    // @ts-ignore
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    background.set(
      `radial-gradient(ellipse farthest-corner at ${e.clientX - rect.left}px ${
        e.clientY - rect.top
      }px, #044E2A, rgba(0, 0, 0, 1.0))`
    );

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    background.set(
      "linear-gradient(black, black) padding-box, linear-gradient(to bottom, #018445, #0a0a0a) border-box"
    );
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background,
        transformStyle: "preserve-3d",
        transform,
      }}
      className={"box " + props.className}
    >
      {props.children}
    </motion.div>
  );
}
