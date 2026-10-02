import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Calendar, Eye, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';

type Stat = {
  icon: typeof Calendar;
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
};

const stats: Stat[] = [
  { icon: Calendar, value: 2, suffix: '+', label: 'Years Experience' },
  { icon: Eye, value: 2, suffix: 'M+', label: 'Views Generated' },
  { icon: Sparkles, value: 0, suffix: '', label: 'YouTube Thumbnail Specialist', isText: true },
];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView && !reduce) mv.set(to);
  }, [inView, to, mv, reduce]);

  return (
    <span ref={ref}>
      {reduce ? to : <motion.span>{display}</motion.span>}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative px-6 pb-24 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.12}>
                
                {/* 100% Working Blue Gradient Effect same as Services */}
                <div 
                  className="group relative h-full overflow-hidden rounded-2xl border-2 border-[#93c5fd] p-8 transition-all duration-500 shadow-sm hover:border-[#2563EB] hover:shadow-lg hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(to bottom, #bfdbfe 0%, #ffffff 100%)'
                  }}
                >
                  
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB] shadow-md transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-white" />
                    </span>
                  </div>

                  <div className="relative mt-6">
                    {s.isText ? (
                      <p className="font-display text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
                        YouTube Thumbnail
                        <br />
                        <span className="text-[#2563EB]">Specialist</span>
                      </p>
                    ) : (
                      <p className="font-display text-5xl font-bold text-gray-900 sm:text-6xl">
                        <CountUp to={s.value} />
                        <span className="text-[#2563EB]">{s.suffix}</span>
                      </p>
                    )}
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                      {s.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}