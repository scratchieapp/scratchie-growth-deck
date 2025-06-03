import React from 'react';
import { Home, Target, TrendingUp, MousePointer } from 'lucide-react';
import Slide from '../Slide';

const PPCDigitalSlide = ({ goToStrategyHome }) => {
  return (
    <Slide className="bg-yellow-50">
      <div className="w-full max-w-none">
        <button
          onClick={goToStrategyHome}
          className="mb-4 sm:mb-6 flex items-center gap-2 text-yellow-600 hover:text-yellow-700"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to Strategy Overview</span>
        </button>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Pillar 5: PPC & Digital Ads</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12">
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-yellow-600">Channel Strategy</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Google Ads</strong> - Search & Display (60% budget)</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>LinkedIn Ads</strong> - B2B targeting (25% budget)</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Facebook/Instagram</strong> - Brand awareness (15% budget)</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Retargeting</strong> - Website visitors & video viewers</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-yellow-600">Target Keywords</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MousePointer className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">"Employee safety app"</span>
              </li>
              <li className="flex items-start gap-3">
                <MousePointer className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">"Workplace safety software"</span>
              </li>
              <li className="flex items-start gap-3">
                <MousePointer className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">"Safety training platform"</span>
              </li>
              <li className="flex items-start gap-3">
                <MousePointer className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">"Employee engagement tools"</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-100 p-6 lg:p-8 xl:p-10 rounded-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Performance Targets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">CTR</h4>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-600">3.5%+</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">CPC</h4>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-600">&lt;$3.50</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Conv Rate</h4>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-600">8%+</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">ROAS</h4>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-600">4:1+</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default PPCDigitalSlide; 