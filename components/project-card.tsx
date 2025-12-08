'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { Card } from './ui/card';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="hover:shadow-2xl transition-shadow h-full">
        <Link href={`/projects/${project.slug}`}>
          <motion.div 
            className="aspect-video bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-lg mb-4 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <motion.span 
                key={tech} 
                className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-700/50"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                 className="text-purple-400 hover:text-purple-300 hover:underline" onClick={(e) => e.stopPropagation()}>
                GitHub
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                 className="text-purple-400 hover:text-purple-300 hover:underline" onClick={(e) => e.stopPropagation()}>
                Live Demo
              </a>
            )}
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}
