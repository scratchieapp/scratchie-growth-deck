import React from 'react';
import { ArrowRight } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-4">
      <div className="text-center text-white w-full max-w-6xl">
        {/* Logo Section */}
        <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
          <img 
            src="https://i.imgur.com/5mJ0iYU.png" 
            alt="Scratchie Logo" 
            className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto transition-all duration-300"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="font-bold mb-6 md:mb-8 lg:mb-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          Growth Plan
        </h1>
        
        {/* Subtitle */}
        <h2 className="mb-12 md:mb-16 lg:mb-20 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light opacity-90">
          Path to 15,000 Subscribers
        </h2>
        
        {/* Stats Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 mb-12 md:mb-16 lg:mb-20">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 md:mb-4">
              3,500
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium opacity-80">
              Current Users
            </div>
          </div>
          
          <ArrowRight className="rotate-90 lg:rotate-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-70 flex-shrink-0" />
          
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 md:mb-4">
              15,000
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium opacity-80">
              Target (Nov 2025)
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90">
          4.3x Growth in 5 Months
        </div>
      </div>
    </div>
  );
};

export default TitleSlide; 