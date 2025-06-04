import React from 'react';
import { Home, Zap, Link, Handshake } from 'lucide-react';
import Slide from '../Slide';

const TechPartnershipsSlide = ({ goToStrategyHome }) => {
  return (
    <Slide className="bg-purple-50">
      <div className="w-full max-w-none">
        <button
          onClick={goToStrategyHome}
          className="mb-4 sm:mb-6 flex items-center gap-2 text-purple-600 hover:text-purple-700"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Back to Strategy Overview</span>
        </button>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-gray-800">Pillar 4: Tech Partnerships</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-8 lg:mb-12">
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-purple-600">Integration Strategy</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Link className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Zapier connector</strong> - 5000+ app ecosystem</span>
              </li>
              <li className="flex items-start gap-3">
                <Link className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>API partnerships</strong> - Custom integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <Link className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg"><strong>Model Context Protocol (MCP)</strong> - AI tool connectivity</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 lg:p-8 xl:p-10 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 text-purple-600">Target Partners</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">SafetyCulture (iAuditor)</span>
              </li>
              <li className="flex items-start gap-3">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Geotab</span>
              </li>
              <li className="flex items-start gap-3">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Procore</span>
              </li>
              <li className="flex items-start gap-3">
                <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg">Donesafe</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-purple-100 p-6 lg:p-8 xl:p-10 rounded-lg">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Implementation Roadmap</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">Q3</div>
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Foundation</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">openAPI and MCP</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">Q4</div>
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Expansion</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">SafetyCulture, Geotab and Procore partnerships</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">2026</div>
              <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Scale</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Enterprise partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default TechPartnershipsSlide; 