import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

type Thumb = { id: string; label: string; image: string };

const row1: Thumb[] = [
  { id: 'r1-1', label: 'Day 1-19', image: '/thumbnails/day1-19.jpg' },
  { id: 'r1-2', label: 'Clarity Sales', image: '/thumbnails/clarity sales.jpg' },
  { id: 'r1-3', label: 'card fees', image: '/thumbnails/card fees.png' },
  { id: 'r1-4', label: 'Only 24 Hours', image: '/thumbnails/only 24 hours.jpg' },
  { id: 'r1-5', label: 'gpt', image: '/thumbnails/gpt.jpg' },
];

const row2: Thumb[] = [
  { id: 'r2-1', label: 'ai automation', image: '/thumbnails/ai automation.png' },
  { id: 'r2-2', label: 'fake payout', image: '/thumbnails/fake payout.png' },
  { id: 'r2-3', label: 'live trading aug', image: '/thumbnails/live trading aug.png' },
  { id: 'r2-4', label: 'carry bgmi', image: '/thumbnails/carry bgmi.jpg' },
  { id: 'r2-5', label: 'Spot Scam', image: '/thumbnails/spot scam.jpeg' },
];

const row3: Thumb[] = [
  { id: 'r3-1', label: 'krishan pankaj', image: '/thumbnails/krishan pankaj.png' },
  { id: 'r3-2', label: 'mc donald', image: '/thumbnails/mc donald.png' },
  { id: 'r3-3', label: 'fifa version 1', image: '/thumbnails/fifa version 1.png' },
  { id: 'r3-4', label: 'documentary', image: '/thumbnails/documentary.png' },
  { id: 'r3-5', label: 'hustle growth', image: '/thumbnails/hustle growth.jpg' },
];

const rows = [
  { items: row1, duration: 38 },
  { items: row2, duration: 52 },
  { items: row3, duration: 44 },
];

function ThumbnailFrame({ image, label }: { image: string; label: string }) {
  return (
    <div className="group relative aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:scale-[1.03] hover:border-[#2563EB] hover:shadow-[0_12px_30px_-8px_rgba(37,99,235,0.3)]">
      <img
        src={image}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Brand Blue Hover Glow Ring */}
      <div 
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        style={{ 
          boxShadow: 'inset 0 0 0 1.5px #2563EB, 0 0 20px rgba(37, 99, 235, 0.3)' 
        }} 
      />
    </div>
  );
}

function MarqueeRow({ items, duration }: { items: Thumb[]; duration: number }) {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    /* Edge-to-edge full width display with 3% micro-fade mask */
    <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
      <motion.div
        className="flex gap-5"
        animate={reduce ? {} : { x: ['0%', '-50%'] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ width: 'max-content' }}
      >
        {doubled.map((t, i) => (
          <div key={`${t.id}-${i}`} className="w-[46vw] sm:w-[40vw] lg:w-[28vw] xl:w-[24vw]">
            <ThumbnailFrame 
              image={t.image}
              label={t.label}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Showcase() {
  return (
    <section id="showcase" className="section-pad relative overflow-hidden px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Thumbnail Showcase"
        />
      </div>

      {/* Negative margin breaks out of section padding to avoid side cropping */}
      <div className="mt-12 flex flex-col gap-4 -mx-6 sm:-mx-8 lg:-mx-12">
        {rows.map((r, i) => (
          <MarqueeRow key={i} items={r.items} duration={r.duration} />
        ))}
      </div>
    </section>
  );
}