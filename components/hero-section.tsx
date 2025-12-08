'use client';

import SplitText from './split-text';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center w-full">
        <SplitText
          text="Hi, I'm Ramanujam Chakravarthula"
          tag="h1"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white"
          splitType="chars"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 50, rotateX: -90 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          threshold={0.2}
        />
        
        <SplitText
          text="Full Stack Developer | Full Time Yapper | Fun Guy"
          tag="p"
          className="text-lg sm:text-xl md:text-2xl text-purple-300 mb-6 sm:mb-8"
          splitType="words"
          delay={30}
          duration={0.6}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
        />
        
        <SplitText
          text="I create modern, responsive web applications and do what sells mostly"
          tag="p"
          className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
          splitType="words"
          delay={20}
          duration={0.5}
          from={{ opacity: 0, scale: 0.8 }}
          to={{ opacity: 1, scale: 1 }}
          threshold={0.2}
        />
      </div>
    </section>
  );
}
