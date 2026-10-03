import { useState, useEffect } from 'react';
import { Youtube, Menu, X, ArrowRight } from 'lucide-react';

export function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-6">
      <nav 
        className={`w-full max-w-5xl transition-all duration-500 rounded-2xl border ${
          scrolled 
            ? 'bg-ink-100/90 border-brand/40 shadow-[0_10px_30px_rgba(220,38,38,0.2)] backdrop-blur-xl py-3 px-6' 
            : 'bg-ink-100/60 border-ink-300 backdrop-blur-md py-4 px-6'
        } flex items-center justify-between`}
      >
        {/* Brand Logo & Name */}
        <a href="#hero" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-[0_0_15px_rgba(220,38,38,0.6)] transition-transform duration-300 group-hover:scale-110">
            <Youtube className="h-5 w-5" strokeWidth={2.4} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-brand"></span>
            </span>
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-white group-hover:text-brand transition-colors">
            Ankush <span className="text-brand">Designs</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-300 hover:text-brand transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Me CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] hover:-translate-y-0.5"
          >
            <span>Contact Me</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-ink-200 text-white border border-ink-300"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 inset-x-4 z-50 rounded-2xl border border-brand/40 bg-ink-100/95 backdrop-blur-2xl p-6 shadow-2xl md:hidden flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-gray-200 hover:text-brand transition-colors py-2 border-b border-ink-300/40"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-bold text-white shadow-lg shadow-brand/30"
          >
            <span>Contact Me</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}