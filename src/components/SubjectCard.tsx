import React from 'react';
import { Link } from 'react-router-dom';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <Link to={`/subject/${subject.id}`}>
      <div className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
        <h3 className="text-xl font-handwritten text-black mb-2 truncate" title={subject.name}>
          {subject.displayName}
        </h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-600 font-handwritten">Progress</span>
          <span className="text-sm text-black font-handwritten">{subject.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-black h-2 rounded-full transition-all duration-300" 
            style={{ width: `${subject.progress}%` }}
          ></div>
        </div>
        <div className="mt-3 text-sm text-gray-600 font-handwritten">
          {subject.totalHours} hours studied
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;