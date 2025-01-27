import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = " ", delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          whileHover={{ 
            scale: 1.1, 
            color: '#ffd1dc',
            transition: { duration: 0.2 } 
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}