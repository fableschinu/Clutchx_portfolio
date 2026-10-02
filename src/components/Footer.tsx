import { ArrowUp, Youtube } from 'lucide-react';

export function Footer(): JSX.Element {
  return (
    <footer className="relative px-6 pb-12 pt-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Dark Glassmorphic Footer Box with Red Brand Glow */}
        <div className="relative overflow-hidden rounded-3xl border border-ink-300 bg-ink-100/90 backdrop-blur-xl p-10 sm:p-14 shadow-2xl">
          
          {/* Top Red Glow Line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_15px_rgba(239,68,68,0.8)]" />

          <div className="flex flex-col items-center text-center">
            
            {/* Logo and Name */}
            <a href="#hero" className="group flex items-center gap-3" aria-label="Back to top">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-transform duration-300 group-hover:scale-105">
                <Youtube className="h-6 w-6" strokeWidth={2.2} />
              </span>
              
              <span className="font-display text-3xl font-extrabold tracking-tight text-white group-hover:text-brand transition-colors">
                Ankush Designs
              </span>
            </a>

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
              Professional YouTube Thumbnail Designer
            </p>

            {/* Back to top Button */}
            <a
              href="#hero"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-ink-300 bg-ink-200/60 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:border-brand hover:bg-brand/10 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
              Back to top
            </a>

            {/* Red Divider Line */}
            <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <p className="mt-6 text-xs text-gray-400 font-medium">
              © 2026 Ankush Designs. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}