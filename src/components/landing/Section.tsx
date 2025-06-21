import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`relative py-20 px-4 md:px-8 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto relative z-10">
        {children}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-400/10 rounded-full filter blur-[100px]" />
      </div>
    </motion.section>
  );
};

export default Section;
