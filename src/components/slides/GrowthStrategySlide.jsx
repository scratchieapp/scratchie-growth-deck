import React from 'react';
import { Megaphone, Video, Share2, Globe, DollarSign, Radio } from 'lucide-react';
import Slide from '../Slide';

const GrowthStrategySlide = ({ goToSlide }) => {
  return (
    <Slide className="bg-white">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 xl:mb-12 text-gray-800">6-Pillar Growth Strategy</h2>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <button
            onClick={() => goToSlide(10)}
            className="bg-orange-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-2 border-orange-200 hover:border-orange-400 transition-all cursor-pointer text-left h-full flex flex-col"
          >
            <Megaphone className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-orange-600 mb-3 sm:mb-4 lg:mb-6" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">1. Affiliate Program</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">Safety consultants & resellers earning 20% commission</p>
          </button>
          <button
            onClick={() => goToSlide(11)}
            className="bg-blue-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer text-left h-full flex flex-col"
          >
            <Video className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-blue-600 mb-3 sm:mb-4 lg:mb-6" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">2. Viral Video Marketing</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">"Safety Champion" series for social media virality</p>
          </button>
          <button
            onClick={() => goToSlide(12)}
            className="bg-green-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-2 border-green-200 hover:border-green-400 transition-all cursor-pointer text-left h-full flex flex-col"
          >
            <Share2 className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-green-600 mb-3 sm:mb-4 lg:mb-6" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">3. User-Generated Content</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">#ScratchieWin campaign with monthly prizes</p>
          </button>
          <button
            onClick={() => goToSlide(13)}
            className="bg-purple-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-all cursor-pointer text-left h-full flex flex-col"
          >
            <Globe className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-purple-600 mb-3 sm:mb-4 lg:mb-6" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">4. Tech Partnerships</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">Geotab, Procore, SafetyCulture integrations</p>
          </button>
          <button
            onClick={() => goToSlide(14)}
            className="bg-yellow-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all cursor-pointer text-left h-full flex flex-col"
          >
            <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-yellow-600 mb-3 sm:mb-4 lg:mb-6" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">5. PPC & Digital Ads</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">Targeted Google & LinkedIn campaigns</p>
          </button>
          <button
            onClick={() => goToSlide(15)}
            className="bg-pink-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-2 border-pink-200 hover:border-pink-400 transition-all cursor-pointer text-left h-full flex flex-col sm:col-span-2 lg:col-span-1"
          >
            <Radio className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-pink-600 mb-3 sm:mb-4 lg:mb-6" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">6. Podcast Strategy</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">Host own + guest on industry podcasts</p>
          </button>
        </div>
        <div className="mt-4 sm:mt-6 lg:mt-8 xl:mt-12 text-center text-gray-600">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl">Click any pillar to see detailed strategy →</p>
        </div>
      </div>
    </Slide>
  );
};

export default GrowthStrategySlide; 