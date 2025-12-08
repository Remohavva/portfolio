'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-200 rounded-lg border-0';
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg',
    secondary: 'bg-gray-800/90 text-purple-300 hover:bg-gray-700 border border-purple-500/30',
    outline: 'border-2 border-purple-600 text-purple-400 hover:bg-purple-950 bg-transparent'
  };

  const sizes = {
    sm: 'px-3 py-2 text-xs sm:text-sm sm:px-4',
    md: 'px-4 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3',
    lg: 'px-6 py-3 text-base sm:text-lg sm:px-8 sm:py-4'
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
