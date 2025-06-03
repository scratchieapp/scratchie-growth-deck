import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { 
  TitleSlide, 
  ExecutiveSummarySlide, 
  MissingLinkSlide, 
  TargetSegmentsSlide,
  GrowthStrategySlide,
  ChannelPerformanceSlide,
  GrowthTimelineSlide,
  FunnelMetricsSlide,
  BudgetAllocationSlide,
  RiskMitigationSlide,
  AffiliateProgramSlide,
  ViralVideoSlide,
  UserContentSlide,
  TechPartnershipsSlide,
  PPCDigitalSlide,
  PodcastStrategySlide,
  CallToActionSlide,
  GrowthSlide,
  PlaceholderSlide 
} from './components/slides';
import { exportToPDF } from './utils/pdfExport';

const ScratchieGrowthDeck = ({ onLogout }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Navigation to strategy homepage (slide 4)
  const goToStrategyHome = () => setCurrentSlide(4);
  
  // Navigation to growth slide (slide 17)
  const goToGrowthSlide = () => setCurrentSlide(17);

  const slides = [
    <TitleSlide key="title" />,
    <ExecutiveSummarySlide key="executive-summary" />,
    <MissingLinkSlide key="missing-link" />,
    <TargetSegmentsSlide key="target-segments" />,
    <GrowthStrategySlide key="growth-strategy" goToSlide={goToSlide} />,
    <ChannelPerformanceSlide key="channel-performance" />,
    <GrowthTimelineSlide key="growth-timeline" />,
    <FunnelMetricsSlide key="funnel-metrics" />,
    <BudgetAllocationSlide key="budget-allocation" />,
    <RiskMitigationSlide key="risk-mitigation" />,
    <AffiliateProgramSlide key="affiliate-program" goToStrategyHome={goToStrategyHome} />,
    <ViralVideoSlide key="viral-video" goToStrategyHome={goToStrategyHome} />,
    <UserContentSlide key="user-content" goToStrategyHome={goToStrategyHome} />,
    <TechPartnershipsSlide key="tech-partnerships" goToStrategyHome={goToStrategyHome} />,
    <PPCDigitalSlide key="ppc-digital" goToStrategyHome={goToStrategyHome} />,
    <PodcastStrategySlide key="podcast-strategy" goToStrategyHome={goToStrategyHome} />,
    <CallToActionSlide key="call-to-action" goToGrowthSlide={goToGrowthSlide} />,
    <GrowthSlide key="growth" />
  ];

  return (
    <div className="relative bg-gray-100 min-h-screen w-full h-screen">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <span className="text-sm sm:text-lg font-medium">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-orange-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            {onLogout && (
              <button
                onClick={onLogout}
                className="p-1.5 sm:p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600"
                title="Logout"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Slide Content */}
      <div className={`min-h-screen ${currentSlide === 0 ? '' : 'pt-16 sm:pt-20 pb-24 sm:pb-28 lg:pb-32'}`}>
        <div className="h-full">
          {slides[currentSlide]}
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <img 
              src="https://i.imgur.com/IGBVAQC.png" 
              alt="Scratchie Logo" 
              className="h-4 sm:h-5 w-auto"
            />
            <span>Growth Plan 2025 | Confidential</span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={exportToPDF}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScratchieGrowthDeck; 