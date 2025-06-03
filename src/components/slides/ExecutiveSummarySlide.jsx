import React from 'react';
import { CheckCircle, Target } from 'lucide-react';
import Slide from '../Slide';

const ExecutiveSummarySlide = () => {
  return (
    <Slide className="bg-gray-50">
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Executive Summary</h2>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
          <div className="bg-white p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg h-full flex flex-col">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-orange-600">The Opportunity</h3>
            <ul className="space-y-3 sm:space-y-4 flex-1">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">44% reduction in injuries with safety incentives</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">$6 return for every $1 invested in safety</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">31% reduction in turnover with recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">14% productivity boost from engagement</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg h-full flex flex-col">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-orange-600">Our Strategy</h3>
            <ul className="space-y-3 sm:space-y-4 flex-1">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">Multi-channel growth approach</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">Industry-specific positioning</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">Freemium + Enterprise sales model</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg xl:text-xl">Strategic partnerships & integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ExecutiveSummarySlide; 