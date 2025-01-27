import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export function LoadingScreen({ progress }: { progress: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-rose flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div 
          className="mb-8"
          animate={{ 
            rotate: 360,
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <Loader2 size={48} className="text-white" />
        </motion.div>
        <div>
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to My Space
          </motion.h1>
          <motion.p 
            className="text-white text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Loading your experience...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}