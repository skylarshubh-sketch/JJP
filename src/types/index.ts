export interface Course {
  id: string;
  name: string;
  subjects: Subject[];
}

export interface Subject {
  id: string;
  name: string;
  displayName: string;
  progress: number;
  totalHours: number;
  roadmap: RoadmapItem[];
  strengths: string[];
  weaknesses: string[];
  testData: TestData[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  completed: boolean;
  topics: string[];
}

export interface TestData {
  testName: string;
  timeSpent: number;
  score: number;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  profilePicture?: string;
  totalHoursStudied: number;
  course: string;
}

export interface LectureRecommendation {
  title: string;
  platform: string;
  instructor: string;
  url: string;
  rating: number;
}