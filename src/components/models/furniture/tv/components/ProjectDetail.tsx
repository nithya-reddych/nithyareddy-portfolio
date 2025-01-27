import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="text-white">
      <button
        onClick={onBack}
        className="flex items-center font-spicy gap-1.5 text-black/70 hover:text-gray-500 text-xl mb-2 group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </button>
      
      <div className="grid grid-cols-2 gap-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover rounded-lg"
        />
        <div>
          <h2 className="text-lg text-pink-dark font-font3 font-bold mb">{project.title}</h2>
          <p className="top-0 font-font3 text-black/70 text-sm mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-font3 px-2 rounded-full bg-pink-dark/20 text-black/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex font-font3 items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-dark/10 hover:bg-pink/20 transition-colors text-sm text-black"
            >
              <Github size={16} />
              View Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex font-font3 items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-dark/10 hover:bg-pink/20 transition-colors text-sm text-black"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}