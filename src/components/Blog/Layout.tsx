import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, toggleDarkMode }) => {
  const location = useLocation();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-teal-600" />
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                EduBlog
              </span>
            </Link>
            
            <nav className="flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-teal-600' 
                    : darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className={`font-medium transition-colors ${
                  location.pathname === '/blog' 
                    ? 'text-teal-600' 
                    : darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                Blog
              </Link>
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-900 text-gray-400'} py-12 mt-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-teal-500" />
              <span className="text-xl font-bold text-white">EduBlog</span>
            </div>
            <p className="text-sm">
              © 2024 EduBlog. All rights reserved. Empowering education through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;