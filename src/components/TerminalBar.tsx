import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const TerminalBar: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full h-[36px] bg-ink bg-grid-dark flex items-center justify-between px-6 text-white overflow-hidden select-none reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
    >
      {/* Left: status + blinking cursor */}
      <div className="flex items-center font-mono text-[12px]">
        <span>&gt; status: open to internships / Jobs</span>
        <span className="inline-block w-[6px] h-[12px] bg-white ml-1.5 align-middle animate-cursor-blink" />
      </div>

      {/* Right: metadata tag */}
      <div className="font-mono text-[12px] text-black/70">
        [full-stack / AI-augmented]
      </div>
    </section>
  );
};
