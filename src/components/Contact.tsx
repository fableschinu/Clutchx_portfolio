import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SiInstagram, SiDiscord, SiYoutube } from '@icons-pack/react-simple-icons';
import { Reveal } from './ui/Reveal';

const DISCORD_INVITE = 'https://discord.gg/8PhKntrGrY';

type ContactCard = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: any;
  bgClass: string;
  brandColor: string;
  wide?: boolean;
};

const cards: ContactCard[] = [
  {
    icon: SiInstagram,
    label: 'Instagram',
    value: '@_clutch__editz_',
    href: 'https://www.instagram.com/_clutch__editz_?igsh=aDF2ZHcyaHByeG9z',
    external: true,
    bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    brandColor: '#E1306C',
    wide: true, // 1st Row: Big size
  },
  {
    icon: SiYoutube,
    label: 'YouTube',
    value: '@ankushdesigns26',
    href: 'https://www.youtube.com/@ankushdesigns26',
    external: true,
    bgClass: 'bg-red-600',
    brandColor: '#FF0000',
    wide: true, // 1st Row: Big size
  },
  {
    icon: SiDiscord,
    label: 'Discord',
    value: 'Join Server',
    href: DISCORD_INVITE,
    external: true,
    bgClass: 'bg-[#5865F2]',
    brandColor: '#5865F2',
    wide: false, // 2nd Row
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ankush.designs26@gmail.com',
    href: 'mailto:ankush.designs26@gmail.com',
    external: true,
    bgClass: 'bg-brand',
    brandColor: '#DC2626',
    wide: false, // 2nd Row
  },
  {
    // Fiverr "fi" Logo with bright green background
    icon: () => (
      <span className="font-display font-black text-black text-xl tracking-tighter">fi</span>
    ),
    label: 'Fiverr',
    value: 'Order on Fiverr',
    href: 'https://www.fiverr.com/ankush_trivedi1/design-premium-professional-viral-youtube-thumbnails',
    external: true,
    bgClass: 'bg-[#1DBF73]',
    brandColor: '#1DBF73',
    wide: false, // 2nd Row
  },
];

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="section-pad relative px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        
        {/* Eyebrow */}
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand">
          Contact
        </span>

        {/* Big Clean Title */}
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Let&apos;s Work Together
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          Looking for thumbnails that actually get clicks? Let&apos;s create something that stands out.
        </p>

        {/* Grid Layout: Top 2 big cards, Bottom 3 cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 text-left">
          {cards.map((c, i) => {
            const Icon = c.icon;
            // First 2 cards take 3 columns each on lg (making 2 big cards in row 1)
            // Next 3 cards take 2 columns each on lg (making 3 balanced cards in row 2)
            const colSpanClass = c.wide ? 'lg:col-span-3' : 'lg:col-span-2';

            const inner = (
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-300 bg-ink-100/90 p-8 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)] hover:-translate-y-1.5">
                
                {/* Bright Colored Icon Container */}
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${c.bgClass} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                  <Icon className="h-7 w-7" />
                </span>

                <p className="relative mt-6 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                  {c.label}
                </p>
                <p className="relative mt-2 break-all font-display text-lg sm:text-xl font-semibold text-white group-hover:text-brand transition-colors">
                  {c.value}
                </p>

                {/* Bottom Animated Line */}
                <div 
                  className="relative mt-6 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: c.brandColor }}
                />
              </div>
            );

            return (
              <Reveal key={c.label} delay={i * 0.1} className={colSpanClass}>
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="block h-full"
                >
                  {inner}
                </a>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}