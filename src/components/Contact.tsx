import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Check, Mail } from 'lucide-react';
import { SiInstagram, SiDiscord } from '@icons-pack/react-simple-icons';
import { Reveal } from './ui/Reveal';

const DISCORD_USERNAME = 'incendius-64';

type ContactCard = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  copy?: boolean;
  icon: any;
  brandColor: string;
};

const cards: ContactCard[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'incendius4u@gmail.com',
    href: 'mailto:incendius4u@gmail.com',
    external: true,
    brandColor: '#DC2626',
  },
  {
    icon: SiInstagram,
    label: 'Instagram',
    value: '@incen_gfx',
    href: 'https://www.instagram.com/incen_gfx/?hl=en',
    external: true,
    brandColor: '#E1306C',
  },
  {
    icon: SiDiscord,
    label: 'Discord',
    value: DISCORD_USERNAME,
    copy: true,
    brandColor: '#5865F2',
  },
  {
    // Upwork Card
    icon: () => (
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.56 13.56c-1.34 0-2.55-.53-3.46-1.41l-.97 4.88H11.5l1.41-7.1c-.81-.68-1.77-1.12-2.82-1.32l.84-4.22h2.24v1.89h1.77c2.19 0 3.96 1.77 3.96 3.96 0 .82-.26 1.58-.72 2.2zM9.54 6.78c1.32 0 2.47.53 3.32 1.39l-1.05 5.27c-.71.37-1.51.58-2.36.58-2.45 0-4.44-1.99-4.44-4.44s1.99-4.44 4.44-4.44h.09z" />
      </svg>
    ),
    label: 'Upwork',
    value: 'Hire on Upwork',
    href: 'https://www.upwork.com', // Apna upwork profile link yahan daal sakte hain
    external: true,
    brandColor: '#14a800', // Upwork Green color
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
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section id="contact" className="section-pad relative px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        
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

        {/* 2x2 Grid Layout */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 text-left">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-300 bg-ink-100/90 p-8 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)] hover:-translate-y-1.5">
                
                {/* Icon Container */}
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-md transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>

                <p className="relative mt-6 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                  {c.label}
                </p>
                <p className="relative mt-2 break-all font-display text-xl font-semibold text-white group-hover:text-brand transition-colors">
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
              <Reveal key={c.label} delay={i * 0.1}>
                {c.copy ? (
                  <button onClick={copyDiscord} className="block w-full text-left h-full">
                    {inner}
                  </button>
                ) : (
                  <a
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    {inner}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Copied Notification Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-12 left-1/2 z-50 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-brand/50 bg-ink-200/90 backdrop-blur-xl px-6 py-4 shadow-2xl">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5865F2] shadow-lg">
                <Check className="h-5 w-5 text-white" />
              </span>
              <span className="text-base font-semibold text-white">
                Discord username copied to clipboard
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}