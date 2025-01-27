import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from './projects.data';
import { useStore } from '../../../../store/useStore';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetail } from './components/ProjectDetail';

export function ProjectsDisplay() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { setActiveSection } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full bg-white/90 p-4 overflow-hidden relative"
    >
      <button
        onClick={() => setActiveSection(null)}
        className="absolute font-spicy top-3 right-2 text-black/70 hover:text-gray-600 flex items-center gap-2 text-lg"
      >
        <ArrowLeft size={16} />
        Back to Room
      </button>

      <AnimatePresence mode="wait">
        {selectedProject === null ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-3 gap-3 mt-12 font-font3"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project.id)}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-12 font-font3"
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              return <ProjectDetail project={project} onBack={() => setSelectedProject(null)} />;
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}