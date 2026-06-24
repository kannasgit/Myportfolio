import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScramble } from '../hooks/useScramble';

export const Hero: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();
  const scrambledEyebrow = useScramble("// software developer, building things");

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full min-h-[500px] bg-paper bg-grid-paper flex flex-col justify-center py-16 px-6 md:pl-12 lg:pl-16 overflow-hidden reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
    >
      {/* Corner crosshairs (+ marks) */}
      <span className="absolute top-[16px] left-[16px] font-mono text-[14px] text-bright/50 select-none">
        +
      </span>
      <span className="absolute top-[16px] right-[16px] font-mono text-[14px] text-bright/50 select-none">
        +
      </span>

      {/* Hero Content Container */}
      <div className="relative max-w-4xl w-full mx-auto flex flex-col gap-4">
        
        {/* Eyebrow Line */}
        <div id="eyebrow-hero" className="font-mono text-[12px] text-bright uppercase tracking-wider h-[18px]">
          {scrambledEyebrow}
        </div>

        {/* Headline & Metadata Block Wrapper */}
        <div className="relative flex items-center w-[110%] md:w-[115%]">
          {/* Headline */}
          <h1 
            className="font-display font-bold tracking-tight text-ink select-none"
            style={{ 
              fontSize: 'clamp(40px, 12vw, 84px)', 
              lineHeight: '0.95' 
            }}
          >
            <div>KANNAN</div>
            <div>
              D
              <span className="bg-gradient-to-br from-bright2 to-deep bg-clip-text text-transparent">.</span>
            </div>
          </h1>

          {/* Metadata Block */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right font-mono text-[12px] text-deep leading-loose hidden sm:block pr-8 md:pr-12">
            <div>location: Theni / Chennai</div>
            <div>focus: full-stack / AI</div>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-body text-[17px] text-ink/70 max-w-[440px] mt-2 leading-relaxed">
          Computer Science graduate (B.E. 2026, CGPA 8.2) building full-stack web apps and AI-powered systems — comfortable across the stack, from REST APIs to LLM integration.
        </p>

        {/* Thin Gradient Bar */}
        <div className="w-[90px] h-[3px] bg-gradient-to-r from-bright to-transparent mt-4" />
      </div>
    </section>
  );
};
