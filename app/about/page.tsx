import { SectionTitle } from '@/components/section-title';
import { Card } from '@/components/ui/card';
import { SkillsMarquee } from '@/components/skills-marquee';
import { SkillMovingCards } from '@/components/skill-moving-cards';

export default function AboutPage() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS',''] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB','Java'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
    { category: 'Others', items: ['Python', 'PineCone', 'RAG', 'Data Science'] },
  ];

  return (
    <>
      <SkillsMarquee />
      
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>About Me</SectionTitle>
        
        <div className="mb-12">
          <Card>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-purple-500/30 shadow-xl shadow-purple-500/20">
                <img 
                  src="/profile.jpg" 
                  alt="Ramanujam Chakravarthula" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Hi, I'm Ramanujam Chakravarthula</h2>
                <p className="text-gray-300 mb-4 text-base md:text-lg leading-relaxed">
                  I'm a passionate full-stack developer with 2 years of experience building web applications.
                  I just have to develop to have fun if i find ideas to be fun i go ahead and develop them.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  When I'm not coding, you can find me playing Video Games , Binge Watching or getting lost.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <SectionTitle subtitle="My technology stack">Skills & Technologies</SectionTitle>
        <div className="mb-12">
          <SkillMovingCards skills={skills} />
        </div>

        <SectionTitle>My Journey</SectionTitle>
        <Card>
          <div className="space-y-6">
            <div>
            
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Education</h3>
              <p className="text-gray-300">
                A highly motivated and results-driven Computer Science graduate with a B.Tech. degree (CGPA 8.3/10) from MLR Institute of Technology. Proven proficiency in core computer science fundamentals and strong problem-solving skills developed through rigorous academic projects.
              </p>
            </div>
            <div>
              
            </div>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}
