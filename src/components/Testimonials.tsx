import { motion, useReducedMotion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

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
    name: 'Soham Shinde',
    role: 'Trader | YouTuber',
    content: 'Excellent work from start to finish. The thumbnails looked more engaging and helped improve my video performance significantly.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Vanya Mania',
    role: 'Gaming Creator',
    content: 'We have worked on many thumbnails, and each one feels full of life. He understands audience psychology and CTR like no other.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'TooTurntTony',
    role: 'Content Creator',
    content: 'Ankush is a beast at what he does. His thumbnails are bold, funny, and exactly in line with the kind of content I put out. Fast delivery too!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Sydney Serena',
    role: 'Lifestyle Vlogger',
    content: 'I am really particular about visuals, and Ankush exceeded my expectations. Communication was smooth, revisions were quick, and results beautiful.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    name: 'OfflineTV',
    role: 'Media & Gaming',
    content: 'He is an incredibly talented designer who understands branding better than most. Consistent improvement in engagement across my videos.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    name: 'Basically Homeless',
    role: 'Tech Creator',
    content: 'Professional, modern, and click-worthy. It engaged without losing professionalism. Had many compliments on my channel’s new look.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
  },
];

const col1 = [testimonialsData[0], testimonialsData[1], testimonialsData[2]];
const col2 = [testimonialsData[3], testimonialsData[4], testimonialsData[5]];
const col3 = [testimonialsData[1], testimonialsData[3], testimonialsData[5]];

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
        className="relative mx-auto max-w-6xl h-[650px] overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        }}
      >
        {/* Column 1: Moves Up */}
        <MarqueeColumn items={col1} direction="up" duration={35} reduce={reduce} />

        {/* Column 2: Moves Down */}
        <MarqueeColumn items={col2} direction="down" duration={40} reduce={reduce} />

        {/* Column 3: Moves Up */}
        <MarqueeColumn items={col3} direction="up" duration={38} reduce={reduce} />
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
            className="group relative rounded-2xl border border-ink-300 bg-ink-100/90 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:border-brand/60 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)]"
          >
            {/* 5 Yellow Stars */}
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Content */}
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 mb-6">
              &ldquo;{t.content}&rdquo;
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-ink-300/60">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-12 w-12 rounded-full object-cover border border-brand/30"
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