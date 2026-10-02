import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const paragraphs = [
  'I specialize exclusively in YouTube Thumbnail Design.',
  "For over 2 years, I've been helping creators make stronger first impressions with eye-catching, high-converting thumbnails designed to maximize click-through rate.",
  'My thumbnail designs have collectively contributed to 2M+ views across YouTube.',
  "I don't design websites, logos, branding, or social media posts. I focus only on creating premium YouTube thumbnails.",
];

export function About() {
  return (
    <section id="about" className="section-pad relative px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="About Me" />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={`text-balance leading-relaxed text-gray-600 ${
                    i === 0
                      ? 'font-display text-2xl font-semibold text-gray-900 sm:text-3xl'
                      : 'text-lg'
                  }`}
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}