import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

type Thumb = { id: string; label: string; image: string };

const row1: Thumb[] = [
  { id: 'r1-1', label: 'Day 1-19', image: '/thumbnail/day1-19.jpg' },
  { id: 'r1-2', label: 'Clarity Sales', image: '/thumbnail/clarity sales.jpg' },
  { id: 'r1-3', label: 'card fees', image: '/thumbnail/card fees.png' },
  { id: 'r1-4', label: 'Only 24 Hours', image: '/thumbnail/only 24 hours.jpg' },
  { id: 'r1-5', label: 'gpt', image: '/thumbnail/gpt.jpg' },
];

const row2: Thumb[] = [
  { id: 'r2-1', label: 'ai automation', image: '/thumbnail/ai automation.png' },
  { id: 'r2-2', label: 'fake payout', image: '/thumbnail/fake payout.png' },
  { id: 'r2-3', label: 'live trading aug', image: '/thumbnail/live trading aug.png' },
  { id: 'r2-4', label: 'carry bgmi', image: '/thumbnail/carry bgmi.jpg' },
  { id: 'r2-5', label: 'Spot Scam', image: '/thumbnail/spot scam.jpeg' },
];

const row3: Thumb[] = [
  { id: 'r3-1', label: 'krishan pankaj', image: '/thumbnail/krishan pankaj.png' },
  { id: 'r3-2', label: 'mc donald', image: '/thumbnail/mc donald.png' },
  { id: 'r3-3', label: 'fifa version 1', image: '/thumbnail/fifa version 1.png' },
  { id: 'r3-4', label: 'documentary', image: '/thumbnail/documentary.png' },
  { id: 'r3-5', label: 'hustle growth', image: '/thumbnail/hustle growth.jpg' },
];

export function Showcase() {
  const [selectedImage, setSelectedImage] = useState<Thumb | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="showcase" className="section-pad relative overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Portfolio
        </motion.span>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          Thumbnail portfolio
        </motion.h2>
      </div>

      {/* Marquee Rows with Negative Margin */}
      <div className="mt-14 flex flex-col gap-6 -mx-6 sm:-mx-8 lg:-mx-12">
        
        {/* Row 1: Moves Right */}
        <MarqueeRow 
          items={row1} 
          duration={42} 
          direction="right" 
          reduce={reduce} 
          onSelect={setSelectedImage} 
        />

        {/* Row 2: Moves Left */}
        <MarqueeRow 
          items={row2} 
          duration={48} 
          direction="left" 
          reduce={reduce} 
          onSelect={setSelectedImage} 
        />

        {/* Row 3: Moves Right */}
        <MarqueeRow 
          items={row3} 
          duration={45} 
          direction="right" 
          reduce={reduce} 
          onSelect={setSelectedImage} 
        />

      </div>

      {/* Lightbox Modal for Large Image View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full overflow-hidden rounded-2xl border border-brand/50 bg-ink-200 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-brand transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.label}
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="p-4 text-center">
              <p className="font-display text-lg font-bold text-white capitalize">{selectedImage.label}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function MarqueeRow({ 
  items, 
  duration, 
  direction, 
  reduce, 
  onSelect 
}: { 
  items: Thumb[]; 
  duration: number; 
  direction: 'left' | 'right'; 
  reduce: boolean | null; 
  onSelect: (t: Thumb) => void; 
}) {
  const doubled = [...items, ...items, ...items];
  const initialX = direction === 'right' ? ['-50%', '0%'] : ['0%', '-50%'];

  return (
    <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
      <motion.div
        className="flex gap-6"
        animate={reduce ? {} : { x: initialX }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ width: 'max-content' }}
      >
        {doubled.map((t, i) => (
          <div 
            key={`${t.id}-${i}`} 
            onClick={() => onSelect(t)}
            className="w-[48vw] sm:w-[40vw] lg:w-[28vw] xl:w-[24vw] cursor-pointer"
          >
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-ink-300 bg-ink-100 transition-all duration-300 hover:scale-[1.03] hover:border-brand hover:shadow-[0_12px_30px_-8px_rgba(239,68,68,0.3)]">
              <img
                src={t.image}
                alt={t.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/1280x720/13161B/F9FAFB?text=Ankush+Thumbnail';
                }}
              />
              {/* Red Hover Glow Ring */}
              <div 
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                style={{ 
                  boxShadow: 'inset 0 0 0 2px #EF4444, 0 0 25px rgba(239, 68, 68, 0.4)' 
                }} 
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}