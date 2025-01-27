import { useStore } from '../../store/useStore';

export function SkillsSection() {
  return null; // Content is now displayed directly on the coffee table
}

// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowLeft } from 'lucide-react';
// import { useStore } from '../../store/useStore';

// const skills = [
//   {
//     category: 'Frontend',
//     items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js']
//   },
//   {
//     category: 'Backend',
//     items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL', 'REST APIs']
//   },
//   {
//     category: 'Tools',
//     items: ['Git', 'Docker', 'AWS', 'Figma', 'VS Code']
//   }
// ];

// export function SkillsSection() {
//   const { showContent, setActiveSection } = useStore();

//   return (
//     <AnimatePresence>
//       {showContent && (
//         <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 z-10">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ delay: 0.3 }}
//             className="relative bg-white/95 rounded-lg p-6 w-[460px] text-black shadow-xl"
//             style={{
//               transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)',
//               transformOrigin: 'center bottom',
//             }}
//           >
//             <button
//               onClick={() => setActiveSection(null)}
//               className="absolute -top-0 left-0 text-black/70 hover:text-gray-500 flex items-center gap-2 px-4 py-2 transition-colors"
//               // style={{ transform: 'rotateX(-60deg)' }}
//             >
//               <ArrowLeft size={20} />
//               <span className="text-sm font-medium">Back to Room</span>
//             </button>

//             <h2 className="text-2xl font-bold mb-6 text-center text-rose">Skills & Technologies</h2>
            
//             <div className="grid grid-cols-3 gap-6">
//               {skills.map((category) => (
//                 <motion.div 
//                   key={category.category}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <h3 className="text-lg font-semibold mb-3 text-gray-800">
//                     {category.category}
//                   </h3>
//                   <ul className="space-y-2">
//                     {category.items.map((skill, index) => (
//                       <motion.li
//                         key={skill}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.7 + (index * 0.1) }}
//                         className="text-gray-600 flex items-center gap-2"
//                       >
//                         <span className="w-2 h-2 rounded-full bg-rose" />
//                         {skill}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }