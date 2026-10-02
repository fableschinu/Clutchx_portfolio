import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring effect (Pointer ke thik niche aane ke liye)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const catX = useSpring(cursorX, springConfig);
  const catY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 24);
      cursorY.set(e.clientY - 24);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Mobile screens ke liye hide
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-12 w-12 md:flex items-center justify-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
      style={{
        x: catX,
        y: catY,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Head and Ears Outline (Stroke Width = 3.5px) */}
        <path 
          d="M 18 45 L 20 10 L 42 28 Q 50 25 58 28 L 80 10 L 82 45 Q 95 70 75 85 Q 50 95 25 85 Q 5 70 18 45 Z" 
          fill="rgba(255, 255, 255, 0.35)" 
          stroke="#111827" 
          strokeWidth="3.5" 
          strokeLinejoin="round" 
          strokeLinecap="round"
        />
        
        {/* Left Eye */}
        <circle cx="35" cy="50" r="4.5" fill="#111827" />
        
        {/* Right Eye */}
        <circle cx="65" cy="50" r="4.5" fill="#111827" />
        
        {/* Cute Pink Nose */}
        <polygon points="46,60 54,60 50,65" fill="rgba(252, 165, 165, 0.8)" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
        
        {/* Simple 'W' Mouth */}
        <path d="M 40 68 Q 45 74 50 65 Q 55 74 60 68" fill="none" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
        
        {/* Left Whiskers */}
        <line x1="25" y1="52" x2="2" y2="48" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
        <line x1="25" y1="62" x2="6" y2="72" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
        
        {/* Right Whiskers */}
        <line x1="75" y1="52" x2="98" y2="48" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
        <line x1="75" y1="62" x2="94" y2="72" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
      
      </svg>
    </motion.div>
  );
}