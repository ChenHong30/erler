import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <div className={`${className} overflow-hidden flex items-center justify-center`}>
    <img 
      src="./logo.png" 
      alt="ERLER Logo" 
      className="w-full h-full object-contain scale-[1.8] translate-y-[1px]" // scale up to crop and nudge down
    />
  </div>
);

