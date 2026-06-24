import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Projects: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();
  
  const [coords1, setCoords1] = useState({ x: 0, y: 0 });
  const [hover1, setHover1] = useState(false);
  
  const [coords2, setCoords2] = useState({ x: 0, y: 0 });
  const [hover2, setHover2] = useState(false);

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

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full bg-gradient-to-br from-ink to-deep bg-grid-dark pt-20 pb-16 px-6 md:pl-12 lg:pl-16 overflow-hidden clip-projects reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-8">
        {/* Heading */}
        <h2 className="font-display font-medium text-[26px] text-white tracking-tight">
          Projects
        </h2>

        <div className="flex flex-col gap-6 w-full mt-2">
          
          {/* Card 1: Coder Journal */}
          <div 
            tabIndex={0}
            className="relative overflow-hidden bg-paper text-ink rounded-[12px] p-6 max-w-[560px] w-full flex flex-col gap-3 shadow-md"
            onMouseMove={handleMouseMove1}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            {hover1 && (
              <div 
                className="absolute pointer-events-none inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(160px circle at ${coords1.x}px ${coords1.y}px, rgba(59,111,212,0.28), transparent)`
                }}
              />
            )}
            <div className="flex justify-between items-baseline gap-4 relative z-10">
              <h3 className="font-display text-[18px] font-semibold tracking-tight">
                Coder Journal
              </h3>
              <a 
                href="https://coderjournal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] text-deep font-semibold hover:text-bright transition-colors duration-150 whitespace-nowrap"
              >
                View live &rarr;
              </a>
            </div>
            <div className="font-mono text-[12px] text-bright relative z-10">
              // full-stack blogging platform, shipped end to end
            </div>
            <p className="font-body text-[14px] text-ink/75 leading-relaxed relative z-10">
              Production-grade blogging platform with Google OAuth, MDX content publishing, dynamic search,
              custom tags, comments, and real-time notifications. Built on a PostgreSQL layer via Supabase
              with REST API endpoints and server-side rendering.
            </p>
            <div className="font-mono text-[12px] text-ink/55 mt-1 relative z-10">
              Next.js · TypeScript · Supabase · REST APIs
            </div>
          </div>

          {/* Card 2: Agentic Fashion Concierge (offset, same solid style, no link) */}
          <div 
            tabIndex={0}
            className="relative overflow-hidden bg-paper text-ink rounded-[12px] p-6 max-w-[560px] w-full flex flex-col gap-3 ml-auto mt-[-20px] shadow-md"
            onMouseMove={handleMouseMove2}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            {hover2 && (
              <div 
                className="absolute pointer-events-none inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(160px circle at ${coords2.x}px ${coords2.y}px, rgba(59,111,212,0.28), transparent)`
                }}
              />
            )}
            <div className="flex justify-between items-baseline gap-4 relative z-10">
              <h3 className="font-display text-[18px] font-semibold tracking-tight">
                Agentic Fashion Concierge
              </h3>
              <h2 className="font-mono text-[12px] text-bright relative z-10">
                // in progress
              </h2>
            </div>
            <div className="font-mono text-[12px] text-bright relative z-10">
              // multi-agent AI recommendation system
            </div>
            <p className="font-body text-[14px] text-ink/75 leading-relaxed relative z-10">
              Multi-agent orchestration system using LangGraph for personalised recommendations, with a
              Retrieval-Augmented Generation pipeline over a ChromaDB vector store for semantic product search.
              Gemini LLM integrated for real-time, context-aware output.
            </p>
            <div className="font-mono text-[12px] text-ink/55 mt-1 relative z-10">
              Python · LangGraph · ChromaDB · Streamlit
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
