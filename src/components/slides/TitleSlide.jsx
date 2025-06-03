import React from 'react';
import { ArrowRight } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center px-6 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="text-center text-white w-full max-w-5xl">
        {/* Logo Section - 80% of original size */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <img 
            src="https://i.imgur.com/5mJ0iYU.png" 
            alt="Scratchie Logo" 
            className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-22 w-auto transition-all duration-300"
          />
        </div>
        
        {/* Main Title */}
        <h1 className="font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
          Growth Plan
        </h1>
        
        {/* Subtitle */}
        <h2 className="mb-8 sm:mb-12 md:mb-14 lg:mb-16 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light opacity-90 leading-relaxed">
          Path to 15,000 Subscribers
        </h2>
        
        {/* Stats Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="text-center transform hover:scale-105 transition-transform duration-300 px-4 py-2">
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-1 sm:mb-2 md:mb-3 leading-none">
              3,500
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium opacity-80">
              Current Users
            </div>
          </div>
          
          <ArrowRight className="rotate-90 lg:rotate-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 opacity-70 flex-shrink-0 mx-2" />
          
          <div className="text-center transform hover:scale-105 transition-transform duration-300 px-4 py-2">
            <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-1 sm:mb-2 md:mb-3 leading-none">
              15,000
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium opacity-80">
              Target (Nov 2025)
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-90 leading-relaxed">
          4.3x Growth in 5 Months
        </div>
      </div>
    </div>
  );
};

export default TitleSlide; 