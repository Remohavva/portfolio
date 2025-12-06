import { SectionTitle } from '@/components/section-title';
import { Card } from '@/components/ui/card';

export default function AboutPage() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel'] },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="mb-12">
          <Card>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex-shrink-0">
                <img src="/avatar.jpg" alt="Your Name" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Hi, I'm Your Name</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm a passionate full-stack developer with [X] years of experience building web applications.
                  I love creating elegant solutions to complex problems and am always eager to learn new technologies.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
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
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-600 dark:text-gray-400">
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
              <h3 className="text-xl font-bold mb-2">Current Position</h3>
              <p className="text-gray-600 dark:text-gray-400">
                [Your current role and company]
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-400">
                [Your education background]
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                [Brief overview of your professional experience]
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
