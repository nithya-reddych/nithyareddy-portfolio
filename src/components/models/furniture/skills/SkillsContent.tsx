import { motion } from 'framer-motion';
import { useStore } from '../../../../store/useStore';
import { ArrowLeft } from 'lucide-react';

const skills = [
  {
    category: 'Programming',
    items:['C++', 'Java', 'Python', 'SQL']
  },
  {
    category: 'Frontend',
    items: ['HTML','CSS','JavaScript','React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MYSQL','PHP', 'MongoDB' , 'REST APIs']
  },
  {
    category: 'Tools',
    items: ['Git', 'Figma', 'VS Code']
  }
];

export function SkillsContent() {
  const { setActiveSection } = useStore();

  return (
    <div className="relative backdrop-blur-sm rounded-lg p-5 w-full h-full">
      <button
        onClick={() => setActiveSection(null)}
        className="absolute -top-5 left-5 text-black hover:text-gray-500 flex items-center gap-2 "
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-spicy">Back to Room</span>
      </button>

      <h2 className="text-xl font-spicy mb-3 text-center text-orange">Skills & Technologies</h2>
      
      <div className="grid grid-cols-4 gap-8">
        {skills.map((category) => (
          <motion.div 
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-vt323 font-semibold mb-1 text-gray-800">
              {category.category}
            </h3>
            <ul className="space-y-3 font-font3" >
              {category.items.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  className="text-gray-600 flex items-center gap-2 text-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-rose" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}