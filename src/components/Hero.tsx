import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero(): JSX.Element {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-16 pb-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        
        {/* Badge */}
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-sm"
        >
          <Sparkles className="h-4 w-4" />
          Thumbnail Strategist
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={reduce ? { y: 0 } : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="font-display text-6xl font-extrabold leading-tight tracking-tight text-white sm:text-8xl lg:text-9xl"
        >
          Ankush Designs
        </motion.h1>
        
        {/* Tagline */}
        <motion.p
          initial={reduce ? { y: 0 } : { y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-6 font-display text-2xl font-medium text-gray-300 sm:text-3xl lg:text-4xl"
        >
          Professional Thumbnail Designer and Strategist
        </motion.p>

        {/* CTA Buttons with Glowing Red Pill UI */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="#showcase"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-red-500/80 to-red-700/90 px-10 py-4 text-lg font-semibold text-white shadow-[0_0_25px_rgba(239,68,68,0.4)] border border-red-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(239,68,68,0.6)]"
          >
            <span>View Portfolio</span>
            <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-zinc-800/80 to-zinc-950/90 px-10 py-4 text-lg font-semibold text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] border border-red-500/30 transition-all duration-300 hover:border-red-500/80 hover:scale-105 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]"
          >
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-ink-300 p-1 bg-ink-50/50">
          <motion.span
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1.5 rounded-full bg-brand"
          />
        </div>
      </motion.div>
    </section>
  );
}