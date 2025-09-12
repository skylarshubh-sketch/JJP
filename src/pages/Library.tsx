import React, { useState } from 'react';
import { BookOpen, FileText, Search, Download } from 'lucide-react';

const Library: React.FC = () => {
  const [activeTab, setActiveTab] = useState('study-material');
  const [searchTerm, setSearchTerm] = useState('');

  const studyMaterials = [
    {
      title: 'Advanced Algorithms Handbook',
      subject: 'DSA',
      type: 'PDF',
      size: '15.2 MB',
      author: 'Prof. Cormen'
    },
    {
      title: 'Machine Learning Fundamentals',
      subject: 'AI/ML',
      type: 'PDF',
      size: '8.5 MB',
      author: 'Andrew Ng'
    },
    {
      title: 'Operating Systems Concepts',
      subject: 'OS',
      type: 'PDF',
      size: '22.1 MB',
      author: 'Silberschatz'
    },
    {
      title: 'Database System Implementation',
      subject: 'DBMS',
      type: 'PDF',
      size: '12.8 MB',
      author: 'Garcia-Molina'
    }
  ];

  const lectureNotes = [
    {
      title: 'Introduction to Neural Networks',
      subject: 'AI/ML',
      date: '2024-01-15',
      professor: 'Dr. Sharma'
    },
    {
      title: 'Process Synchronization',
      subject: 'OS',
      date: '2024-01-12',
      professor: 'Prof. Kumar'
    },
    {
      title: 'Normalization in Databases',
      subject: 'DBMS',
      date: '2024-01-10',
      professor: 'Dr. Patel'
    },
    {
      title: 'Graph Algorithms',
      subject: 'DSA',
      date: '2024-01-08',
      professor: 'Prof. Singh'
    }
  ];

  const filteredMaterials = studyMaterials.filter(material =>
    material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    material.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredNotes = lectureNotes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-handwritten text-black mb-8">Library</h1>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search materials..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border-2 border-black rounded-lg font-handwritten text-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6">
        <button
          onClick={() => setActiveTab('study-material')}
          className={`px-6 py-3 font-handwritten text-lg rounded-lg transition-colors ${
            activeTab === 'study-material'
              ? 'bg-black text-white'
              : 'bg-white text-black border-2 border-black hover:bg-gray-50'
          }`}
        >
          Study Material
        </button>
        <button
          onClick={() => setActiveTab('lecture-notes')}
          className={`px-6 py-3 font-handwritten text-lg rounded-lg transition-colors ${
            activeTab === 'lecture-notes'
              ? 'bg-black text-white'
              : 'bg-white text-black border-2 border-black hover:bg-gray-50'
          }`}
        >
          Lecture Notes
        </button>
      </div>

      {/* Content */}
      {activeTab === 'study-material' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material, index) => (
            <div key={index} className="bg-white border-2 border-black rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <FileText size={24} className="text-red-600 mt-1" />
                <span className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-handwritten">
                  {material.subject}
                </span>
              </div>
              <h3 className="text-lg font-handwritten text-black mb-2">{material.title}</h3>
              <p className="font-handwritten text-gray-600 mb-1">by {material.author}</p>
              <p className="font-handwritten text-sm text-gray-500 mb-4">
                {material.type} • {material.size}
              </p>
              <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-handwritten">
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'lecture-notes' && (
        <div className="space-y-4">
          {filteredNotes.map((note, index) => (
            <div key={index} className="bg-white border-2 border-black rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BookOpen size={24} className="text-blue-600" />
                  <div>
                    <h3 className="text-lg font-handwritten text-black">{note.title}</h3>
                    <p className="font-handwritten text-gray-600">by {note.professor}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm font-handwritten">
                    {note.subject}
                  </span>
                  <p className="font-handwritten text-sm text-gray-500 mt-1">
                    {new Date(note.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;