import React from 'react';
import { ArrowRight, Target, TrendingUp } from 'lucide-react';
import Slide from '../Slide';

const CallToActionSlide = ({ goToGrowthSlide }) => {
  return (
    <Slide className="bg-gradient-to-br from-orange-50 to-purple-50">
      <div className="h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">
            Ready to Scale Scratchie
          </h2>
          
          <div className="mb-8 lg:mb-12">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8">
              Our growth strategy is designed to achieve <strong>cashflow positive</strong> operations and unlock exponential scaling opportunities.
            </p>
            
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg border-l-4 border-green-500 mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">Break-Even Target</h3>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-600 mb-2">15,000</div>
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-600">Paying Subscribers</div>
                <div className="text-base sm:text-lg text-gray-500 mt-2">= $75K Monthly Recurring Revenue</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="bg-orange-100 p-4 sm:p-6 lg:p-8 rounded-lg border border-orange-300">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-orange-600 mb-3 sm:mb-4">Next Steps</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
                <div>
                  <div className="font-semibold text-sm sm:text-base lg:text-lg">Execute Strategy</div>
                  <div className="text-xs sm:text-sm text-gray-600">Launch all 6 growth pillars</div>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base lg:text-lg">Monitor KPIs</div>
                  <div className="text-xs sm:text-sm text-gray-600">Track conversion & growth metrics</div>
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base lg:text-lg">Scale Operations</div>
                  <div className="text-xs sm:text-sm text-gray-600">Achieve 15K subscriber milestone</div>
                </div>
              </div>
            </div>

            {goToGrowthSlide && (
              <button
                onClick={goToGrowthSlide}
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-green-600 hover:bg-green-700 text-white text-lg sm:text-xl lg:text-2xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
                View Growth Business Model
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            )}
            
            <div className="mt-8 lg:mt-12 text-center">
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                <strong>Time to execute:</strong> Let's turn McDonald's success into industry-wide adoption
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CallToActionSlide; 