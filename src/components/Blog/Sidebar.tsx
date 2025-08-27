import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { blogPosts, categories, tags } from './blogData';

interface SidebarProps {
  darkMode?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const popularPosts = blogPosts.slice(0, 3);

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
        <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Search
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search By Keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-4 pr-12 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
            } focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors`}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600 transition-colors">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Popular Posts */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Popular Posts
          <div className="w-12 h-1 bg-orange-500 mt-2"></div>
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <div key={post.id} className="flex space-x-3 group cursor-pointer">
              <img
                src={post.image}
                alt={post.title}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-orange-500 font-medium mb-1">{post.date}</p>
                <h4 className={`text-sm font-medium line-clamp-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                } group-hover:text-teal-600 transition-colors`}>
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Categories */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Popular Category
          <div className="w-12 h-1 bg-orange-500 mt-2"></div>
        </h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className={`${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              } group-hover:text-teal-600 transition-colors`}>
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
        <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Popular Tags
          <div className="w-12 h-1 bg-orange-500 mt-2"></div>
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm border cursor-pointer transition-colors ${
                darkMode
                  ? 'border-gray-600 text-gray-300 hover:border-teal-500 hover:text-teal-400'
                  : 'border-gray-200 text-gray-600 hover:border-teal-500 hover:text-teal-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;