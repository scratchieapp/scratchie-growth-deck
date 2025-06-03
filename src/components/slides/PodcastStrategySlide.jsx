import React from 'react';
import { Home, Mic, Radio, Users } from 'lucide-react';
import Slide from '../Slide';

const PodcastStrategySlide = ({ goToStrategyHome }) => {
  return (
    <Slide className="bg-indigo-50">
      <div className="w-full max-w-none">
        <button
          onClick={goToStrategyHome}
          className="mb-4 sm:mb-6 flex items-center gap-2 text-indigo-600 hover:text-indigo-700"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to Strategy Overview</span>
        </button>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Pillar 6: Podcast Strategy</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12">
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-indigo-600">Show Concept</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>"Safety Stories"</strong> - Real workplace experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Weekly episodes</strong> - 20-30 minutes each</span>
              </li>
              <li className="flex items-start gap-3">
                <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Expert interviews</strong> - Safety leaders & innovators</span>
              </li>
              <li className="flex items-start gap-3">
                <Mic className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Customer spotlights</strong> - McDonald's feature episodes</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-indigo-600">Guest Strategy</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Industry thought leaders (AIHS, ASSE)</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Safety managers from Fortune 500</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Frontline workers & team leaders</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Technology innovators & competitors</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-indigo-100 p-6 lg:p-8 xl:p-10 rounded-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Distribution & Promotion</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <Radio className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Platforms</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Spotify, Apple, Google Podcasts</p>
            </div>
            <div className="text-center">
              <Radio className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Video Version</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">YouTube & LinkedIn uploads</p>
            </div>
            <div className="text-center">
              <Radio className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Content Repurposing</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Blog posts, social clips, quotes</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default PodcastStrategySlide; 