import { HeroSection } from '@/components/hero-section';
import { SectionTitle } from '@/components/section-title';
import { ProjectCard } from '@/components/project-card';
import { getFeaturedProjects } from '@/lib/projects';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div>
      <HeroSection />
      
      <section className="py-16 px-4 bg-black/30">
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
            <Link href="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle>Let's Work Together</SectionTitle>
          <p className="text-lg text-gray-400 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link href="/contact">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
