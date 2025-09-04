'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-3 ${className}`}
    >
      <div className={`relative ${sizeClasses[size]}`}>
        <Image
          src="/logos/logoworldjoint.png"
          alt="World Joint Connection - Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <h1 className={`font-playfair font-bold text-primary leading-tight ${textSizeClasses[size]}`}>
            World Joint
          </h1>
          <p className={`text-secondary leading-tight ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            Connection
          </p>
        </div>
      )}
    </motion.div>
  );
}
