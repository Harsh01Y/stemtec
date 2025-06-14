
import React from 'react';
import { cn } from '@/lib/utils';

const DUMMY_CUSTOMERS = [
  { name: 'TechCorp' },
  { name: 'Innovate Inc.' },
  { name: 'Solutions Ltd.' },
  { name: 'NextGen Systems' },
  { name: 'Quantum Leap' },
  { name: 'FutureWorks' },
  { name: 'Synergy' },
];

const DUMMY_PARTNERS = [
  { name: 'Global AI' },
  { name: 'RoboAlliance' },
  { name: 'Data Insights' },
  { name: 'ConnectX' },
  { name: 'Automation Hub' },
  { name: 'Visionary Tech' },
  { name: 'Eco Systems' },
];

interface LogoScrollerProps {
  title: string;
  logos: { name: string }[];
  direction?: 'left' | 'right';
}

const LogoScroller: React.FC<LogoScrollerProps> = ({ title, logos, direction = 'left' }) => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto">
        <h3 className="text-center text-lg font-semibold uppercase text-muted-foreground tracking-widest mb-10">
          {title}
        </h3>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        >
          <div
            className={cn(
              "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap items-center",
              direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
            )}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 text-2xl text-foreground/80 font-medium whitespace-nowrap">
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogoScroller, DUMMY_CUSTOMERS, DUMMY_PARTNERS };
