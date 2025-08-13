"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  as: Component = "div"
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  const getInitialAnimation = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const getWhileInViewAnimation = () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    };
  };

  return (
    <motion.div
      ref={ref}
      as={Component}
      className={cn(className)}
      initial={getInitialAnimation()}
      whileInView={getWhileInViewAnimation()}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}