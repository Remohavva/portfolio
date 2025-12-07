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
    primary: 'bg-sky-600 text-white hover:bg-sky-700 shadow-md hover:shadow-lg',
    secondary: 'bg-white/90 text-sky-700 hover:bg-sky-50 border border-sky-200',
    outline: 'border-2 border-sky-600 text-sky-700 hover:bg-sky-50 bg-transparent'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
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
