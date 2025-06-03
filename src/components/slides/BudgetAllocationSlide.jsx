import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Slide from '../Slide';
import { budgetData } from '../../data/chartData';

const BudgetAllocationSlide = () => {
  return (
    <Slide className="bg-white">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Budget Allocation</h2>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-orange-600">Monthly Marketing Budget: AU$10K</h3>
            <div className="flex justify-center">
              <PieChart width={400} height={300}>
                <Pie
                  data={budgetData}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="amount"
                  label={({category, percentage}) => `${category} ${percentage}%`}
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#F97316', '#10B981', '#3B82F6', '#8B5CF6'][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8 text-orange-600">Team Investment Timeline</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-blue-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-base sm:text-lg lg:text-xl">Now: Part-time Social/Content Marketer</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">AU$2K/month - UGC campaigns, content posting</p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">6-month trial period, n8n automation to scale efficiency</p>
              </div>
              <div className="bg-orange-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-base sm:text-lg lg:text-xl">October: BD/Sales Manager</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">AU$160K/year - Channel partnerships & SME sales</p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">Timing flexible - can accelerate if growth demands</p>
              </div>
              <div className="bg-green-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-base sm:text-lg lg:text-xl">Ongoing: Agency 23digital</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">AU$1.5K/month - PPC management & SEO</p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">Target: 50+ qualified leads/month from paid channels</p>
              </div>
              <div className="bg-purple-50 p-4 sm:p-6 lg:p-8 xl:p-10 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-base sm:text-lg lg:text-xl">Q4: n8n Automation Implementation</h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">AI workflows for UGC, content curation & posting</p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">Replace 10-20 traditional employees with smart automation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default BudgetAllocationSlide; 