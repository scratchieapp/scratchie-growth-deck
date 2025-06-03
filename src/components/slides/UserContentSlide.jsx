import React from 'react';
import { Home, Star, Award, Gift } from 'lucide-react';
import Slide from '../Slide';

const UserContentSlide = ({ goToStrategyHome }) => {
  return (
    <Slide className="bg-green-50">
      <div className="w-full max-w-none">
        <button
          onClick={goToStrategyHome}
          className="mb-4 sm:mb-6 flex items-center gap-2 text-green-600 hover:text-green-700"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to Strategy Overview</span>
        </button>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Pillar 3: User-Generated Content</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12">
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-green-600">Campaign Structure</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>"#ScratchieWin"</strong> social media campaign</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>"Safety Star"</strong> employee spotlight</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Team challenges</strong> & competitions</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Before/after</strong> safety improvements</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-green-600">Incentive Program</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Monthly AU$500 gift card winner</span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Quarterly AU$2K company retreat</span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Scratchie branded merchandise</span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Feature in Scratchie marketing</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-green-100 p-6 lg:p-8 xl:p-10 rounded-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Content Types</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Success Stories</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Employee achievements</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Safety Tips</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Employee-generated tips</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Team Photos</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Using Scratchie in action</p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 mx-auto mb-2" />
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Video Testimonials</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Authentic user reviews</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default UserContentSlide; 