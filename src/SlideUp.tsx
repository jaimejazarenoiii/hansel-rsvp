"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type SlideUpProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
};

const SlideUp = ({ children, delay = 0, duration = 0.5 }: SlideUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: "easeOut" },
          });
          setHasAnimated(true);
          observer.disconnect(); // stop observing after animation
        }
      },
      {
        threshold: 0.1, // trigger when at least 10% of element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls, delay, duration, hasAnimated]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default SlideUp;
