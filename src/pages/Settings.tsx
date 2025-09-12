import React, { useState } from 'react';
import { Sun, Moon, Type, Bell, Smartphone } from 'lucide-react';

const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [textSize, setTextSize] = useState('medium');
  const [notifications, setNotifications] = useState(true);
  const [mobileResponsive, setMobileResponsive] = useState(true);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-handwritten text-black mb-8">Settings</h1>
      
      <div className="space-y-6">
        {/* Theme Settings */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Sun size={24} className="text-yellow-500" />
            <h2 className="text-2xl font-handwritten text-black">Theme</h2>
          </div>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={(e) => setTheme(e.target.value)}
                className="w-4 h-4"
              />
              <span className="font-handwritten text-black">Light</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={(e) => setTheme(e.target.value)}
                className="w-4 h-4"
              />
              <span className="font-handwritten text-black">Dark</span>
            </label>
          </div>
        </div>

        {/* Text Size */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Type size={24} className="text-blue-500" />
            <h2 className="text-2xl font-handwritten text-black">Text Size</h2>
          </div>
          <div className="flex space-x-4">
            {['small', 'medium', 'large'].map((size) => (
              <label key={size} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="textSize"
                  value={size}
                  checked={textSize === size}
                  onChange={(e) => setTextSize(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="font-handwritten text-black capitalize">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bell size={24} className="text-green-500" />
              <h2 className="text-2xl font-handwritten text-black">Notifications</h2>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-11 h-6 rounded-full transition-colors ${
                notifications ? 'bg-black' : 'bg-gray-300'
              }`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  notifications ? 'translate-x-5' : 'translate-x-0'
                } mt-0.5 ml-0.5`}></div>
              </div>
            </label>
          </div>
          <p className="font-handwritten text-gray-600 mt-2">
            Receive notifications about assignments, test reminders, and updates
          </p>
        </div>

        {/* Mobile Responsive */}
        <div className="bg-white border-2 border-black rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Smartphone size={24} className="text-purple-500" />
              <h2 className="text-2xl font-handwritten text-black">Mobile Responsive</h2>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileResponsive}
                onChange={(e) => setMobileResponsive(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-11 h-6 rounded-full transition-colors ${
                mobileResponsive ? 'bg-black' : 'bg-gray-300'
              }`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  mobileResponsive ? 'translate-x-5' : 'translate-x-0'
                } mt-0.5 ml-0.5`}></div>
              </div>
            </label>
          </div>
          <p className="font-handwritten text-gray-600 mt-2">
            Optimize the interface for mobile devices
          </p>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-handwritten text-lg">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;