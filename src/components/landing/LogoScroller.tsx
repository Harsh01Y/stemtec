'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const TECH_STACK = [
  { name: 'Image 1', image: '/lovable-uploads/images/1.png' },
  { name: 'Image 2', image: '/lovable-uploads/images/2.png' },
  { name: 'Image 3', image: '/lovable-uploads/images/3.png' },
  { name: 'Image 4', image: '/lovable-uploads/images/4.png' },
  { name: 'Image 5', image: '/lovable-uploads/images/5.png' },
  { name: 'Image 6', image: '/lovable-uploads/images/6.png' },
];

const PARTNERS = [
  { name: 'Partner 1', image: '/lovable-uploads/7.png' },
  { name: 'Partner 2', image: '/lovable-uploads/8.png' },
];

interface LogoScrollerProps {
  title: string;
  logos: { name: string; image: string }[];
  direction?: 'left' | 'right';
  isStatic?: boolean;
}

const LogoScroller = ({ title, logos, direction = 'left', isStatic = false }: LogoScrollerProps) => {
  const logoElements = logos.map((logo, index) => (
    <div 
      key={index} 
      className="flex-shrink-0 bg-blue-950/30 backdrop-blur-sm rounded-lg p-4 hover:bg-blue-900/40 transition-colors group"
    >
      <img 
        src={logo.image} 
        alt={logo.name} 
        className={cn(
          "h-16 w-auto object-contain transition-all duration-300",
          !isStatic && "filter grayscale group-hover:grayscale-0",
          "group-hover:scale-110"
        )}
      />
    </div>
  ));

  return (
    <div className="py-16 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <h3 className="text-center text-2xl font-semibold text-blue-400 mb-10">
          {title}
        </h3>
        {isStatic ? (
          <div className="flex justify-center items-center gap-12">
            {logoElements}
          </div>
        ) : (
          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            }}
          >
            <div
              className={cn(
                "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap items-center",
                direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
              )}
            >
              {[...logoElements, ...logoElements]}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { LogoScroller, TECH_STACK, PARTNERS };
