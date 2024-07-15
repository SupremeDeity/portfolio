"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

export function SkillBox(props: HTMLAttributes<HTMLDivElement>) {
const parent = {
  hover: { rotate: "45deg", transition: {duration: 0.4}, background: "rgb(6 78 59 / 0.6)" },
}

const child = {
  hover: { rotate: "-45deg", transition: {duration: 0.4} },
}

  return (
    <motion.div
    variants={parent}
    whileHover="hover"
      className={cn(
        "border border-emerald-600 blurshadow_large w-max p-4 rounded",
        props.className
      )}
    >
      <motion.div variants={child}>{props.children}</motion.div>
    </motion.div>
  );
}
