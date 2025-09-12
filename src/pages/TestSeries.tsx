import React from 'react';
import { Clock, Users, Trophy, Play } from 'lucide-react';

const TestSeries: React.FC = () => {
  const tests = [
    {
      id: 1,
      title: 'AI/ML Comprehensive Test',
      subject: 'AI/ML',
      duration: 120,
      questions: 50,
      participants: 1250,
      difficulty: 'Advanced',
      status: 'available'
    },
    {
      id: 2,
      title: 'Data Structures Quick Quiz',
      subject: 'DSA',
      duration: 60,
      questions: 30,
      participants: 2100,
      difficulty: 'Intermediate',
      status: 'available'
    },
    {
      id: 3,
      title: 'Operating Systems Mid-term',
      subject: 'OS',
      duration: 90,
      questions: 40,
      participants: 890,
      difficulty: 'Intermediate',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Database Management Final',
      subject: 'DBMS',
      duration: 180,
      questions: 75,
      participants: 1500,
      difficulty: 'Advanced',
      status: 'upcoming'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', score: 95, avatar: 'PS' },
    { rank: 2, name: 'Rahul Kumar', score: 92, avatar: 'RK' },
    { rank: 3, name: 'Anita Patel', score: 89, avatar: 'AP' },
    { rank: 4, name: 'Aarav Mehta', score: 87, avatar: 'AM' },
    { rank: 5, name: 'Sneha Gupta', score: 85, avatar: 'SG' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Advanced':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-green-600 bg-green-50 border-green-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'upcoming':
        return 'text-blue-600';
      default:
        return 'text-black';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-handwritten text-black mb-8">Test Series</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tests List */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-handwritten text-black mb-6">Available Tests</h2>
          <div className="space-y-4">
            {tests.map((test) => (
              <div key={test.id} className="bg-white border-2 border-black rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <h3 className="text-xl font-handwritten text-black">{test.title}</h3>
                  <span className={`px-3 py-1 border rounded-full text-sm font-handwritten ${getDifficultyColor(test.difficulty)}`}>
                    {test.difficulty}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="font-handwritten text-sm text-gray-600">{test.duration} min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-handwritten text-sm text-gray-600">{test.questions} questions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-gray-500" />
                    <span className="font-handwritten text-sm text-gray-600">{test.participants}</span>
                  </div>
                  <div>
                    <span className={`font-handwritten text-sm capitalize ${getStatusColor(test.status)}`}>
                      {test.status}
                    </span>
                  </div>
                </div>
                
                <button 
                  disabled={test.status === 'completed'}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-handwritten transition-colors ${
                    test.status === 'completed'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  <Play size={16} />
                  <span>
                    {test.status === 'completed' ? 'Completed' : 
                     test.status === 'upcoming' ? 'Coming Soon' : 'Start Test'}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="text-2xl font-handwritten text-black mb-6">Leaderboard</h2>
          <div className="bg-white border-2 border-black rounded-lg p-6">
            <div className="space-y-4">
              {leaderboard.map((entry) => (
                <div key={entry.rank} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-handwritten ${
                      entry.rank <= 3 ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {entry.rank <= 3 ? (
                        <Trophy size={16} />
                      ) : (
                        entry.rank
                      )}
                    </div>
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-handwritten">{entry.avatar}</span>
                    </div>
                    <span className="font-handwritten text-black">{entry.name}</span>
                  </div>
                  <span className="font-handwritten text-lg text-black">{entry.score}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;