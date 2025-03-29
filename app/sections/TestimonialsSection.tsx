'use client';

import { useState } from 'react';
import { testimonials } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="flex overflow-hidden">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  index === activeIndex && (
                    <motion.div 
                      key={testimonial.id}
                      className="w-full flex-shrink-0"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="bg-background border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-10 text-center"
                        whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                      >
                        <motion.div 
                          className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <div className="w-full h-full flex items-center justify-center text-lg font-medium">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </motion.div>
                        <motion.blockquote 
                          className="text-lg md:text-xl italic text-foreground/90 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          "{testimonial.content}"
                        </motion.blockquote>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-foreground/70">{testimonial.role}</p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
            
            <motion.button 
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-background border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition md:-translate-x-6"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button 
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-background border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition md:translate-x-6"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 