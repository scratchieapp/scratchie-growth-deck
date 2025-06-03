import React from 'react';
import { Link } from 'lucide-react';
import Slide from '../Slide';

const MissingLinkSlide = () => {
  return (
    <Slide className="bg-white">
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 xl:mb-12 text-gray-800">The Missing Link in Workplace Platforms</h2>
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-6 sm:mb-8 lg:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
              <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700">SafetyCulture</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-600 my-2 sm:my-3 lg:my-4">$1.5B+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">Valuation</div>
                <div className="text-sm sm:text-lg lg:text-xl font-semibold mt-2">500K+ Users</div>
              </div>
              <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg text-center">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700">HammerTech</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-green-600 my-2 sm:my-3 lg:my-4">4.5M</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">Users Globally</div>
                <div className="text-sm sm:text-lg lg:text-xl font-semibold mt-2">20K+ Projects</div>
              </div>
              <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg text-center sm:col-span-2 lg:col-span-1">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-700">Procore</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-600 my-2 sm:my-3 lg:my-4">$9B+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-600">Market Cap</div>
                <div className="text-sm sm:text-lg lg:text-xl font-semibold mt-2">Industry Leader</div>
              </div>
            </div>
            
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4 sm:p-6 lg:p-8 xl:p-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
                <div className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-700 text-center">These platforms excel at compliance & data</div>
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">BUT</div>
                <div className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-700 text-center">They're missing the human connection</div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8">
                <Link className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-orange-600" />
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-600 text-center">Scratchie is the Missing Link</div>
                <Link className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-orange-600" />
              </div>
              <p className="text-center text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                We provide the <span className="font-bold">rewards layer</span> that connects workers emotionally to safety & quality
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            <div className="bg-white p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-gray-700">What They Do Well</h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600">
                <li>✓ Compliance tracking</li>
                <li>✓ Data collection & reporting</li>
                <li>✓ Process management</li>
                <li>✓ Documentation</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg border-2 border-orange-300">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold mb-3 sm:mb-4 lg:mb-6 text-orange-600">What Scratchie Adds</h3>
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-700">
                <li>🎯 Instant recognition & rewards</li>
                <li>🎯 Worker engagement & motivation</li>
                <li>🎯 Positive reinforcement culture</li>
                <li>🎯 Emotional connection to safety</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default MissingLinkSlide; 