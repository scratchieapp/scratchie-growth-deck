import React from 'react';
import { Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Slide from '../Slide';
import { growthData } from '../../data/chartData';

const GrowthTimelineSlide = () => {
  return (
    <Slide className="bg-white">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Growth Timeline</h2>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-center mb-8 lg:mb-12">
            <AreaChart width={900} height={400} data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="users" stackId="1" stroke="#F97316" fill="#F97316" name="Actual/Projected Users" />
              <Area type="monotone" dataKey="target" stackId="2" stroke="#10B981" fill="#10B981" fillOpacity={0.3} name="Target" />
            </AreaChart>
          </div>
          
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="flex items-center gap-4 bg-orange-50 p-4 sm:p-6 lg:p-8 rounded-lg border-l-4 border-orange-500">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">July: Release 3 Launch + Campaign Kickoff</span>
            </div>
            <div className="flex items-center gap-4 bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-lg border-l-4 border-blue-500">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">August-September: Scale & Momentum Phase</span>
            </div>
            <div className="flex items-center gap-4 bg-green-50 p-4 sm:p-6 lg:p-8 rounded-lg border-l-4 border-green-500">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl">October: Final Push & Conversion Drive</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default GrowthTimelineSlide; 