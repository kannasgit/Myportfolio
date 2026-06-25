import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Skills: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();
  const delays = ['0.05s', '0.15s', '0.25s', '0.35s', '0.45s'];

  const [hoveredCards, setHoveredCards] = useState<{ [key: number]: { x: number; y: number } }>({});

  const handleMouseMove = (cardIndex: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredCards(prev => ({
      ...prev,
      [cardIndex]: { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }));
  };

  const handleMouseLeave = (cardIndex: number) => {
    setHoveredCards(prev => {
      const newState = { ...prev };
      delete newState[cardIndex];
      return newState;
    });
  };

  const skillsData = [
    { label: 'Languages', value: 'Python, JavaScript, TypeScript, SQL' },
    { label: 'Frameworks & APIs', value: 'Next.js, React, FastAPI, REST API' },
    { label: 'AI & Emerging Tech', value: 'LangGraph, RAG, LLM API, Machine Learning' },
    { label: 'Databases & Tools', value: 'Supabase, PostgreSQL, Git/GitHub, Docker, Vercel, GCP' },
    { label: 'Practices & Methodologies', value: 'CI/CD, SDLC, Code Reviews, Debugging/Troubleshooting, Documentation' }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full bg-paper bg-grid-paper pt-16 pb-16 px-6 md:pl-12 lg:pl-16 z-10 reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
      style={{ marginTop: '-36px' }}
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-6">
        {/* Eyebrow Label */}
        <div className="font-mono text-[13px] tracking-wide text-bright uppercase">
          // Skills
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              tabIndex={0}
              className={`relative overflow-hidden bg-paper border-[0.5px] border-bright rounded-[12px] p-5 flex flex-col items-center justify-center gap-2 min-h-[190 px] shadow-sm reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
              style={{ transitionDelay: isIntersecting ? delays[idx] : '0s' }}
              onMouseMove={(e) => handleMouseMove(idx, e)}
              onMouseEnter={() => {}}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              {hoveredCards[idx] && (
                <div 
                  className="absolute pointer-events-none inset-0 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(160px circle at ${hoveredCards[idx].x}px ${hoveredCards[idx].y}px, rgba(59,111,212,0.28), transparent)`
                  }}
                />
              )}
              <span className="font-mono text-[11px] uppercase text-bright tracking-wider relative z-10 text-center">
                {skill.label}
              </span>
              <span className="font-display text-[16px] text-ink font-medium leading-snug relative z-10 text-center">
                {skill.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
