import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedTextSize = localStorage.getItem('textSize') || 'medium';
    
    setTheme(savedTheme);
    
    // Apply theme
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1e1e1e';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
    
    // Apply font size
    const fontSizes = {
      small: '14px',
      medium: '16px',
      large: '20px'
    };
    document.body.style.fontSize = fontSizes[savedTextSize as keyof typeof fontSizes];
    
    // Listen for storage changes (when settings are updated)
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      const newTextSize = localStorage.getItem('textSize') || 'medium';
      
      setTheme(newTheme);
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.color = '#ffffff';
      } else {
        document.documentElement.classList.remove('dark');
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
      }
      
      document.body.style.fontSize = fontSizes[newTextSize as keyof typeof fontSizes];
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className={`min-h-screen font-handwritten transition-colors ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        theme={theme}
      />
      
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