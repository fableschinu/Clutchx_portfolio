import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? {} : { y, opacity: 0 }}
      whileInView={reduce ? {} : { y: 0, opacity: 1 }}
      viewport={{ once, margin: '-80px' }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}