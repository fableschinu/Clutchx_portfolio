import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MousePointer } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Hero(): JSX.Element {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Main Container - Determines the final size of the box */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center text-center p-20 sm:p-32">
        
        {/* 1. Animated Selection Box (Animates Width & Height to perfectly carry the pointer) */}
        <motion.div 
          initial={{ width: '0%', height: '0%' }}
          animate={{ width: '100%', height: '100%' }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute top-0 left-0 z-0"
        >
          {/* Dashed Border Background Layer */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              border: '1px dashed rgba(229, 231, 235, 0.7)',
              backgroundImage: `
                linear-gradient(to right, rgba(229, 231, 235, 0.7) 6px, transparent 6px) top,
                linear-gradient(to bottom, rgba(229, 231, 235, 0.7) 6px, transparent 6px) right,
                linear-gradient(to right, rgba(229, 231, 235, 0.7) 6px, transparent 6px) bottom,
                linear-gradient(to bottom, rgba(229, 231, 235, 0.7) 6px, transparent 6px) left
              `,
              backgroundSize: '16px 1px, 1px 16px, 16px 1px, 1px 16px',
              backgroundRepeat: 'repeat-x, repeat-y, repeat-x, repeat-y',
            }}
          />

          {/* Photoshop Selection Corner Handles */}
          <span className="absolute -top-1.5 -left-1.5 h-3 w-3 bg-brand border border-white/40 z-20" />
          <span className="absolute -top-1.5 -right-1.5 h-3 w-3 bg-brand border border-white/40 z-20" />
          <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-brand border border-white/40 z-20" />
          
          {/* Bottom-Right Red Square with attached Mouse Pointer */}
          {/* Box ki width/height badhne ke sath ye corner apne aap drag hota hua dikhega */}
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-brand border border-white/40 flex items-center justify-center z-30">
            <MousePointer className="absolute -bottom-3 -right-3 h-5 w-5 text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] rotate-[-15deg] z-40" />
          </div>
        </motion.div>

        {/* 2. Inner Content Revealed after Box Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center w-full"
        >
          {/* Eyebrow Badge */}
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/40 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-brand shadow-[0_0_20px_rgba(220,38,38,0.3)]">
              <Sparkles className="h-4 w-4" />
              Thumbnail Strategist
            </div>
          </Reveal>

          {/* Main Title */}
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-lg">
              Ankush Designs
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg sm:text-2xl font-medium text-gray-300 max-w-2xl">
              Professional Thumbnail Designer and Strategist
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#showcase"
                className="group inline-flex items-center gap-3 rounded-2xl bg-brand px-8 py-4 text-base font-bold text-white shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_35px_rgba(220,38,38,0.8)] hover:-translate-y-0.5"
              >
                <span>View Portfolio</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-ink-300 bg-ink-200/60 px-8 py-4 text-base font-bold text-gray-200 backdrop-blur-md transition-all duration-300 hover:border-brand/60 hover:bg-brand/10 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </motion.div>

      </div>
    </section>
  );
}