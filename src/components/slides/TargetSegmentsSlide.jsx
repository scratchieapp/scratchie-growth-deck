import React from 'react';
import { Building, ShoppingBag, Truck, Package } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import Slide from '../Slide';
import { segmentData } from '../../data/chartData';

const TargetSegmentsSlide = () => {
  return (
    <Slide className="bg-gray-50">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-800">Target Market Segments</h2>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="flex justify-center items-center">
            <PieChart width={350} height={280}>
              <Pie
                data={segmentData}
                cx={175}
                cy={140}
                labelLine={false}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {segmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 flex-shrink-0" />
                <h4 className="font-semibold text-base sm:text-lg">Construction & Engineering</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Safety managers, project directors focused on reducing incidents & compliance</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-2">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                <h4 className="font-semibold text-base sm:text-lg">QSR & Retail</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Operations & HR leaders concerned with retention and customer service</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-2">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0" />
                <h4 className="font-semibold text-base sm:text-lg">Logistics & Fleet</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Safety officers & fleet managers wanting driver safety improvements</p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-2">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 flex-shrink-0" />
                <h4 className="font-semibold text-base sm:text-lg">Manufacturing</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">EHS directors & HR focused on productivity and compliance</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default TargetSegmentsSlide; 