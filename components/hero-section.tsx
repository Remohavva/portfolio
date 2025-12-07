'use client';

import Link from 'next/link';
import SplitText from './split-text';
import { Button } from './ui/button';
import { ButtonGroup, ButtonGroupSeparator } from './ui/button-group';

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <SplitText
          text="Hi, I'm Ramanujam Chakravarthula"
          tag="h1"
          className="text-5xl md:text-6xl font-bold mb-6 text-sky-900"
          splitType="chars"
          delay={50}
          duration={0.8}
          from={{ opacity: 0, y: 50, rotateX: -90 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
          threshold={0.2}
        />
        
        <SplitText
          text="Full Stack Developer | Full Time Yapper | Fun Human"
          tag="p"
          className="text-xl md:text-2xl text-sky-700 mb-8"
          splitType="words"
          delay={30}
          duration={0.6}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
        />
        
        <SplitText
          text="I create modern, responsive experiences using Whatever Sells Most"
          tag="p"
          className="text-lg text-sky-600 mb-10 max-w-2xl mx-auto"
          splitType="words"
          delay={20}
          duration={0.5}
          from={{ opacity: 0, scale: 0.8 }}
          to={{ opacity: 1, scale: 1 }}
          threshold={0.2}
        />
        
        <div className="flex justify-center mt-8">
          <ButtonGroup>
            <Link href="/projects">
              <Button variant="secondary" size="md">
                View My Work
              </Button>
            </Link>
            <ButtonGroupSeparator />
            <Link href="/contact">
              <Button variant="secondary" size="md">
                Get In Touch
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
}
