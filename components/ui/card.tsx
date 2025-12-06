'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function Card({ children, className = '', animate = true }: CardProps) {
  if (!animate) {
    return (
      <div className={`bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div 
      className={`bg-gray-900 border border-gray-800 rounded-lg shadow-xl p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
