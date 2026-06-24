import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScramble } from '../hooks/useScramble';

export const Footer: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();
  const scrambledEyebrow = useScramble("// say hello");
  const delays = ['0.05s', '0.15s', '0.25s', '0.35s'];

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full bg-gradient-to-br from-deep to-ink bg-grid-dark pt-24 pb-16 px-6 md:pl-12 lg:pl-16 overflow-hidden clip-footer reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
      style={{ '--surface': 'linear-gradient(to bottom right, #CCDEE4, #488084)' } as React.CSSProperties}
    >
      {/* Corner crosshairs (+ marks) */}
      <span className="absolute top-[16px] left-[16px] font-mono text-[14px] text-bright/50 select-none">
        +
      </span>
      <span className="absolute bottom-[16px] right-[16px] font-mono text-[14px] text-bright/50 select-none">
        +
      </span>

      <div className="max-w-4xl w-full mx-auto flex flex-col gap-10">
        {/* Eyebrow */}
        <div id="eyebrow-footer" className="font-mono text-[12px] text-bright uppercase tracking-wider h-[18px]">
          {scrambledEyebrow}
        </div>

        {/* Closing Headline */}
        <h1 
          className="font-display font-bold tracking-tight text-white select-none max-w-2xl"
          style={{ 
            fontSize: 'clamp(40px, 12vw, 84px)', 
            lineHeight: '0.95' 
          }}
        >
          LET'S CONNECT & BUILD
          <span className="bg-gradient-to-br from-bright2 to-deep bg-clip-text text-transparent">.</span>
        </h1>

        {/* Contact Links Container */}
        <div className="flex flex-col w-full max-w-xl mt-4">
          
          {/* Row 1: Email */}
          <a 
            href="mailto:mskannan1612@gmail.com" 
            className={`group flex justify-between items-center py-4 border-t border-white/10 text-white/80 hover:text-white transition-colors duration-200 reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
            style={{ transitionDelay: isIntersecting ? delays[0] : '0s' }}
          >
            <span className="font-mono text-[14px] text-ink opacity-70">
              $ email
            </span>
            <span className="font-display text-[16px] transition-colors duration-200 group-hover:text-bright2 flex items-center">
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 mr-2 text-[14px]">
                &rarr;
              </span>
              mskannan1612@gmail.com
            </span>
          </a>

          {/* Row 2: GitHub */}
          <a 
            href="https://github.com/kannasgit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`group flex justify-between items-center py-4 border-t border-white/10 text-white/80 hover:text-white transition-colors duration-200 reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
            style={{ transitionDelay: isIntersecting ? delays[1] : '0s' }}
          >
            <span className="font-mono text-[14px] text-ink opacity-70">
              $ github
            </span>
            <span className="font-display text-[16px] transition-colors duration-200 group-hover:text-bright2 flex items-center">
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 mr-2 text-[14px]">
                &rarr;
              </span>
              github.com/kannasgit
            </span>
          </a>

          {/* Row 3: LinkedIn */}
          <a 
            href="http://www.linkedin.com/in/kannand7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`group flex justify-between items-center py-4 border-t border-white/10 text-white/80 hover:text-white transition-colors duration-200 reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
            style={{ transitionDelay: isIntersecting ? delays[2] : '0s' }}
          >
            <span className="font-mono text-[14px] text-ink opacity-70">
              $ linkedin
            </span>
            <span className="font-display text-[16px] transition-colors duration-200 group-hover:text-bright2 flex items-center">
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 mr-2 text-[14px]">
                &rarr;
              </span>
              linkedin.com/in/kannand7
            </span>
          </a>

          {/* Row 4: Phone */}
          <a 
            href="tel:+919346215408" 
            className={`group flex justify-between items-center py-4 border-t border-b border-white/10 text-white/80 hover:text-white transition-colors duration-200 reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
            style={{ transitionDelay: isIntersecting ? delays[3] : '0s' }}
          >
            <span className="font-mono text-[14px] text-ink opacity-70">
              $ phone
            </span>
            <span className="font-display text-[16px] transition-colors duration-200 group-hover:text-bright2 flex items-center">
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 mr-2 text-[14px]">
                &rarr;
              </span>
              +91 93462 15408
            </span>
          </a>

        </div>

        {/* Closing Line */}
        <div className="font-mono text-[11px] text-white/70 tracking-wider mt-4 select-none">
          // session closed
        </div>
      </div>
    </section>
  );
};
