import React from 'react';
import { mockUser } from '../data/mockData';
import { Clock, Target, TrendingUp, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      icon: Clock,
      label: 'Hours Spent',
      value: mockUser.totalHoursStudied,
      suffix: 'hrs',
      color: 'text-blue-600'
    },
    {
      icon: Target,
      label: 'Current Course',
      value: mockUser.course,
      suffix: '',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      label: 'Weekly Average',
      value: '12.5',
      suffix: 'hrs',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      label: 'Achievements',
      value: '7',
      suffix: 'badges',
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-handwritten text-black mb-8">
        AI-Powered Dashboard
      </h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white border-2 border-black rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-handwritten">{stat.label}</p>
                  <p className="text-2xl font-handwritten text-black">
                    {stat.value} <span className="text-sm">{stat.suffix}</span>
                  </p>
                </div>
                <Icon size={24} className={stat.color} />
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Insights */}
      <div className="bg-white border-2 border-black rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-handwritten text-black mb-4">AI Insights & Recommendations</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="font-handwritten text-lg text-black">Strong Performance in C Programming</p>
              <p className="font-handwritten text-gray-600">You've completed 85% of the curriculum with consistent high scores.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <p className="font-handwritten text-lg text-black">Focus Area: Operating Systems</p>
              <p className="font-handwritten text-gray-600">Consider spending more time on memory management concepts.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="font-handwritten text-lg text-black">Recommendation: Practice DSA Daily</p>
              <p className="font-handwritten text-gray-600">15-20 minutes of daily practice can improve your algorithm skills significantly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white border-2 border-black rounded-lg p-6">
        <h2 className="text-2xl font-handwritten text-black mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="font-handwritten text-black">Completed AI/ML Quiz 2</span>
            <span className="font-handwritten text-gray-600">2 hours ago</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="font-handwritten text-black">Submitted DBMS Assignment</span>
            <span className="font-handwritten text-gray-600">Yesterday</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="font-handwritten text-black">Watched Thermodynamics Lecture</span>
            <span className="font-handwritten text-gray-600">2 days ago</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-handwritten text-black">Completed C Programming Lab</span>
            <span className="font-handwritten text-gray-600">3 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;