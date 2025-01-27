import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { AnimatedText } from './about/AnimatedText';
// import { SkillBadge } from './about/SkillBadge';
// import { FloatingCard } from './about/FloatingCard';


export function AboutSection() {
  const { showContent, setActiveSection } = useStore();

  return (
    <AnimatePresence>
      {showContent && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-8 max-w-lg text-white perspective-1000">
            <button
              onClick={() => setActiveSection(null)}
              className="absolute text-black font-spicy -top-12 left-0 hover:text-gray-800 flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-sm transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-lg">Back to Room</span>
            </button>

            <AnimatedText 
              text="Hello, I'm Nithya!"
              className="text-2xl font-bold mb-4 font-vt323 text-rose"
            />
            
            <AnimatedText 
              text="A passionate software developer with a love for creating beautiful and functional applications."
              className="text-white/80 leading-relaxed mb-4 font-vt323 text-xl"
              delay={0.2}
            />
            
            <AnimatedText 
              text="I specialize in frontend and backend development and have a keen eye for design and user experience. When I'm not coding, you can find me playing badminton or cooking."
              className="text-white/80 leading-relaxed font-vt323 text-xl"
              delay={0.4}
            />

          <AnimatedText 
              text="(Hover on the text)"
              className="text-white/80 bottom-10 -left-10 leading-relaxed mb-1 font-vt323 text-xl"
              delay={0.4}
            />

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {/* {skills.map((skill, index) => (
                <SkillBadge key={skill} skill={skill} index={index} />
              ))} */}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}