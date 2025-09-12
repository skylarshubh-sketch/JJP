import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SubjectDetail from './pages/SubjectDetail';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Assignments from './pages/Assignments';
import Library from './pages/Library';
import TestSeries from './pages/TestSeries';
import LectureSuggestions from './pages/LectureSuggestions';
import Scholarships from './pages/Scholarships';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="subject/:subjectId" element={<SubjectDetail />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="library" element={<Library />} />
          <Route path="test-series" element={<TestSeries />} />
          <Route path="lectures" element={<LectureSuggestions />} />
          <Route path="scholarships" element={<Scholarships />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;