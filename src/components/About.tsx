import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function About(): JSX.Element {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section-pad relative px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand"
          >
            <Sparkles className="h-3.5 w-3.5" />
            About Me
          </motion.span>
          
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            Built for Creators
          </motion.h2>
        </div>

        {/* Grid layout: Left Vertical Rectangular Image, Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-12 lg:gap-16">
          
          {/* Left: Vertical Rectangular Image */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border-2 border-ink-300 bg-ink-100 shadow-2xl shadow-brand/10">
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60 z-10"></div>
              
              {/* Ankush Photo (uses /ankush.jpg from public folder) */}
              <img
                src="/ankush.jpg"
                alt="Ankush - Professional Thumbnail Designer"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x800/13161B/F9FAFB?text=Ankush+Designs';
                }}
              />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 z-20 rounded-2xl bg-ink-200/80 backdrop-blur-md border border-ink-300 px-4 py-3 shadow-lg">
                <p className="font-display text-sm font-bold text-white">3+ Years Experience</p>
                <p className="text-xs text-gray-400">Specialized in YouTube CTR</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Clean Bio Content with Highlighted Name */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col text-left space-y-6"
          >
            <p className="font-display text-xl sm:text-2xl font-semibold text-white leading-relaxed">
              Hi, I&apos;m <span className="text-brand font-bold underline decoration-brand/50 underline-offset-8">Ankush</span>. I&apos;m a professional Thumbnail Designer with 3 years of experience, focused on creating clean, premium, and eye-catching thumbnails that help videos get more clicks and views.
            </p>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              During this journey, I&apos;ve worked closely with creators to understand audience psychology and what makes a viewer click on YouTube. I keep my designs simple, creative, and strictly tailored for high performance.
            </p>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              I don&apos;t design websites, logos, or social media posts. My complete focus is exclusively on crafting premium YouTube thumbnails that maximize click-through rates (CTR) and video success.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}