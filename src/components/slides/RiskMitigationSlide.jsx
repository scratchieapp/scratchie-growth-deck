import React from 'react';
import { CheckCircle } from 'lucide-react';
import Slide from '../Slide';

const RiskMitigationSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Risk Mitigation & Success Actions</h2>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-orange-600">Identified Risks</h3>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">Lower conversion rates</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Mitigation: Weekly A/B testing, rapid iteration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">Channel underperformance</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Mitigation: Multi-channel approach, budget flexibility</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">Hiring delays</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Mitigation: Start recruiting NOW, use contractors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-green-600">Critical Success Actions</h3>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">Execute affiliate program by July</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">10+ active partners generating leads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">Launch viral video campaign</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">50K+ views driving brand awareness</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">Optimize funnel weekly</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Track metrics, iterate fast, double down on winners</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">Leverage McDonald's success</p>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">Case studies, testimonials, referrals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default RiskMitigationSlide; 