import { Zap, Image as ImageIcon, Clock } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const features = [
  {
    icon: Zap,
    title: 'High-CTR YouTube Thumbnails',
    desc: 'Professional thumbnails designed to grab attention and improve click-through rate.',
  },
  {
    icon: ImageIcon,
    title: 'Custom Thumbnail Design',
    desc: 'Every thumbnail is created from scratch to match your content and audience.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'Quick delivery with consistent premium quality.',
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="What I Offer"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                
                {/* 
                  INLINE CSS GRADIENT (Bypass Tailwind):
                  Yeh browser ko directly force karega gradient dikhane ke liye 
                */}
                <div 
                  className="group relative h-full overflow-hidden rounded-2xl border-2 border-[#93c5fd] p-7 transition-all duration-500 shadow-sm hover:border-[#2563EB] hover:shadow-lg hover:-translate-y-1.5"
                  style={{
                    background: 'linear-gradient(to bottom, #bfdbfe 0%, #ffffff 100%)'
                  }}
                >
                  
                  {/* Icon Box */}
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB] shadow-md transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-white" />
                  </span>

                  <h3 className="relative mt-6 font-display text-xl font-semibold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-gray-600">
                    {f.desc}
                  </p>

                  <div className="relative mt-6 h-px w-full origin-left scale-x-0 bg-[#2563EB] transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}