import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjects } from '@/lib/projects';
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
        <Link href="/projects" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-4 text-white">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-800">
              {tech}
            </span>
          ))}
        </div>

        <div className="aspect-video bg-gray-800 rounded-lg mb-8 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert max-w-none mb-8">
          <h2 className="text-white">About This Project</h2>
          <p className="text-lg text-gray-400">
            {project.longDescription || project.description}
          </p>
        </div>

        <div className="flex gap-4">
          {project.links.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.links.live && (
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-950 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
