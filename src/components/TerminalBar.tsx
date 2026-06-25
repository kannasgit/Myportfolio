huimport React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const TerminalBar: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full h-[50px] bg-ink bg-grid-dark flex flex-col sm:flex-row sm:justify-betweem gap-2 items-center px-6 text-white overflow-hidden select-none reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
    >
      {/* Left: status + blinking cursor */}
      <div className="inline-flex whitespace-nowrap font-mono text-[12px]">
        <span>&gt; status: open to internships / Jobs</span>
        <span className="ml-1 w-[6px] h-[1em] bg-white animate-cursor-blink" />
      </div>
      {/* Right: metadata tag */}
      <div className="font-mono text-[12px] text-black/70 break-words max-w-full sm:max-w-[50%] text-center sm:text-right">
        [full-stack / AI-augmented]
      </div>
    </section>
  );
};
