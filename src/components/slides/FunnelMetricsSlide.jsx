import React from 'react';
import Slide from '../Slide';

const FunnelMetricsSlide = () => {
  const funnelStages = [
    {
      stage: 'Organizations Engaged',
      value: 250,
      subtext: 'Monthly outreach',
      color: '#FED7AA', // orange-200
      details: 'QSR, Construction, Manufacturing'
    },
    {
      stage: 'Trials Started',
      value: 75,
      subtext: '30% interest rate',
      color: '#FDBA74', // orange-300
      details: 'Pilot programs initiated'
    },
    {
      stage: 'Organizations Won',
      value: 30,
      subtext: '40% close rate',
      color: '#FB923C', // orange-400
      details: 'Contracts signed'
    },
    {
      stage: 'Sites Activated',
      value: 65,
      subtext: '~2.2 sites/org',
      color: '#F97316', // orange-500
      details: 'Live deployments'
    },
    {
      stage: 'Active Subscribers',
      value: 4875,
      subtext: '~75 users/site',
      color: '#EA580C', // orange-600
      details: '$24,375 MRR'
    }
  ];

  // Accurate calculations
  const monthlyRevenueAt15k = 15000 * 5; // $75,000
  const arrAt15k = monthlyRevenueAt15k * 12; // $900,000
  const avgRevenuePerOrg = 812.50; // ~162.5 users per org × $5
  const cacPerOrg = 1200;
  const paybackMonths = (cacPerOrg / avgRevenuePerOrg).toFixed(1); // 1.5 months

  const keyMetrics = [
    {
      category: 'Acquisition Metrics',
      metrics: [
        {
          label: 'CAC per Organization',
          value: '$1,200',
          target: 'Includes all sales costs',
          color: 'border-orange-500',
          explanation: 'Blended across channels'
        },
        {
          label: 'Time to First Site Live',
          value: '14 days',
          target: 'From contract signing',
          color: 'border-blue-500',
          explanation: 'Target: <21 days'
        }
      ]
    },
    {
      category: 'Expansion Metrics',
      metrics: [
        {
          label: 'Site Expansion Rate',
          value: '3.2x',
          target: 'Year 1 average',
          color: 'border-green-500',
          explanation: 'New sites per org/year'
        },
        {
          label: 'Net Revenue Retention',
          value: '125%',
          target: 'Including expansion',
          color: 'border-purple-500',
          explanation: 'Target: >120%'
        }
      ]
    },
    {
      category: 'Retention Metrics',
      metrics: [
        {
          label: 'Org-Level Churn',
          value: '2.5%',
          target: 'Monthly',
          color: 'border-red-500',
          explanation: 'Target: <3%'
        },
        {
          label: 'User Activation',
          value: '68%',
          target: 'First 30 days',
          color: 'border-indigo-500',
          explanation: 'Target: >65%'
        }
      ]
    }
  ];

  return (
    <Slide className="bg-gray-50">
      <div className="h-full flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-gray-800">
          Sales Funnel & Unit Economics
        </h2>
        
        <div className="flex-1 flex flex-col">
          {/* Funnel visualization */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Monthly Sales Funnel</h3>
            <div className="max-w-5xl mx-auto px-4">
              {funnelStages.map((stage, index) => {
                const width = 400 - (index * 60);
                const maxWidth = 400;
                const offset = (maxWidth - width) / 2;
                
                return (
                  <div key={index} className="relative mb-2" style={{ paddingLeft: `${offset}px`, paddingRight: `${offset}px` }}>
                    <div className="flex items-center">
                      {/* Left label - fixed width */}
                      <div className="w-48 text-right pr-4 flex-shrink-0">
                        <div className="font-semibold text-gray-800 text-sm">{stage.stage}</div>
                        <div className="text-xs text-gray-600">{stage.details}</div>
                      </div>
                      
                      {/* Funnel segment */}
                      <div
                        className="h-14 flex items-center justify-center transition-all duration-300 hover:scale-105 flex-1"
                        style={{
                          backgroundColor: stage.color,
                          clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                          maxWidth: `${width}px`
                        }}
                      >
                        <div className="text-center px-4">
                          <div className="text-xl font-bold text-gray-900">{stage.value.toLocaleString()}</div>
                          <div className="text-xs text-gray-700">{stage.subtext}</div>
                        </div>
                      </div>
                      
                      {/* Right spacer for balance */}
                      <div className="w-48 flex-shrink-0"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key metrics grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {keyMetrics.map((category, catIndex) => (
              <div key={catIndex} className="space-y-3">
                <h4 className="text-md font-semibold text-gray-700 mb-2">{category.category}</h4>
                {category.metrics.map((metric, index) => (
                  <div key={index} className={`bg-white p-4 rounded-lg shadow border-l-4 ${metric.color}`}>
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm text-gray-600 flex-1">{metric.label}</span>
                      <span className="font-bold text-lg ml-2">{metric.value}</span>
                    </div>
                    <div className="text-xs text-gray-500">{metric.target}</div>
                    <div className="text-xs text-gray-400 mt-1">{metric.explanation}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom summary */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg text-white text-center">
              <div className="text-xl font-bold">$900K</div>
              <div className="text-xs">ARR at 15K users</div>
              <div className="text-xs opacity-75">($75K MRR)</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-lg text-white text-center">
              <div className="text-xl font-bold">{paybackMonths} months</div>
              <div className="text-xs">CAC Payback</div>
              <div className="text-xs opacity-75">Per organization</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg text-white text-center">
              <div className="text-xl font-bold">$4,875</div>
              <div className="text-xs">LTV per Org</div>
              <div className="text-xs opacity-75">(3 year @ 2.5% churn)</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-lg text-white text-center">
              <div className="text-xl font-bold">4.1x</div>
              <div className="text-xs">LTV:CAC Ratio</div>
              <div className="text-xs opacity-75">Target: &gt;3x</div>
            </div>
          </div>

          {/* Clarification note */}
          <div className="mt-3 text-xs text-gray-500 text-center">
            * Payback period = Time to recover customer acquisition cost from monthly revenue
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default FunnelMetricsSlide;