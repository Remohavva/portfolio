import { SectionTitle } from '@/components/section-title';
import { ProjectCard } from '@/components/project-card';
import { getProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Explore my work and side projects">
          My Projects
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
