import React from 'react';
import { mockUser } from '../data/mockData';
import { Edit, Share, Mail, Phone } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-handwritten text-black mb-8">Profile</h1>
      
      <div className="bg-white border-2 border-black rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Picture */}
          <div className="w-32 h-32 bg-gray-200 border-2 border-black rounded-full flex items-center justify-center">
            <span className="text-4xl font-handwritten text-gray-600">
              {mockUser.name.charAt(0)}
            </span>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-handwritten text-black mb-4">{mockUser.name}</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-600" />
                <span className="font-handwritten text-lg text-black">{mockUser.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-600" />
                <span className="font-handwritten text-lg text-black">{mockUser.phone}</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <p className="text-2xl font-handwritten text-black">{mockUser.totalHoursStudied}</p>
                <p className="text-sm font-handwritten text-gray-600">Hours Studied</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <p className="text-2xl font-handwritten text-black">6</p>
                <p className="text-sm font-handwritten text-gray-600">Subjects</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <p className="text-2xl font-handwritten text-black">B.Tech CSE</p>
                <p className="text-sm font-handwritten text-gray-600">Current Course</p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                <Edit size={18} />
                <span className="font-handwritten">Edit Profile</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-gray-50 transition-colors">
                <Share size={18} />
                <span className="font-handwritten">Refer Friends</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Achievement Section */}
      <div className="mt-8 bg-white border-2 border-black rounded-lg p-6">
        <h2 className="text-2xl font-handwritten text-black mb-4">Achievements & Badges</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'First Assignment', desc: 'Submitted first assignment' },
            { name: 'Quiz Master', desc: 'Scored 90%+ in 3 quizzes' },
            { name: 'Consistency', desc: '7 days study streak' },
            { name: 'Early Bird', desc: 'Completed course ahead of schedule' }
          ].map((achievement, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-yellow-400 border-2 border-black rounded-full mx-auto mb-2"></div>
              <p className="font-handwritten text-sm text-black font-medium">{achievement.name}</p>
              <p className="font-handwritten text-xs text-gray-600">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;