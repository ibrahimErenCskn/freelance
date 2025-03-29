'use client';

import Link from 'next/link';
import { heroData } from '../constants';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {heroData.title.highlight}
                </motion.span>{' '}
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {heroData.title.main}
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-foreground/70 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {heroData.description}
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={heroData.buttons.primary.href} 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
                >
                  {heroData.buttons.primary.text}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={heroData.buttons.secondary.href} 
                  className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition"
                >
                  {heroData.buttons.secondary.text}
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex -space-x-2">
                {heroData.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.id} 
                    className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-xs font-medium"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
                  >
                    {skill.shortName}
                  </motion.div>
                ))}
              </div>
              <motion.span 
                className="text-sm text-foreground/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                {heroData.skillsTagline}
              </motion.span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.div 
              className="absolute inset-0 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div 
                className="w-3/4 h-3/4 relative"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "easeInOut" 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 opacity-80 rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                  Your Portfolio Image
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 