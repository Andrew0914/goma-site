"use client";
import { motion, useIsPresent } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const slideFadeIn = {
  initial: { scale: 0.995, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

export default function PageTransition(props: PageTransitionProps) {
  return (
    <motion.section className={props.className} {...slideFadeIn}>
      {props.children}
    </motion.section>
  );
}
