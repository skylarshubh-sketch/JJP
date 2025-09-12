import React, { useState } from 'react';
import { Search, Star, ExternalLink } from 'lucide-react';
import { lectureRecommendations } from '../data/mockData';

const LectureSuggestions: React.FC = () => {
  const [searchTopic, setSearchTopic] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const handleSearch = () => {
    const topic = searchTopic.toLowerCase();
    const results = lectureRecommendations[topic] || [];
    setRecommendations(results);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-handwritten text-black mb-8">Lecture Suggestions</h1>
      
      <div className="mb-8">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Enter a topic (e.g., ML, DSA, OS...)"
              value={searchTopic}
              onChange={(e) => setSearchTopic(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border-2 border-black rounded-lg font-handwritten text-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-handwritten flex items-center space-x-2"
          >
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
        
        <div className="mt-4">
          <p className="font-handwritten text-gray-600">
            Popular topics: Machine Learning (ml), Data Structures & Algorithms (dsa), Operating Systems (os)
          </p>
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-handwritten text-black">
            Recommended Courses for "{searchTopic}"
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((course, index) => (
              <div key={index} className="bg-white border-2 border-black rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-handwritten text-black">{course.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span className="text-sm font-handwritten text-gray-600">{course.rating}</span>
                  </div>
                </div>
                
                <p className="font-handwritten text-gray-700 mb-2">
                  <strong>Platform:</strong> {course.platform}
                </p>
                <p className="font-handwritten text-gray-700 mb-4">
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-handwritten"
                >
                  <ExternalLink size={16} />
                  <span>View Course</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchTopic && recommendations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl font-handwritten text-gray-600">
            No recommendations found for "{searchTopic}". Try searching for "ml" or "dsa".
          </p>
        </div>
      )}
    </div>
  );
};

export default LectureSuggestions;