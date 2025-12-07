'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
}

export default function ProfileCard({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-sm mx-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-sky-200"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500 opacity-10" />
        
        {/* Content */}
        <div className="relative p-8">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={avatarUrl} 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg" />
            </div>
          </div>

          {/* User info */}
          {showUserInfo && (
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-sky-900 mb-1">{name}</h2>
              <p className="text-sky-600 font-medium mb-1">{title}</p>
              <p className="text-sky-500 text-sm">@{handle}</p>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {status}
              </div>
            </div>
          )}

          {/* Contact button */}
          <button
            onClick={onContactClick}
            className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {contactText}
          </button>

          {/* Social stats or additional info */}
          <div className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-sky-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-900">50+</div>
              <div className="text-xs text-sky-600">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-900">5+</div>
              <div className="text-xs text-sky-600">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-900">100+</div>
              <div className="text-xs text-sky-600">Clients</div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
