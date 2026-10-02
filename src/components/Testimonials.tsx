import { motion, useReducedMotion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section id="testimonials" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Testimonials" title="Testimonials" />

        <div className="mx-auto mt-14 max-w-2xl">
          <Reveal>
            {/* Same Blue Gradient as Services */}
            <div 
              className="relative overflow-hidden rounded-3xl border-2 border-[#93c5fd] p-12 text-center sm:p-16 transition-all duration-500 shadow-sm hover:border-[#2563EB] hover:shadow-lg"
              style={{
                background: 'linear-gradient(to bottom, #bfdbfe 0%, #ffffff 100%)'
              }}
            >
              
              {/* Icon Box */}
              <motion.span
                animate={reduce ? {} : { scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2563EB] shadow-md"
              >
                <Clock className="h-8 w-8 text-white" />
              </motion.span>

              {/* Headings & Text made Dark for Light Mode */}
              <h3 className="relative mt-8 font-display text-3xl font-bold text-gray-900 sm:text-4xl">
                Coming Soon
              </h3>

              <p className="relative mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-600">
                I'm currently working with creators and this section will be
                updated with real client feedback soon.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}