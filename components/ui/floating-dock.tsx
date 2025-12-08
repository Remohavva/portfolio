'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export interface FloatingDockProps {
  items: DockItem[];
  className?: string;
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50',
        'flex items-end gap-2 sm:gap-3 md:gap-4 h-14 sm:h-16 px-3 sm:px-4 pb-2 sm:pb-3',
        'bg-gray-900/80 backdrop-blur-md border border-purple-500/30',
        'rounded-xl sm:rounded-2xl shadow-xl shadow-purple-500/20',
        className
      )}
    >
      {items.map((item) => (
        <DockIcon key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
}

function DockIcon({ mouseX, title, icon, href }: DockItem & { mouseX: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [36, 64, 36]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width }}
        className="aspect-square w-9 sm:w-10 rounded-full bg-gray-800 flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors cursor-pointer relative group"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6">
          {icon}
        </div>
        <span className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {title}
        </span>
      </motion.div>
    </Link>
  );
}
