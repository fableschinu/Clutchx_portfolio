import { useEffect, useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Menu, X, Youtube } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? 'bg-gray-200/60 backdrop-blur-lg border border-gray-300/50 shadow-sm' : 'border border-transparent'
        }`}
      >
        <a
          href="#hero"
          className="group flex items-center gap-2.5"
          aria-label="INCENDIUS home"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB]">
            <Youtube className="h-5 w-5 text-white" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-gray-900">
            INCENDIUS
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-0 scale-90 rounded-lg bg-gray-200/0 transition-all duration-300 hover:bg-gray-200/80" />
            </a>
          ))}
          
          {/* Desktop "Hire Me" Solid Blue Button */}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-xl bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-lg"
          >
            Hire Me
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200/60 backdrop-blur-md border border-gray-300/50 text-gray-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-4 top-20 md:hidden"
          >
            <div className="bg-gray-200/70 backdrop-blur-xl border border-gray-300/50 rounded-2xl p-4 shadow-lg">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-300/50 hover:text-gray-900"
                  >
                    {l.label}
                  </a>
                ))}
                
                {/* Mobile "Hire Me" Solid Blue Button */}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-[#2563EB] px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1D4ED8]"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}