import { ArrowUp, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Same Blue Gradient Background as other sections */}
        <div 
          className="relative overflow-hidden rounded-3xl border-2 border-[#93c5fd] p-10 sm:p-14 shadow-sm"
          style={{
            background: 'linear-gradient(to bottom, #bfdbfe 0%, #ffffff 100%)'
          }}
        >
          {/* Top Solid Blue Line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-[#2563EB] shadow-md" />

          <div className="flex flex-col items-center text-center">
            <a href="#hero" className="group flex items-center gap-3" aria-label="Back to top">
              
              {/* Blue Logo Icon */}
              <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB] shadow-md transition-transform duration-300 group-hover:scale-105">
                <Youtube className="h-6 w-6 text-white" strokeWidth={2.2} />
              </span>
              
              <span className="font-display text-3xl font-bold tracking-tight text-gray-900">
                INCENDIUS
              </span>
            </a>

            <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              Professional YouTube Thumbnail Designer
            </p>

            {/* Light Mode "Back to top" button */}
            <a
              href="#hero"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white/60 border border-blue-200 px-5 py-2.5 text-sm font-medium text-gray-600 transition-all duration-300 hover:border-[#2563EB] hover:shadow-md hover:text-[#2563EB]"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
              Back to top
            </a>

            {/* Blue Divider Line */}
            <div className="mt-10 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

            <p className="mt-6 text-xs text-gray-500">
              © 2026 INCENDIUS. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}