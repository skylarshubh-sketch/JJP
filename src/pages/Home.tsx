import React, { useState } from 'react';
import { courses, mockUser } from '../data/mockData';
import SubjectCard from '../components/SubjectCard';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-handwritten text-black mb-6">
          What's on today's timetable, {mockUser.name}?
        </h1>
        
        {/* Course Dropdown */}
        <div className="relative mb-8">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-64 px-4 py-3 bg-white border-2 border-black rounded-lg font-handwritten text-lg hover:bg-gray-50 transition-colors"
          >
            <span>{selectedCourse.name}</span>
            <ChevronDown 
              size={20} 
              className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-64 mt-2 bg-white border-2 border-black rounded-lg shadow-lg z-10">
              {courses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => {
                    setSelectedCourse(course);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left font-handwritten text-lg hover:bg-gray-100 transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {course.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedCourse.subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default Home;