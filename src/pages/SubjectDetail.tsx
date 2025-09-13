import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Circle } from 'lucide-react';
import { courses } from '../data/mockData';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SubjectDetail: React.FC = () => {
  const { subjectId } = useParams();
  const [roadmapState, setRoadmapState] = useState<{ [key: string]: boolean }>({});
  
  // Find subject across all courses
  let subject = null;
  for (const course of courses) {
    subject = course.subjects.find(s => s.id === subjectId);
    if (subject) break;
  }

  if (!subject) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-handwritten text-black">Subject not found</h2>
        <Link to="/" className="text-blue-600 hover:underline font-handwritten">
          Return to home
        </Link>
      </div>
    );
  }

  // Initialize roadmap state
  useEffect(() => {
    const initialState: { [key: string]: boolean } = {};
    subject.roadmap.forEach(item => {
      initialState[item.id] = item.completed;
    });
    setRoadmapState(initialState);
  }, [subject.roadmap]);

  // Toggle roadmap item completion
  const toggleRoadmapItem = (itemId: string) => {
    setRoadmapState(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Calculate dynamic progress
  const calculateProgress = () => {
    const totalItems = subject.roadmap.length;
    const completedItems = Object.values(roadmapState).filter(Boolean).length;
    return Math.round((completedItems / totalItems) * 100);
  };

  const dynamicProgress = Object.keys(roadmapState).length > 0 ? calculateProgress() : subject.progress;

  const chartData = {
    labels: subject.testData.map(test => test.testName),
    datasets: [
      {
        label: 'Time Spent (minutes)',
        data: subject.testData.map(test => test.timeSpent),
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Nanum Pen Script',
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Time Spent Per Test',
        font: {
          family: 'Nanum Pen Script',
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            family: 'Nanum Pen Script',
            size: 12,
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: 'Nanum Pen Script',
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-black hover:text-gray-600 font-handwritten text-lg mb-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to subjects
        </Link>
        <h1 className="text-4xl font-handwritten text-black mb-2">{subject.name}</h1>
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-lg font-handwritten text-gray-600">
            Progress: {dynamicProgress}%
          </span>
          <span className="text-lg font-handwritten text-gray-600">
            Total Hours: {subject.totalHours}
          </span>
        </div>
        
        {/* Dynamic Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-black h-3 rounded-full transition-all duration-500" 
              style={{ width: `${dynamicProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Roadmap */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <h2 className="text-2xl font-handwritten text-black mb-4">Learning Roadmap</h2>
          <div className="space-y-4">
            {subject.roadmap.map((item, index) => (
              <div 
                key={item.id} 
                className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                onClick={() => toggleRoadmapItem(item.id)}
              >
                <div className="mt-1">
                  {roadmapState[item.id] ? (
                    <CheckCircle size={24} className="text-green-600" />
                  ) : (
                    <Circle size={24} className="text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-handwritten ${roadmapState[item.id] ? 'text-black' : 'text-gray-600'}`}>
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className={`px-2 py-1 text-sm rounded-full border ${
                          roadmapState[item.id] 
                            ? 'bg-black text-white border-black' 
                            : 'bg-gray-100 text-gray-600 border-gray-300'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <h2 className="text-2xl font-handwritten text-black mb-4">AI Analysis</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-handwritten text-green-700 mb-2">Strengths</h3>
            <ul className="space-y-1">
              {subject.strengths.map((strength, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="font-handwritten text-gray-800">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-handwritten text-red-700 mb-2">Areas for Improvement</h3>
            <ul className="space-y-1">
              {subject.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="font-handwritten text-gray-800">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Test Performance Chart */}
      <div className="mt-8 bg-white border-2 border-black rounded-lg p-6">
        <h2 className="text-2xl font-handwritten text-black mb-4">Test Performance Analysis</h2>
        <div className="h-80">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;