'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full Stack Developer | Building amazing web experiences
        </motion.p>
        <motion.p 
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I create modern, responsive web applications using the latest technologies.
          Passionate about clean code and user experience.
        </motion.p>
        <motion.div 
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/projects">
            <Button>View My Work</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Get In Touch</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
