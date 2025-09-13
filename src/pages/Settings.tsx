import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { Sun, Moon, Type, Bell, Smartphone } from 'lucide-react';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [textSize, setTextSize] = useState(() => {
    return localStorage.getItem('textSize') || 'medium';
  });
  const [notifications, setNotifications] = useState(true);
  const [mobileResponsive, setMobileResponsive] = useState(true);

  // Apply theme and font size on component mount and when they change
  useEffect(() => {
    // Apply theme
    if (theme === 'dark') {
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
    document.body.style.fontSize = fontSizes[textSize as keyof typeof fontSizes];
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('textSize', textSize);
  }, [theme, textSize]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  const handleTextSizeChange = (newSize: string) => {
    setTextSize(newSize);
  };

  return (
    <div className={`max-w-4xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      <h1 className={`text-4xl font-handwritten mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Settings</h1>
      
      <div className="space-y-6">
        {/* Theme Settings */}
        <div className={`border-2 rounded-lg p-6 ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-white border-black'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            {theme === 'dark' ? (
              <Moon size={24} className="text-blue-400" />
            ) : (
              <Sun size={24} className="text-yellow-500" />
            )}
            <h2 className={`text-2xl font-handwritten ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Theme</h2>
          </div>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={(e) => handleThemeChange(e.target.value)}
                className="w-4 h-4"
              />
              <span className={`font-handwritten ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Light</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={(e) => handleThemeChange(e.target.value)}
                className="w-4 h-4"
              />
              <span className={`font-handwritten ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Dark</span>
            </label>
          </div>
        </div>

        {/* Text Size */}
        <div className={`border-2 rounded-lg p-6 ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-white border-black'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            <Type size={24} className="text-blue-500" />
            <h2 className={`text-2xl font-handwritten ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Text Size</h2>
          </div>
          <div className="flex space-x-4">
            {['small', 'medium', 'large'].map((size) => (
              <label key={size} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="textSize"
                  value={size}
                  checked={textSize === size}
                  onChange={(e) => handleTextSizeChange(e.target.value)}
                  className="w-4 h-4"
                />
                <span className={`font-handwritten capitalize ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className={`border-2 rounded-lg p-6 ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-white border-black'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell size={24} className="text-green-500" />
              <h2 className={`text-2xl font-handwritten ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Notifications</h2>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-11 h-6 rounded-full transition-colors ${
                notifications 
                  ? (theme === 'dark' ? 'bg-white' : 'bg-black')
                  : 'bg-gray-300'
              }`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  notifications ? 'translate-x-5' : 'translate-x-0'
                } mt-0.5 ml-0.5 ${
                  notifications && theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}></div>
              </div>
            </label>
          </div>
          <p className={`font-handwritten mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Receive notifications about assignments, test reminders, and updates
          </p>
        </div>

        {/* Mobile Responsive */}
        <div className={`border-2 rounded-lg p-6 ${
          theme === 'dark' 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-white border-black'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Smartphone size={24} className="text-purple-500" />
              <h2 className={`text-2xl font-handwritten ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Mobile Responsive</h2>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileResponsive}
                onChange={(e) => setMobileResponsive(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-11 h-6 rounded-full transition-colors ${
                mobileResponsive 
                  ? (theme === 'dark' ? 'bg-white' : 'bg-black')
                  : 'bg-gray-300'
              }`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  mobileResponsive ? 'translate-x-5' : 'translate-x-0'
                } mt-0.5 ml-0.5 ${
                  mobileResponsive && theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}></div>
              </div>
            </label>
          </div>
          <p className={`font-handwritten mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Optimize the interface for mobile devices
          </p>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className={`px-6 py-3 rounded-lg transition-colors font-handwritten text-lg ${
            theme === 'dark'
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-black text-white hover:bg-gray-800'
          }`}>
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;