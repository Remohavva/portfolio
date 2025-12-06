import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration',
    longDescription: 'Built a complete e-commerce platform with user authentication, product management, shopping cart, and Stripe payment integration.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    image: '/projects/project1.png',
    links: {
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.vercel.app'
    },
    featured: true
  },
  {
    slug: 'task-manager',
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates',
    longDescription: 'A real-time task management application with drag-and-drop functionality, team collaboration features, and notifications.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '/projects/project2.png',
    links: {
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.vercel.app'
    },
    featured: true
  }
];

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
