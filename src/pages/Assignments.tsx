import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Assignments: React.FC = () => {
  const assignments = [
    {
      id: 1,
      title: 'AI/ML Project: Linear Regression Implementation',
      subject: 'AI/ML',
      dueDate: '2024-01-25',
      status: 'pending',
      description: 'Implement linear regression from scratch using Python'
    },
    {
      id: 2,
      title: 'Database Design: E-commerce System',
      subject: 'DBMS',
      dueDate: '2024-01-20',
      status: 'submitted',
      description: 'Design a complete database schema for an e-commerce platform'
    },
    {
      id: 3,
      title: 'Operating Systems: Process Scheduler',
      subject: 'OS',
      dueDate: '2024-01-30',
      status: 'pending',
      description: 'Implement a round-robin process scheduler in C'
    },
    {
      id: 4,
      title: 'Data Structures: Binary Tree Implementation',
      subject: 'DSA',
      dueDate: '2024-01-15',
      status: 'overdue',
      description: 'Implement binary search tree with all basic operations'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted':
        return 'text-green-600';
      case 'overdue':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted':
        return <CheckCircle size={20} className="text-green-600" />;
      case 'overdue':
        return <AlertCircle size={20} className="text-red-600" />;
      default:
        return <Clock size={20} className="text-yellow-600" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-handwritten text-black mb-8">Assignments</h1>
      
      <div className="space-y-6">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-white border-2 border-black rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {getStatusIcon(assignment.status)}
                <h2 className="text-xl font-handwritten text-black">{assignment.title}</h2>
              </div>
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm font-handwritten">
                  {assignment.subject}
                </span>
                <span className={`font-handwritten text-sm capitalize ${getStatusColor(assignment.status)}`}>
                  {assignment.status}
                </span>
              </div>
            </div>
            
            <p className="font-handwritten text-gray-700 mb-4">{assignment.description}</p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Calendar size={16} className="text-gray-500" />
                <span className="font-handwritten text-sm text-gray-600">
                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                </span>
              </div>
              <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-handwritten">
                {assignment.status === 'submitted' ? 'View Submission' : 'Submit Assignment'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;