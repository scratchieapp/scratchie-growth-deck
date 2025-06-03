import React from 'react';
import Slide from '../Slide';

const ChannelPerformanceSlide = () => {
  const channels = [
    {
      name: 'Direct Sales',
      monthlyTargets: {
        organizations: 5,
        avgSitesPerOrg: 3,
        avgUsersPerSite: 75,
        totalUsers: 1125,
        conversionRate: '25%'
      },
      focus: 'Enterprise & Multi-site'
    },
    {
      name: 'Partner Referrals',
      monthlyTargets: {
        organizations: 8,
        avgSitesPerOrg: 2,
        avgUsersPerSite: 60,
        totalUsers: 960,
        conversionRate: '35%'
      },
      focus: 'Construction & Manufacturing'
    },
    {
      name: 'Freemium → Pro',
      monthlyTargets: {
        organizations: 150,
        avgSitesPerOrg: 1,
        avgUsersPerSite: 15,
        totalUsers: 2250,
        conversionRate: '15%'
      },
      focus: 'SMBs & Trades'
    },
    {
      name: 'Content/Social',
      monthlyTargets: {
        organizations: 12,
        avgSitesPerOrg: 1.5,
        avgUsersPerSite: 50,
        totalUsers: 900,
        conversionRate: '20%'
      },
      focus: 'QSR & Hospitality'
    }
  ];

  const totalMonthlyUsers = channels.reduce((sum, ch) => sum + ch.monthlyTargets.totalUsers, 0);
  const monthsToTarget = 3.5; // Mid-July to November 1st
  const requiredGrowth = 15000 - 3500;
  const monthlyGrowthNeeded = Math.ceil(requiredGrowth / monthsToTarget);

  return (
    <Slide className="bg-gray-50">
      <div className="h-full flex flex-col">
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 text-gray-800">
            Growth Path to Cashflow Positive
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Starting: 3,500 subscribers (July) → Target: 15,000 subscribers (November 1st)
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left side - Channel breakdown */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Monthly Acquisition Targets by Channel</h3>
            <div className="space-y-3">
              {channels.map((channel, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{channel.name}</h4>
                      <p className="text-xs text-gray-500">{channel.focus}</p>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      {channel.monthlyTargets.conversionRate} conversion
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-orange-50 rounded p-2">
                      <div className="text-lg font-bold text-orange-600">
                        {channel.monthlyTargets.organizations}
                      </div>
                      <div className="text-xs text-gray-600">orgs</div>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <div className="text-lg font-bold text-blue-600">
                        {channel.monthlyTargets.avgSitesPerOrg}
                      </div>
                      <div className="text-xs text-gray-600">sites/org</div>
                    </div>
                    <div className="bg-purple-50 rounded p-2">
                      <div className="text-lg font-bold text-purple-600">
                        {channel.monthlyTargets.avgUsersPerSite}
                      </div>
                      <div className="text-xs text-gray-600">users/site</div>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <div className="text-lg font-bold text-green-600">
                        {channel.monthlyTargets.totalUsers}
                      </div>
                      <div className="text-xs text-gray-600">total users</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Summary metrics */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Monthly Targets</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Organizations</span>
                  <span className="text-xl font-bold text-orange-600">
                    {channels.reduce((sum, ch) => sum + ch.monthlyTargets.organizations, 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Sites</span>
                  <span className="text-xl font-bold text-blue-600">
                    {channels.reduce((sum, ch) => sum + ch.monthlyTargets.organizations * ch.monthlyTargets.avgSitesPerOrg, 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t pt-3">
                  <span className="text-gray-600">New Subscribers</span>
                  <span className="text-2xl font-bold text-green-600">
                    {totalMonthlyUsers.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg shadow text-white">
              <h3 className="text-lg font-semibold mb-2">Revenue Impact</h3>
              <div className="text-3xl font-bold mb-1">
                ${(totalMonthlyUsers * 5).toLocaleString()}/month
              </div>
              <p className="text-sm opacity-90">Additional MRR from new subscribers</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow text-white">
              <h3 className="text-lg font-semibold mb-3">Growth Timeline</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>July (Launch)</span>
                  <span className="font-semibold">3,500 subscribers</span>
                </div>
                <div className="flex justify-between">
                  <span>August</span>
                  <span>~7,800 subscribers</span>
                </div>
                <div className="flex justify-between">
                  <span>September</span>
                  <span>~12,100 subscribers</span>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>November 1st</span>
                  <span className="font-bold">15,000+ subscribers ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          * Based on SafetyCulture's GTM model | Freemium users convert to Pro after reaching 10-user limit
        </div>
      </div>
    </Slide>
  );
};

export default ChannelPerformanceSlide;