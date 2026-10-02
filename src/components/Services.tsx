import { Zap, Target, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const reasons = [
  {
    icon: Target,
    title: 'Exclusive Thumbnail Focus',
    description: 'Main websites, logos ya branding ka kaam nahi karta. Mera poora focus sirf aur sirf high-converting YouTube thumbnails par hota hai.',
  },
  {
    icon: Zap,
    title: 'Viewer Psychology & High CTR',
    description: 'Designs sirf sundar nahi hote, balki audience ki psychology ko samajhkar banaye jaate hain taaki maximum clicks aur views mil sakein.',
  },
  {
    icon: ShieldCheck,
    title: 'Proven Track Record',
    description: '3+ saal ke experience aur 2M+ views generate karne ke baad, mujhe pata hai ki YouTube par kya design kaam karta hai aur kya nahi.',
  },
];

export function Services(): JSX.Element {
  return (
    <section id="services" className="section-pad relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            Why Choose Me
          </span>
          
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Why Me?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl text-base sm:text-lg">
            Creator ki success hi mera goal hai. Dekhiye kyon creators apne channel ke liye mujhe choose karte hain.
          </p>
        </div>

        {/* Why Me Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-300 bg-ink-100/80 backdrop-blur-md p-8 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_10px_30px_rgba(239,68,68,0.15)] hover:-translate-y-1">
                  
                  {/* Top Icon Badge */}
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-md transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom subtle glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}