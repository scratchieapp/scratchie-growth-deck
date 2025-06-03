import React from 'react';
import { Home, Play, Target, Film } from 'lucide-react';
import Slide from '../Slide';

const ViralVideoSlide = ({ goToStrategyHome }) => {
  return (
    <Slide className="bg-blue-50">
      <div className="w-full max-w-none">
        <button
          onClick={goToStrategyHome}
          className="mb-4 sm:mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to Strategy Overview</span>
        </button>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Pillar 2: Viral Video Marketing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12">
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-blue-600">Content Strategy</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>"Workplace Fails"</strong> - Funny safety incidents</span>
              </li>
              <li className="flex items-start gap-3">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>"Heroes at Work"</strong> - Employee spotlights</span>
              </li>
              <li className="flex items-start gap-3">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>"Safety Hacks"</strong> - Quick tips & tricks</span>
              </li>
              <li className="flex items-start gap-3">
                <Play className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Customer testimonials</strong> & success stories</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-blue-600">Distribution Channels</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">TikTok & Instagram Reels (primary)</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">LinkedIn (B2B audience)</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">YouTube Shorts</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Industry Facebook groups</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-100 p-6 lg:p-8 xl:p-10 rounded-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Production Schedule</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-4">
              <Film className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <span className="text-sm sm:text-base lg:text-lg"><strong>2 videos per week</strong> (Tuesdays & Fridays)</span>
            </div>
            <div className="flex items-center gap-4">
              <Film className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <span className="text-sm sm:text-base lg:text-lg"><strong>60% McDonald's content</strong> featuring real employees</span>
            </div>
            <div className="flex items-center gap-4">
              <Film className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <span className="text-sm sm:text-base lg:text-lg"><strong>40% general workplace</strong> safety content</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ViralVideoSlide; 