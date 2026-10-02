import { motion, useReducedMotion } from 'framer-motion';

export function Background() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Base radial purple wash - adjusted for light theme */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 75% -10%, rgba(139,92,246,0.12), transparent 60%), radial-gradient(900px 500px at 10% 110%, rgba(124,58,237,0.12), transparent 55%)',
        }}
        aria-hidden
      />

      {/* Subtle grid texture - adjusted visibility for white background */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 30%, #000 0%, transparent 75%)',
        }}
        aria-hidden
      />

      {/* Vignette - changed from black fade to white fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 0%, transparent 50%, rgba(255,255,255,0.9) 100%)',
        }}
        aria-hidden
      />
    </div>
  );
}