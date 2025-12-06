import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose dark:prose-invert max-w-none mb-8">
          <h2>About This Project</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {project.longDescription || project.description}
          </p>
        </div>

        <div className="flex gap-4">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Button>View on GitHub</Button>
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">Live Demo</Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
