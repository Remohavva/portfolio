'use client';

import { useEffect, useRef } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVercel,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGraphql,
  SiFigma
} from 'react-icons/si';
import { FaAws, FaCode } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skillsData: Skill[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: FaCode, color: '#FFFFFF' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
];

export function SkillsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      const marqueeWidth = marquee.scrollWidth / 2;
      
      if (Math.abs(position) >= marqueeWidth) {
        position = 0;
      }
      
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Duplicate skills array to create seamless loop
  const duplicatedSkills = [...skillsData, ...skillsData];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-purple-950/30 via-purple-900/20 to-purple-950/30 border-y border-purple-500/10 py-3">
      <div
        ref={marqueeRef}
        className="flex gap-8 md:gap-10 items-center"
        style={{ willChange: 'transform' }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center flex-shrink-0 group"
            title={skill.name}
          >
            <skill.icon 
              className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-200 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              style={{ color: skill.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
