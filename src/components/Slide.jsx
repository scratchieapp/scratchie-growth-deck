import React from 'react';

const Slide = ({ children, className = "" }) => (
  <div className={`min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center ${className}`}>
    <div className="max-w-none w-full h-full flex items-center justify-center">
      <div className="w-full">{children}</div>
    </div>
  </div>
);

export default Slide; 