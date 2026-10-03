import { motion, useReducedMotion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
};

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Sikhwarrior',
    role: 'YouTube Creator',
    content: 'Great concepts and execution!!. Been working with him for 4 months now , never disappoints.',
    avatar: '/testimonials/sikhwarrior.jpg',
  },
  {
    id: '2',
    name: 'Kakuxyt Gaming',
    role: 'Gaming Creator',
    content: 'The thumbnails look amazing , color , composition , lighting and how everything comes together , definitely working with him again.',
    avatar: '/testimonials/kakuxyt.jpg',
  },
  {
    id: '3',
    name: 'Smiky Playz',
    role: 'YouTube Creator',
    content: 'Bro Your Thumbnails Are Great And Awesome. Also Work Delivered On Time ❤️',
    avatar: '/testimonials/smikyplayz.jpg',
  },
  {
    id: '4',
    name: 'The Real Scope',
    role: 'Podcast Creator',
    content: 'The thumbnail looks amazing! The colors, lighting, and framing fit the podcast’s vibe perfectly. It is clean, punchy, and instantly grabs attention. Really solid effort on this one great job.',
    avatar: '/testimonials/TRS.jpg',
  },
];

const col1 = [testimonialsData[0], testimonialsData[1], testimonialsData[2]];
const col2 = [testimonialsData[3], testimonialsData[0], testimonialsData[1]];
const col3 = [testimonialsData[2], testimonialsData[3], testimonialsData[0]];

export function Testimonials(): JSX.Element {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-6xl text-center mb-16">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand">
          <Sparkles className="h-3.5 w-3.5" />
          Testimonials
        </span>
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          What Clients Say
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base">
          Proof of impact, straight from our creators.
        </p>
      </div>

      {/* Vertical Marquee Columns Container with Faded Top/Bottom Mask */}
      <div 
        className="relative mx-auto max-w-6xl h-[600px] overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      >
        {/* Column 1: Moves Up */}
        <MarqueeColumn items={col1} direction="up" duration={32} reduce={reduce} />

        {/* Column 2: Moves Down */}
        <MarqueeColumn items={col2} direction="down" duration={38} reduce={reduce} />

        {/* Column 3: Moves Up */}
        <MarqueeColumn items={col3} direction="up" duration={35} reduce={reduce} />
      </div>
    </section>
  );
}

function MarqueeColumn({
  items,
  direction,
  duration,
  reduce,
}: {
  items: Testimonial[];
  direction: 'up' | 'down';
  duration: number;
  reduce: boolean | null;
}) {
  const tripled = [...items, ...items, ...items];
  const initialY = direction === 'up' ? ['0%', '-50%'] : ['-50%', '0%'];

  return (
    <div className="relative overflow-hidden h-full">
      <motion.div
        className="flex flex-col gap-6"
        animate={reduce ? {} : { y: initialY }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {tripled.map((t, idx) => (
          <div
            key={`${t.id}-${idx}`}
            className="group relative rounded-2xl border border-ink-300 bg-ink-100/90 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:border-brand/60 hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)]"
          >
            {/* Golden / Yellow Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Content (Quotes removed) */}
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 mb-6">
              {t.content}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-ink-300/60">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover border border-brand/30"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';
                }}
              />
              <div>
                <h4 className="font-display text-base font-bold text-white group-hover:text-brand transition-colors">
                  {t.name}
                </h4>
                <p className="text-xs font-medium text-gray-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}