import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Certifications: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();

  const [coords1, setCoords1] = useState({ x: 0, y: 0 });
  const [hovering1, setHovering1] = useState(false);

  const [coords2, setCoords2] = useState({ x: 0, y: 0 });
  const [hovering2, setHovering2] = useState(false);

  const handleMouseMove1 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords1({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords2({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const delays = ['0.05s', '0.15s'];

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full bg-paper bg-grid-paper pt-12 pb-16 px-6 md:pl-12 lg:pl-16 reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-6">
        {/* Eyebrow */}
        <div className="font-mono text-[13px] tracking-wide text-bright uppercase">
          // Certifications
        </div>

        {/* Two-Column Grid (responsive to sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
          
          {/* Card 1: AI Fluency */}
          <div 
            tabIndex={0}
            className={`relative overflow-hidden bg-paper border-[0.5px] border-bright rounded-[12px] p-[22px] flex flex-col items-start gap-3 min-h-[160px] shadow-sm reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
            style={{ transitionDelay: isIntersecting ? delays[0] : '0s' }}
            onMouseMove={handleMouseMove1}
            onMouseEnter={() => setHovering1(true)}
            onMouseLeave={() => setHovering1(false)}
          >
            {hovering1 && (
              <div 
                className="absolute pointer-events-none inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(160px circle at ${coords1.x}px ${coords1.y}px, rgba(59,111,212,0.28), transparent)`
                }}
              />
            )}
            <span className="font-mono text-[12px] text-bright relative z-10">
              issued: 2026
            </span>
            <div className="flex flex-col gap-1 relative z-10">
              <h3 className="font-display text-[17px] font-medium text-ink leading-snug">
                AI Fluency: Framework &amp; Foundations
              </h3>
              <span className="text-[13px] text-ink/60">
                Anthropic
              </span>
            </div>
            <a 
              href="https://verify.skilljar.com/c/m4976icawppy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-deep font-semibold mt-auto hover:text-bright transition-colors duration-150 relative z-10"
            >
              View credential &rarr;
            </a>
          </div>

          {/* Card 2: RPA Foundation */}
          <div 
            tabIndex={0}
            className={`relative overflow-hidden bg-paper border-[0.5px] border-bright rounded-[12px] p-[22px] flex flex-col items-start gap-3 min-h-[160px] shadow-sm reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
            style={{ transitionDelay: isIntersecting ? delays[1] : '0s' }}
            onMouseMove={handleMouseMove2}
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
          >
            {hovering2 && (
              <div 
                className="absolute pointer-events-none inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(160px circle at ${coords2.x}px ${coords2.y}px, rgba(59,111,212,0.28), transparent)`
                }}
              />
            )}
            <span className="font-mono text-[12px] text-bright relative z-10">
              issued: Nov 2024
            </span>
            <div className="flex flex-col gap-1 relative z-10">
              <h3 className="font-display text-[17px] font-medium text-ink leading-snug">
                Robotic Process Automation (RPA) Foundation
              </h3>
              <span className="text-[13px] text-ink/60">
                UiPath · Naan Mudhalvan
              </span>
            </div>
            <a 
              href="https://api.naanmudhalvan.tn.gov.in/api/v1/college/student_certificate/validate?certificate_no=NMO2425EAU27322347420"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] text-deep font-semibold mt-auto hover:text-bright transition-colors duration-150 relative z-10"
            >
              View credential &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
