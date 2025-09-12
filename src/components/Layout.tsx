import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-handwritten">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Hover trigger for sidebar */}
      <div 
        className="fixed left-0 top-0 w-4 h-full z-40"
        onMouseEnter={() => setIsSidebarOpen(true)}
      />
      
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;