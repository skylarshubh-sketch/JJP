import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BarChart3, 
  BookOpen, 
  FileText, 
  TestTube, 
  Lightbulb, 
  Award, 
  Settings, 
  User,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Assignments', path: '/assignments' },
    { icon: BookOpen, label: 'Library', path: '/library' },
    { icon: TestTube, label: 'Test Series', path: '/test-series' },
    { icon: Lightbulb, label: 'Lecture Suggestions', path: '/lectures' },
    { icon: Award, label: 'Scholarships & Rewards', path: '/scholarships' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-white border-r-2 border-black transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-handwritten text-black">Kaagaz</h1>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors font-handwritten text-lg ${
                    isActive 
                      ? 'bg-black text-white' 
                      : 'text-black hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;