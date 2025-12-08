import { SectionTitle } from '@/components/section-title';
import { Card } from '@/components/ui/card';
import { SkillsMarquee } from '@/components/skills-marquee';

export default function AboutPage() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
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
                  I'm a passionate full-stack developer with [X] years of experience building web applications.
                  I love creating elegant solutions to complex problems and am always eager to learn new technologies.
                </p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  When I'm not coding, you can find me [your hobbies/interests].
                </p>
              </div>
            </div>
          </Card>
        </div>

        <SectionTitle subtitle="Technologies I work with">Skills & Technologies</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category}>
              <h3 className="text-xl font-bold mb-4 text-white">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <SectionTitle>My Journey</SectionTitle>
        <Card>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Current Position</h3>
              <p className="text-gray-300">
                [Your current role and company]
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Education</h3>
              <p className="text-gray-300">
                [Your education background]
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">Experience</h3>
              <p className="text-gray-300">
                [Brief overview of your professional experience]
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}
