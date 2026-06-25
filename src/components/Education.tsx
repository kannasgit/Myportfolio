import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Education: React.FC = () => {
  const { ref, isIntersecting } = useScrollReveal();
  
  const [coords1, setCoords1] = useState({ x: 0, y: 0 });
  const [hovering1, setHovering1] = useState(false);

  const [achievementCoords, setAchievementCoords] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [hoveredAchievements, setHoveredAchievements] = useState<{ [key: number]: boolean }>({});

  const handleMouseMove1 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords1({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMoveAchievement = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setAchievementCoords(prev => ({
      ...prev,
      [idx]: { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }));
  };

  const achievementsData = [
    { date: 'Apr 2025', description: '24-Hour Hackathon, GDG — designed and shipped a Sustainable Development app end-to-end under competitive time pressure' },
    { date: 'Mar 2024', description: 'Big Data Workshop, NIT Trichy — national-level workshop on large-scale data engineering tools and methodologies' }
  ];

  const delays = ['0.05s', '0.15s', '0.25s'];

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative w-full bg-paper bg-grid-paper pt-12 pb-16 px-6 md:pl-12 lg:pl-16 reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-6">

        {/* Education Block */}
        <div className="font-mono text-[13px] tracking-wide text-bright uppercase">
          // Education
        </div>

        {/* Education Card */}
        <div
          tabIndex={0}
          className={`relative overflow-hidden bg-paper border-[0.5px] border-bright rounded-[12px] p-[22px] flex flex-col items-start gap-3 min-h-[140px] shadow-sm reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
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
          <div className="p-5 flex flex-col gap-1 items-start relative z-10">
            <h3 className="font-display text-[17px] font-semibold text-[#022F5B] leading-snug">
              B.E. Computer Science & Engineering
            </h3>
            <p className="font-body text-[14px] text-ink/70">
              SACS M.A.V.M.M Engineering College, Madurai.
            </p>
            <p className="font-body text-[14px] text-ink/70">
              2022–2026
            </p>
            <p className="font-body text-[14px] text-ink/70">
              CGPA: 8.2 / 10
            </p>
          </div>
        </div>

        {/* Achievements Block */}
        <div className="font-mono text-[13px] tracking-wide text-bright uppercase">
          // Achievements
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {achievementsData.map((achievement, idx) => (
            <div
              key={idx}
              tabIndex={0}
              className={`relative overflow-hidden bg-paper border-[0.5px] border-bright rounded-[12px] p-[22px] flex flex-col items-start gap-3 min-h-[120px] shadow-sm reveal-child ${isIntersecting ? 'reveal-child-visible' : ''}`}
              style={{ transitionDelay: isIntersecting ? delays[idx + 1] : '0s' }}
              onMouseMove={(e) => handleMouseMoveAchievement(idx, e)}
              onMouseEnter={() => setHoveredAchievements(prev => ({ ...prev, [idx]: true }))}
              onMouseLeave={() => setHoveredAchievements(prev => ({ ...prev, [idx]: false }))}
            >
              {hoveredAchievements[idx] && achievementCoords[idx] && (
                <div 
                  className="absolute pointer-events-none inset-0 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(160px circle at ${achievementCoords[idx].x}px ${achievementCoords[idx].y}px, rgba(59,111,212,0.28), transparent)`
                  }}
                />
              )}
              <span className="font-mono text-[11px] text-bright shrink-0 relative z-10">
                {achievement.date}
              </span>
              <p className="font-body text-[14px] text-ink/80 leading-snug relative z-10">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
