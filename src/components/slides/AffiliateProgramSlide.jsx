import React from 'react';
import { Home, Target, Users } from 'lucide-react';
import Slide from '../Slide';

const AffiliateProgramSlide = ({ goToStrategyHome }) => {
  return (
    <Slide className="bg-orange-50">
      <div className="w-full max-w-none">
        <button
          onClick={goToStrategyHome}
          className="mb-4 sm:mb-6 flex items-center gap-2 text-orange-600 hover:text-orange-700"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to Strategy Overview</span>
        </button>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Pillar 1: Affiliate Program</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12">
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-orange-600">Program Structure</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>20% commission</strong> on first-year revenue</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>FirstPromoter</strong> platform for tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Tiered bonuses</strong> for 5+ referrals</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Marketing support</strong> & sales collateral</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-orange-600">Target Partners</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Safety consultants & trainers</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">HR service providers</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">PPE suppliers & safety equipment vendors</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Industry associations (AIHS, etc.)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-orange-100 p-6 lg:p-8 xl:p-10 rounded-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Launch Timeline</h3>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">1</div>
              <span className="text-sm sm:text-base lg:text-lg"><strong>June:</strong> Build partner portal & materials</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">2</div>
              <span className="text-sm sm:text-base lg:text-lg"><strong>July:</strong> Soft launch with 5 partners</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">3</div>
              <span className="text-sm sm:text-base lg:text-lg"><strong>August:</strong> Scale to 10+ active partners</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default AffiliateProgramSlide; 