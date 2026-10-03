import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const thumbnails = [
  '/thumbnails/APEX 4.png',
  '/thumbnails/skhwarrior subnautica.jpg',
  '/thumbnails/why did they flee v2.png',
  '/thumbnails/ayesha truth.jpg',
  '/thumbnails/black flag 3.png',
  '/thumbnails/blood of dawnwalker v2.png',
  '/thumbnails/eft 2.png',
  '/thumbnails/wolverine 2.png',
  '/thumbnails/granny 1.png',
  '/thumbnails/spiderman 2.png',
  '/thumbnails/granny chp2.png',
  '/thumbnails/kailash podcast.png',
  '/thumbnails/krshn podcast.png',
  '/thumbnails/onimusha 2 v2.png',
  '/thumbnails/PMC WATCHPARTY d3.png',
  '/thumbnails/the cjp stroke.png',
  '/thumbnails/wardogs3.png',
  '/thumbnails/epstien doc thumb.jpg',
  '/thumbnails/arpit sharma tweet.jpg',
  '/thumbnails/wolverine.png',
];

const row1 = thumbnails.slice(0, 7);
const row2 = thumbnails.slice(7, 14);
const row3 = thumbnails.slice(14, 20);

export function Showcase(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.333333%, 0, 0); }
        }
        @keyframes scrollRight {
          0% { transform: translate3d(-33.333333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-scroll-left {
          animation: scrollLeft linear infinite;
          will-change: transform;
        }
        .animate-scroll-right {
          animation: scrollRight linear infinite;
          will-change: transform;
        }
      `}</style>

      <section id="showcase" className="section-pad relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Reveal>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand">
                <Sparkles className="h-3.5 w-3.5" />
                Showcase
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                My Recent Work
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
                High-converting thumbnails designed to maximize CTR and viewer retention. Click on any thumbnail to view it in detail.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Marquee Rows Container with Faded Edges */}
        <div 
          className="relative flex flex-col gap-6 overflow-hidden py-4 w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {/* Row 1: Slides Right */}
          <HorizontalMarquee items={row1} direction="right" duration={40} onImageClick={setSelectedImage} />
          
          {/* Row 2: Slides Left */}
          <HorizontalMarquee items={row2} direction="left" duration={45} onImageClick={setSelectedImage} />
          
          {/* Row 3: Slides Right */}
          <HorizontalMarquee items={row3} direction="right" duration={35} onImageClick={setSelectedImage} />
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10 backdrop-blur-md"
            >
              <button 
                className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-ink-200/50 text-white transition-all duration-300 hover:bg-brand border border-ink-300 hover:border-brand"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative max-h-full max-w-7xl overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.15)] border border-ink-300"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Selected Thumbnail Preview"
                  className="max-h-[85vh] w-auto rounded-2xl object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/1280x720/111115/333333?text=Image+Not+Found';
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

// Reusable Horizontal Marquee Component
function HorizontalMarquee({
  items,
  direction,
  duration,
  onImageClick,
}: {
  items: string[];
  direction: 'left' | 'right';
  duration: number;
  onImageClick: (src: string) => void;
}) {
  const tripled = [...items, ...items, ...items];
  const animClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className="flex w-full overflow-hidden">
      <div
        className={`flex gap-4 sm:gap-6 min-w-max ${animClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {tripled.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            onClick={() => onImageClick(src)}
            // SIZE INCREASED HERE: w-[320px] for mobile, 420px for tablet, 500px for desktop, 550px for large screens
            className="group relative aspect-video w-[320px] sm:w-[420px] md:w-[500px] lg:w-[550px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 border-ink-300 bg-ink-200/50 shadow-lg transition-all duration-300 hover:border-brand hover:shadow-[0_10px_30px_rgba(220,38,38,0.3)]"
          >
            <img
              src={src}
              alt={`Thumbnail showcase ${idx}`}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/800x450/111115/333333?text=Image+Not+Found';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}