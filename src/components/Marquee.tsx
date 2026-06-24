import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Marquee: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();
  const content = "•PYTHON • TYPESCRIPT • OOPS • MySQL • FastAPI • REST API • MACHINE LEARNING • LANGGRAPH • RAG • LLM API • GIT • CI/CD • SDLC • CODE REVIEWS • DEBUGGING/TROUBLESHOOTING • DOCUMENTATION • VERCEL • GCP • DOCKER" ;

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full py-4 bg-gradient-to-r from-deep to-bright2 overflow-hidden border-y border-line/10 select-none reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
    >
      <div className="animate-marquee font-mono text-base text-white/85 whitespace-nowrap">
        {/* Render thrice for seamless loop */}
        <span>
          {content.split('•').filter(Boolean).map((item, idx, arr) => (
            <React.Fragment key={idx}>
              <span className="px-4">{item.trim()}</span>
              {idx < arr.length - 1 && <span className="text-bright font-bold">•</span>}
            </React.Fragment>
          ))}
        </span>
        <span>
          {content.split('•').filter(Boolean).map((item, idx, arr) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="px-4">{item.trim()}</span>
              {idx < arr.length - 1 && <span className="text-bright font-bold">•</span>}
            </React.Fragment>
          ))}
        </span>
        <span>
          {content.split('•').filter(Boolean).map((item, idx, arr) => (
            <React.Fragment key={`dup-2-${idx}`}>
              <span className="px-4">{item.trim()}</span>
              {idx < arr.length - 1 && <span className="text-bright font-bold">•</span>}
            </React.Fragment>
          ))}
        </span>
      </div>
    </section>
  );
};
