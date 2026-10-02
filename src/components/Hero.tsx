import { useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Eye, TrendingUp } from 'lucide-react';

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const glowX = useTransform(mx, [-0.5, 0.5], ['20%', '80%']);
  const glowY = useTransform(my, [-0.5, 0.5], ['20%', '80%']);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative flex min-h-[90vh] items-center overflow-hidden px-6 pt-24 pb-12"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        
        {/* Left: Copy & Typography (Balanced Sizes) */}
        <div className="flex flex-col items-start">
          
          {/* Badge */}
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            YouTube Thumbnail Specialist
          </motion.span>

          {/* Main Title - Fixed Size (Old: text-8xl -> New: text-4xl sm:text-5xl lg:text-6xl) */}
          <motion.h1
            initial={reduce ? { y: 0 } : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="font-display text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            INCENDIUS
          </motion.h1>
          
          {/* Tagline */}
          <motion.p
            initial={reduce ? { y: 0 } : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-3 font-display text-lg font-semibold text-gray-800 sm:text-xl"
          >
            Professional YouTube Thumbnail Designer
          </motion.p>

          {/* Description Paragraph */}
          <motion.p
            initial={reduce ? { y: 0 } : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="mt-4 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base"
          >
            I create high-converting YouTube thumbnails that help creators grab
            attention and increase clicks. With 2+ years of experience, I focus
            exclusively on YouTube thumbnail design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row"
          >
            <a
              href="#showcase"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-lg hover:-translate-y-0.5"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right: Glowing Thumbnail Mockup (Balanced Mockup Text) */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative aspect-video w-full"
          >
            {/* Main Thumbnail Card */}
            <div 
              className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-[#93c5fd] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15),_0_0_25px_-5px_rgba(37,99,235,0.25)] transition-all duration-500 hover:border-[#2563EB]"
              style={{
                background: 'linear-gradient(to bottom, #bfdbfe 0%, #ffffff 100%)'
              }}
            >
              
              <motion.div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background: useTransform(
                    [glowX, glowY],
                    ([x, y]) =>
                      `radial-gradient(350px circle at ${x} ${y}, rgba(255,255,255,0.8), transparent 60%)`,
                  ),
                }}
                aria-hidden
              />

              <div className="relative flex h-full w-full items-center justify-center p-6">
                <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 40%, rgba(59,130,246,0.2), transparent 50%)' }} />

                {/* Inner Mockup Text (Balanced Size) */}
                <div className="relative z-10 text-center">
                  <p className="font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-gray-900 sm:text-3xl">
                    CLICK <span className="text-[#2563EB]">WORTHY</span>
                  </p>
                  <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.25em] text-gray-600 sm:text-xs">
                    Thumbnails That Convert
                  </p>
                </div>

                {/* Play Icon Badge */}
                <motion.div
                  animate={reduce ? {} : { scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 shadow-md sm:h-12 sm:w-12"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <Play className="h-4 w-4 translate-x-0.5 fill-white text-white sm:h-5 sm:w-5" />
                </motion.div>

                {/* Floating Stat Chip 1 - Top Left */}
                <motion.div
                  animate={reduce ? {} : { y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-3 top-3 z-20 flex items-center gap-1.5 rounded-xl bg-gray-200/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-gray-900 shadow-md border border-white/60"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <Eye className="h-3.5 w-3.5 text-[#2563EB]" />
                  2M+ Views
                </motion.div>

                {/* Floating Stat Chip 2 - Bottom Right Offset */}
                <motion.div
                  animate={reduce ? {} : { y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -right-3 bottom-14 z-20 flex items-center gap-1.5 rounded-xl bg-gray-200/80 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-gray-900 shadow-md border border-white/60"
                  style={{ transform: 'translateZ(50px)' }}
                >
                  <TrendingUp className="h-3.5 w-3.5 text-[#2563EB]" />
                  High CTR
                </motion.div>
              </div>
            </div>
          </motion.div>

          {!reduce && (
            <>
              <motion.div
                className="absolute -left-6 top-1/3 h-2.5 w-2.5 rounded-full bg-[#3B82F6]"
                animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -right-6 top-2/3 h-2 w-2 rounded-full bg-[#60A5FA]"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
            </>
          )}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-gray-300 p-1">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-[#2563EB]"
          />
        </div>
      </motion.div>
    </section>
  );
}