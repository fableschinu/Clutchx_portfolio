export function Background(): JSX.Element {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      
      {/* 1. Bright Cinematic Top-Right Light Flare (Rich Red Glow) */}
      <div
        className="absolute -top-20 right-0 h-[650px] w-[650px] rounded-full opacity-45 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.55) 0%, rgba(220, 38, 38, 0.2) 50%, transparent 80%)',
        }}
        aria-hidden
      />

      {/* 2. Center-Left Ambient Glow for Depth */}
      <div
        className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full opacity-30 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* 3. Clean and Sharp Visible Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248, 113, 113, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 113, 113, 0.5) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(circle at 50% 30%, #000 0%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 30%, #000 0%, transparent 90%)',
        }}
        aria-hidden
      />

      {/* 4. Cinematic Vignette to blend edges smoothly into pure black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 20%, transparent 30%, rgba(0, 0, 0, 0.95) 100%)',
        }}
        aria-hidden
      />
    </div>
  );
}