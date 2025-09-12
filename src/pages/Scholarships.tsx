import React from 'react';
import { Award, Calendar, DollarSign, Users } from 'lucide-react';

const Scholarships: React.FC = () => {
  const scholarships = [
    {
      id: 1,
      title: 'Excellence in Computer Science',
      amount: '₹50,000',
      deadline: '2024-03-15',
      eligibility: 'B.Tech CSE students with 85%+ aggregate',
      applicants: 150,
      status: 'active'
    },
    {
      id: 2,
      title: 'Innovation in AI/ML',
      amount: '₹75,000',
      deadline: '2024-02-28',
      eligibility: 'Outstanding project in Machine Learning',
      applicants: 89,
      status: 'active'
    },
    {
      id: 3,
      title: 'Merit-based Engineering Scholarship',
      amount: '₹40,000',
      deadline: '2024-04-10',
      eligibility: 'Top 10% students across all engineering streams',
      applicants: 245,
      status: 'active'
    }
  ];

  const rewards = [
    {
      name: 'Arjun Patel',
      achievement: 'Consistent Top Performance',
      reward: '₹25,000 Scholarship',
      year: '2023'
    },
    {
      name: 'Kavya Singh',
      achievement: 'Best Final Year Project',
      reward: '₹30,000 + Internship',
      year: '2023'
    },
    {
      name: 'Rohit Sharma',
      achievement: 'Algorithm Competition Winner',
      reward: '₹20,000',
      year: '2023'
    },
    {
      name: 'Meera Gupta',
      achievement: 'Research Paper Publication',
      reward: '₹35,000 + Conference Trip',
      year: '2022'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-handwritten text-black mb-8">Scholarships & Rewards</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Scholarships */}
        <div>
          <h2 className="text-2xl font-handwritten text-black mb-6">Available Scholarships</h2>
          <div className="space-y-6">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="bg-white border-2 border-black rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-handwritten text-black">{scholarship.title}</h3>
                  <div className="flex items-center space-x-1">
                    <DollarSign size={16} className="text-green-600" />
                    <span className="font-handwritten text-green-600 font-medium">
                      {scholarship.amount}
                    </span>
                  </div>
                </div>
                
                <p className="font-handwritten text-gray-700 mb-4">{scholarship.eligibility}</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="font-handwritten text-sm text-gray-600">
                        Due: {new Date(scholarship.deadline).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} className="text-gray-500" />
                      <span className="font-handwritten text-sm text-gray-600">
                        {scholarship.applicants} applied
                      </span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-handwritten">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Rewards */}
        <div>
          <h2 className="text-2xl font-handwritten text-black mb-6">Exceptional Alumni Rewards</h2>
          <div className="space-y-4">
            {rewards.map((reward, index) => (
              <div key={index} className="bg-white border-2 border-black rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Award size={20} className="text-yellow-500" />
                  <h3 className="text-lg font-handwritten text-black">{reward.name}</h3>
                  <span className="px-2 py-1 bg-gray-100 text-xs font-handwritten rounded">
                    {reward.year}
                  </span>
                </div>
                <p className="font-handwritten text-gray-700 mb-2">{reward.achievement}</p>
                <p className="font-handwritten text-green-600 font-medium">{reward.reward}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-6">
            <h3 className="text-xl font-handwritten text-black mb-2">Become an Exceptional Alumni!</h3>
            <p className="font-handwritten text-gray-700">
              Maintain excellent performance, contribute to research, and participate in competitions 
              to unlock exclusive rewards and scholarships.
            </p>
            <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors font-handwritten">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;