import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'How much time do you take to deliver a thumbnail?',
    answer: 'Usually, I take around 24–48 hours to deliver a thumbnail, depending on the complexity of the project.',
  },
  {
    question: 'What software do you use?',
    answer: 'Adobe Photoshop is my primary software. I also use AI tools like Google Labs Flow, Magnific, ChatGPT, and Gemini whenever they help improve the creative process.',
  },
  {
    question: 'What is your thumbnail design process?',
    answer: 'First, I understand the video topic, description, and what happens in the video. Then I work on the concept and, when needed, create a rough sketch. I discuss the idea with the client, and once it’s approved, I start designing the final thumbnail.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes, revisions are included to make sure the final thumbnail matches the agreed concept and direction.',
  },
  {
    question: 'Can you create a completely new thumbnail concept for my video?',
    answer: 'Yes. I can develop a concept from scratch based on your video, target audience, and the kind of visual direction you want.',
  },
];

export function FAQ(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-pad relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Got questions? Everything you need to know about working together.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <Reveal key={index} delay={index * 0.08}>
                <div 
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? 'border-brand/60 bg-ink-100/90 shadow-[0_10px_30px_rgba(220,38,38,0.15)]' 
                      : 'border-ink-300 bg-ink-100/70 hover:border-brand/40'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-white">
                      {item.question}
                    </span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-200 text-white transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand text-white' : ''}`}>
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-0 text-sm sm:text-base leading-relaxed text-gray-300 border-t border-ink-300/40 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}