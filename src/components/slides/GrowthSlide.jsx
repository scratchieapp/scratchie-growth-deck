import React from 'react';
import { TrendingUp, Users, Target, Zap } from 'lucide-react';
import Slide from '../Slide';

const GrowthSlide = () => {
  return (
    <Slide className="bg-gradient-to-br from-green-50 to-blue-50">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Growth: Business Model & Profitability</h2>
        
        {/* Business Model Overview */}
        <div className="mb-6 lg:mb-8 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4 text-green-600">SaaS Model Overview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600">$5</div>
              <div className="text-sm sm:text-base text-gray-600">per user/month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600">99.6%</div>
              <div className="text-sm sm:text-base text-gray-600">gross margin</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600">$0.02</div>
              <div className="text-sm sm:text-base text-gray-600">infrastructure cost/user</div>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Profitability Milestones */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-orange-600 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
              Profitability Milestones
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-semibold text-sm sm:text-base">15,000 users (Break-even)</span>
                <span className="text-green-600 font-bold text-sm sm:text-base">$75K MRR</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-semibold text-sm sm:text-base">30,000 users</span>
                <span className="text-blue-600 font-bold text-sm sm:text-base">+$55K/month</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-semibold text-sm sm:text-base">50,000 users</span>
                <span className="text-purple-600 font-bold text-sm sm:text-base">+$150K/month</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span className="font-semibold text-sm sm:text-base">250,000 users</span>
                <span className="text-orange-600 font-bold text-sm sm:text-base">+$1M/month</span>
              </div>
            </div>
          </div>

          {/* Market Opportunity */}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-blue-600 flex items-center gap-2">
              <Target className="w-6 h-6 sm:w-8 sm:h-8" />
              Market Opportunity
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="font-semibold text-sm sm:text-base lg:text-lg">Total Addressable Market</div>
                <div className="text-xs sm:text-sm text-gray-600">AU: 7.4M workers = A$354M potential</div>
                <div className="text-xs sm:text-sm text-gray-600">US: 73M workers = A$3.5B potential</div>
              </div>
              <div>
                <div className="font-semibold text-sm sm:text-base lg:text-lg">5-Year Target</div>
                <div className="text-xs sm:text-sm text-gray-600">250K AU + 500K US users</div>
                <div className="text-xl sm:text-2xl font-bold text-green-600">A$36M ARR</div>
              </div>
            </div>
          </div>
        </div>

        {/* Path to Scale */}
        <div className="mt-6 lg:mt-8 bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-purple-600 flex items-center gap-2">
            <Users className="w-6 h-6 sm:w-8 sm:h-8" />
            Path to Scale
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600">80K</div>
              <div className="text-xs sm:text-sm text-gray-600">McDonald's Australia potential</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">235K</div>
              <div className="text-xs sm:text-sm text-gray-600">Geotab integration (5% penetration)</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">20%</div>
              <div className="text-xs sm:text-sm text-gray-600">Affiliate commission driving adoption</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-600">AI</div>
              <div className="text-xs sm:text-sm text-gray-600">Automation replacing 10-20 employees</div>
            </div>
          </div>
        </div>

        {/* Strategic Advantages */}
        <div className="mt-6 lg:mt-8 bg-gradient-to-r from-orange-50 to-purple-50 p-4 sm:p-6 lg:p-8 rounded-lg border border-orange-200">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-orange-600 flex items-center gap-2">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
            Strategic Advantages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm sm:text-base">Near-zero marginal costs enable aggressive pricing</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm sm:text-base">AI-powered operations scale without headcount</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm sm:text-base">Platform integrations provide distribution & acquisition</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm sm:text-base">First-mover advantage in positive reinforcement safety</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default GrowthSlide; 