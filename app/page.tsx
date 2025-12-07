import { HeroSection } from '@/components/hero-section';
import { SectionTitle } from '@/components/section-title';
import { ProjectCard } from '@/components/project-card';
import { getFeaturedProjects } from '@/lib/projects';
import Link from 'next/link';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      <HeroSection />
      
      <section className="py-16 px-4 bg-white/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Check out some of my recent work">
            Featured Projects
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-block px-6 py-3 border-2 border-sky-600 text-sky-700 rounded-lg font-medium hover:bg-sky-50 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>Let's Work Together</SectionTitle>
          <p className="text-lg text-sky-700 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
