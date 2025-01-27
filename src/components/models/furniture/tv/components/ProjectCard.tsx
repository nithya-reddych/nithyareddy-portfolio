import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative group bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
        <h3 className="text-white text-sm font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 rounded-full bg-white/20 text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}