import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SiInstagram, SiDiscord } from '@icons-pack/react-simple-icons';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

// Agar aapke paas local image hai, toh use aise import karein:
// import gmailImg from '../assets/gmail.png'; 

const DISCORD_USERNAME = 'incendius-64';

type ContactCard = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  copy?: boolean;
  iconBg: string; 
  brandColor: string; 
  hoverBorderClass: string; 
  // Custom image URL ya import ke liye
  imageUrl?: string;
  // React Icon component ke liye
  icon?: any;
};

const cards: ContactCard[] = [
  {
    // Gmail Image URL (Official Logo)
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
    // Agar local file use karni hai toh imageUrl ki jagah import kiya hua variable likhein (e.g. imageUrl: gmailImg)
    label: 'Email',
    value: 'incendius4u@gmail.com',
    href: 'mailto:incendius4u@gmail.com',
    external: true,
    iconBg: 'bg-white border border-gray-200/80 shadow-sm', 
    brandColor: '#EA4335',
    hoverBorderClass: 'hover:border-[#EA4335]',
  },
  {
    icon: SiInstagram,
    label: 'Instagram',
    value: '@incen_gfx',
    href: 'https://www.instagram.com/incen_gfx/?hl=en',
    external: true,
    iconBg: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    brandColor: '#E1306C',
    hoverBorderClass: 'hover:border-[#E1306C]',
  },
  {
    icon: SiDiscord,
    label: 'Discord',
    value: DISCORD_USERNAME,
    copy: true,
    iconBg: 'bg-[#5865F2]',
    brandColor: '#5865F2',
    hoverBorderClass: 'hover:border-[#5865F2]',
  },
];

export function Contact() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Looking for thumbnails that actually get clicks? Let's create something that stands out."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <div 
                className={`group relative h-full overflow-hidden rounded-2xl border-2 border-[#93c5fd] p-8 transition-all duration-500 shadow-sm ${c.hoverBorderClass} hover:shadow-lg hover:-translate-y-1.5`}
                style={{
                  background: 'linear-gradient(to bottom, #bfdbfe 0%, #ffffff 100%)'
                }}
              >
                {/* Icon Container */}
                <span className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${c.iconBg} shadow-md transition-transform duration-500 group-hover:scale-110`}>
                  {c.imageUrl ? (
                    /* Gmail ki photo/image tag */
                    <img 
                      src={c.imageUrl} 
                      alt={`${c.label} logo`} 
                      className="h-7 w-7 object-contain" 
                    />
                  ) : (
                    /* Instagram / Discord Component Icons */
                    <Icon className="h-7 w-7 text-white" />
                  )}
                </span>

                <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  {c.label}
                </p>
                <p className="relative mt-2 break-all font-display text-lg font-semibold text-gray-900">
                  {c.value}
                </p>

                {/* Brand Colored Line */}
                <div 
                  className="relative mt-6 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: c.brandColor }}
                />
              </div>
            );

            return (
              <Reveal key={c.label} delay={i * 0.1}>
                {c.copy ? (
                  <button onClick={copyDiscord} className="block w-full text-left">
                    {inner}
                  </button>
                ) : (
                  <a
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Copied toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2"
          >
            <div className="flex items-center gap-2 rounded-xl glass-strong border border-gray-200 px-5 py-3 shadow-lg">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5865F2]">
                <Check className="h-4 w-4 text-white" />
              </span>
              <span className="text-sm font-medium text-gray-900">
                Discord username copied
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}