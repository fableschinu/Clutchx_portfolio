import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
};

const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const reduce = useReducedMotion();
  const isCenter = align === 'center';

  return (
    <div
      className={`flex flex-col ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && (
        <Reveal>
          {/* Solid Blue Box with White Text */}
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-md">
            {/* Chhoti white dot */}
            <span className="h-1.5 w-1.5 rounded-full bg-white shadow-sm" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={0.05}>
        {/* Heading Size Kam Ki Hain: (Old: text-4xl sm:text-5xl md:text-6xl -> New: text-2xl sm:text-3xl md:text-4xl) */}
        <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
          {title}
        </h2>
      </Reveal>

      <motion.div
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`mt-4 h-px w-20 origin-${
          isCenter ? 'center' : 'left'
        } bg-[#2563EB] shadow-md ${isCenter ? 'mx-auto' : ''}`}
        style={{ transformOrigin: isCenter ? 'center' : 'left' }}
        aria-hidden
      />

      {subtitle && (
        <Reveal delay={0.1}>
          {/* Subheading Size Kam Ki Hain: (Old: text-base sm:text-lg -> New: text-sm sm:text-base) */}
          <p
            className={`mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base ${
              isCenter ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}

      {!reduce && (
        <span className="sr-only" aria-hidden>
          {title}
        </span>
      )}
    </div>
  );
}

export function GlowCard({
  children,
  className = '',
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-blue-50/80 backdrop-blur-xl border border-blue-200 p-6 transition-all duration-500 shadow-sm ${
        hover
          ? 'hover:bg-blue-100/80 hover:border-[#2563EB]/40 hover:shadow-md hover:-translate-y-1'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}