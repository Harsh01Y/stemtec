
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[999]">
      <div className="relative flex items-center justify-center">
        <img src="/lovable-uploads/88b53153-b805-491e-8d72-6d3f2dd10272.png" alt="STEMTEC Logo" className="h-24 w-auto z-10" />
        <div className="absolute h-48 w-48 rounded-full border-2 border-primary animate-wave" style={{ animationDelay: '0s' }}></div>
        <div className="absolute h-48 w-48 rounded-full border-2 border-primary animate-wave" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute h-48 w-48 rounded-full border-2 border-primary animate-wave" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default Loading;
