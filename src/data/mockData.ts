import { Course, Subject, User, LectureRecommendation } from '../types';

export const mockUser: User = {
  name: 'Aarav Mehta',
  email: 'aarav.mehta@example.com',
  phone: '+91 98765 43210',
  totalHoursStudied: 145,
  course: 'B.Tech CSE'
};

export const courses: Course[] = [
  {
    id: 'btech-cse',
    name: 'B.Tech CSE',
    subjects: [
      {
        id: 'computational-math',
        name: 'Computational Mathematics',
        displayName: 'Computational Mathematics',
        progress: 75,
        totalHours: 25,
        roadmap: [
          {
            id: '1',
            title: 'Linear Algebra Fundamentals',
            completed: true,
            topics: ['Matrices', 'Determinants', 'Eigenvalues']
          },
          {
            id: '2',
            title: 'Calculus Applications',
            completed: true,
            topics: ['Integration', 'Differentiation', 'Optimization']
          },
          {
            id: '3',
            title: 'Numerical Methods',
            completed: false,
            topics: ['Newton-Raphson', 'Bisection Method', 'Simpson\'s Rule']
          }
        ],
        strengths: ['Problem-solving', 'Analytical thinking'],
        weaknesses: ['Complex number operations', 'Fourier transforms'],
        testData: [
          { testName: 'Quiz 1', timeSpent: 45, score: 85 },
          { testName: 'Mid-term', timeSpent: 120, score: 78 },
          { testName: 'Assignment 1', timeSpent: 90, score: 92 }
        ]
      },
      {
        id: 'aiml',
        name: 'Artificial Intelligence & Machine Learning',
        displayName: 'AI/ML',
        progress: 60,
        totalHours: 32,
        roadmap: [
          {
            id: '1',
            title: 'Introduction to AI',
            completed: true,
            topics: ['Search Algorithms', 'Knowledge Representation']
          },
          {
            id: '2',
            title: 'Machine Learning Basics',
            completed: true,
            topics: ['Supervised Learning', 'Unsupervised Learning']
          },
          {
            id: '3',
            title: 'Deep Learning',
            completed: false,
            topics: ['Neural Networks', 'CNN', 'RNN']
          }
        ],
        strengths: ['Pattern recognition', 'Data analysis'],
        weaknesses: ['Mathematical foundations', 'Algorithm optimization'],
        testData: [
          { testName: 'Lab Test 1', timeSpent: 60, score: 88 },
          { testName: 'Project Defense', timeSpent: 30, score: 95 },
          { testName: 'Theory Exam', timeSpent: 180, score: 72 }
        ]
      },
      {
        id: 'c-language',
        name: 'C Programming Language',
        displayName: 'C Language',
        progress: 85,
        totalHours: 28,
        roadmap: [
          {
            id: '1',
            title: 'Basic Syntax & Data Types',
            completed: true,
            topics: ['Variables', 'Operators', 'Control Structures']
          },
          {
            id: '2',
            title: 'Functions & Arrays',
            completed: true,
            topics: ['Function Definition', 'Array Manipulation', 'Pointers']
          },
          {
            id: '3',
            title: 'Advanced Concepts',
            completed: true,
            topics: ['Structures', 'File Handling', 'Dynamic Memory']
          }
        ],
        strengths: ['Syntax mastery', 'Problem decomposition'],
        weaknesses: ['Memory management', 'Complex pointer operations'],
        testData: [
          { testName: 'Coding Test 1', timeSpent: 90, score: 90 },
          { testName: 'Final Project', timeSpent: 240, score: 87 },
          { testName: 'Viva Voce', timeSpent: 15, score: 85 }
        ]
      },
      {
        id: 'os',
        name: 'Operating Systems',
        displayName: 'OS',
        progress: 45,
        totalHours: 18,
        roadmap: [
          {
            id: '1',
            title: 'Process Management',
            completed: true,
            topics: ['Process Scheduling', 'Synchronization']
          },
          {
            id: '2',
            title: 'Memory Management',
            completed: false,
            topics: ['Paging', 'Segmentation', 'Virtual Memory']
          },
          {
            id: '3',
            title: 'File Systems',
            completed: false,
            topics: ['File Allocation', 'Directory Structure', 'Security']
          }
        ],
        strengths: ['Conceptual understanding', 'System architecture'],
        weaknesses: ['Implementation details', 'Performance optimization'],
        testData: [
          { testName: 'Unit Test 1', timeSpent: 75, score: 82 },
          { testName: 'Lab Exercise', timeSpent: 120, score: 78 }
        ]
      },
      {
        id: 'dbms',
        name: 'Database Management Systems',
        displayName: 'DBMS',
        progress: 70,
        totalHours: 22,
        roadmap: [
          {
            id: '1',
            title: 'Database Design',
            completed: true,
            topics: ['ER Diagrams', 'Normalization', 'Schema Design']
          },
          {
            id: '2',
            title: 'SQL & Queries',
            completed: true,
            topics: ['Basic Queries', 'Joins', 'Subqueries']
          },
          {
            id: '3',
            title: 'Transaction Management',
            completed: false,
            topics: ['ACID Properties', 'Concurrency Control', 'Recovery']
          }
        ],
        strengths: ['Query optimization', 'Database design'],
        weaknesses: ['Complex joins', 'Performance tuning'],
        testData: [
          { testName: 'SQL Test', timeSpent: 60, score: 89 },
          { testName: 'Design Project', timeSpent: 180, score: 85 },
          { testName: 'Theory Paper', timeSpent: 120, score: 76 }
        ]
      },
      {
        id: 'dsa',
        name: 'Data Structures & Algorithms',
        displayName: 'DSA',
        progress: 55,
        totalHours: 35,
        roadmap: [
          {
            id: '1',
            title: 'Basic Data Structures',
            completed: true,
            topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues']
          },
          {
            id: '2',
            title: 'Advanced Structures',
            completed: false,
            topics: ['Trees', 'Graphs', 'Heaps', 'Hash Tables']
          },
          {
            id: '3',
            title: 'Algorithm Analysis',
            completed: false,
            topics: ['Sorting', 'Searching', 'Dynamic Programming']
          }
        ],
        strengths: ['Implementation skills', 'Logical thinking'],
        weaknesses: ['Time complexity analysis', 'Graph algorithms'],
        testData: [
          { testName: 'Coding Challenge 1', timeSpent: 120, score: 75 },
          { testName: 'Data Structure Test', timeSpent: 90, score: 82 },
          { testName: 'Algorithm Quiz', timeSpent: 45, score: 70 }
        ]
      }
    ]
  },
  {
    id: 'btech-ece',
    name: 'B.Tech ECE',
    subjects: [
      {
        id: 'signals-systems',
        name: 'Signals and Systems',
        displayName: 'Signals & Systems',
        progress: 65,
        totalHours: 30,
        roadmap: [
          {
            id: '1',
            title: 'Signal Analysis',
            completed: true,
            topics: ['Continuous Signals', 'Discrete Signals', 'Transformations']
          },
          {
            id: '2',
            title: 'System Properties',
            completed: false,
            topics: ['Linearity', 'Time Invariance', 'Causality']
          }
        ],
        strengths: ['Signal processing', 'Mathematical analysis'],
        weaknesses: ['Transform techniques', 'System stability'],
        testData: [
          { testName: 'Mid-term', timeSpent: 120, score: 78 },
          { testName: 'Lab Test', timeSpent: 90, score: 85 }
        ]
      },
      {
        id: 'digital-electronics',
        name: 'Digital Electronics',
        displayName: 'Digital Electronics',
        progress: 80,
        totalHours: 25,
        roadmap: [
          {
            id: '1',
            title: 'Logic Gates',
            completed: true,
            topics: ['Boolean Algebra', 'Gate Implementation']
          },
          {
            id: '2',
            title: 'Sequential Circuits',
            completed: true,
            topics: ['Flip-flops', 'Counters', 'Registers']
          }
        ],
        strengths: ['Circuit design', 'Logic optimization'],
        weaknesses: ['Timing analysis', 'Advanced architectures'],
        testData: [
          { testName: 'Circuit Design', timeSpent: 150, score: 88 },
          { testName: 'Theory Test', timeSpent: 60, score: 82 }
        ]
      }
    ]
  },
  {
    id: 'btech-me',
    name: 'B.Tech Mechanical',
    subjects: [
      {
        id: 'thermodynamics',
        name: 'Engineering Thermodynamics',
        displayName: 'Thermodynamics',
        progress: 50,
        totalHours: 28,
        roadmap: [
          {
            id: '1',
            title: 'Basic Concepts',
            completed: true,
            topics: ['System Properties', 'Laws of Thermodynamics']
          },
          {
            id: '2',
            title: 'Cycles & Processes',
            completed: false,
            topics: ['Otto Cycle', 'Diesel Cycle', 'Rankine Cycle']
          }
        ],
        strengths: ['Conceptual understanding', 'Problem solving'],
        weaknesses: ['Complex calculations', 'Cycle analysis'],
        testData: [
          { testName: 'Unit Test', timeSpent: 90, score: 75 },
          { testName: 'Assignment', timeSpent: 120, score: 80 }
        ]
      },
      {
        id: 'mechanics',
        name: 'Engineering Mechanics',
        displayName: 'Mechanics',
        progress: 75,
        totalHours: 22,
        roadmap: [
          {
            id: '1',
            title: 'Statics',
            completed: true,
            topics: ['Force Systems', 'Equilibrium', 'Moments']
          },
          {
            id: '2',
            title: 'Dynamics',
            completed: true,
            topics: ['Kinematics', 'Kinetics', 'Work-Energy']
          }
        ],
        strengths: ['Force analysis', 'Free body diagrams'],
        weaknesses: ['Complex dynamics', 'Vibration analysis'],
        testData: [
          { testName: 'Statics Test', timeSpent: 75, score: 85 },
          { testName: 'Dynamics Test', timeSpent: 90, score: 78 }
        ]
      }
    ]
  }
];

export const lectureRecommendations: { [key: string]: LectureRecommendation[] } = {
  'ml': [
    {
      title: 'Machine Learning Course',
      platform: 'Coursera',
      instructor: 'Andrew Ng',
      url: 'https://coursera.org/learn/machine-learning',
      rating: 4.9
    },
    {
      title: 'Machine Learning Crash Course',
      platform: 'YouTube - FreeCodeCamp',
      instructor: 'FreeCodeCamp',
      url: 'https://youtube.com/watch?v=NWONeJKn6kc',
      rating: 4.8
    },
    {
      title: 'Introduction to Machine Learning',
      platform: 'NPTEL',
      instructor: 'Prof. Balaraman Ravindran',
      url: 'https://nptel.ac.in/courses/106/106/106106139/',
      rating: 4.7
    },
    {
      title: 'Machine Learning A-Z',
      platform: 'Udemy',
      instructor: 'Kirill Eremenko',
      url: 'https://udemy.com/course/machinelearning/',
      rating: 4.6
    },
    {
      title: 'CS229: Machine Learning',
      platform: 'Stanford Online',
      instructor: 'Andrew Ng',
      url: 'http://cs229.stanford.edu/',
      rating: 4.9
    }
  ],
  'dsa': [
    {
      title: 'Data Structures and Algorithms',
      platform: 'YouTube - FreeCodeCamp',
      instructor: 'FreeCodeCamp',
      url: 'https://youtube.com/watch?v=RBSGKlAvoiM',
      rating: 4.8
    },
    {
      title: 'Algorithms Specialization',
      platform: 'Coursera',
      instructor: 'Tim Roughgarden',
      url: 'https://coursera.org/specializations/algorithms',
      rating: 4.7
    },
    {
      title: 'Data Structures',
      platform: 'NPTEL',
      instructor: 'Prof. Naveen Garg',
      url: 'https://nptel.ac.in/courses/106/102/106102064/',
      rating: 4.6
    },
    {
      title: 'Master the Coding Interview',
      platform: 'Udemy',
      instructor: 'Andrei Neagoie',
      url: 'https://udemy.com/course/master-the-coding-interview-data-structures-algorithms/',
      rating: 4.8
    },
    {
      title: 'MIT 6.006 Introduction to Algorithms',
      platform: 'MIT OpenCourseWare',
      instructor: 'MIT Faculty',
      url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/',
      rating: 4.9
    }
  ]
};