import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const About: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full bg-gradient-to-br from-deep to-ink bg-grid-dark pt-16 pb-24 px-6 md:pl-12 lg:pl-16 overflow-hidden clip-about reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
      style={{ '--surface': 'linear-gradient(to bottom right, #488084, #CCDEE4)' } as React.CSSProperties}
    >
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-8 items-start">
        {/* Left Column: narrow metadata */}
        <div className="font-mono text-[12px] text-black leading-relaxed">
          <div className="opacity-50 uppercase tracking-wider">// education</div>
          <div className="text-white font-medium mt-0.5">B.E. CSE, 2026</div>
          <div className="text-white/70">CGPA 8.2</div>
        </div>

        {/* Right Column: heading and bio paragraph */}
        <div className="flex flex-col gap-4">
          <h2 className="font-display font-medium text-[26px] text-deep tracking-tight">
            About
          </h2>
          <p className="font-body text-[15px] leading-loose text-white/85 max-w-[480px]">
            I'm a Computer Science graduate who builds production-grade full-stack applications and AI-powered systems.
            My focus is clean, well-documented code — from REST API design to integrating LLMs into real product features —
            following SDLC and Agile practices end to end.
          </p>
        </div>
      </div>
    </section>
  );
};
