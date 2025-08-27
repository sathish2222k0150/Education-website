import { Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { coursesData } from '../Data/coursesData'; // Adjust the path as needed

interface CoursesHeroProps {
  onFilter: (filteredCourses: typeof coursesData) => void;
}

const CoursesHero = ({ onFilter }: CoursesHeroProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [mode, setMode] = useState('Mode');

  const handleFilter = () => {
    let filtered = [...coursesData];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )}

    // Apply category filter
    if (category !== 'All Categories') {
      filtered = filtered.filter(course => course.category === category);
    }

    // Apply mode filter
    if (mode !== 'Mode') {
      filtered = filtered.filter(course => course.mode === mode);
    }

    // Pass filtered results to parent
    onFilter(filtered);
  };

  // Reset all filters
  const handleReset = () => {
    setSearchTerm('');
    setCategory('All Categories');
    setMode('Mode');
    onFilter(coursesData);
  };

  return (
    <section className="pt-20 lg:pt-24 bg-white py-18">
      <div className="bg-transparent rounded-2xl  p-6 max-w-6xl mx-auto">
  <div className="text-center mb-8">
    <h1 className="text-4xl lg:text-6xl font-bold text-orange-500 mb-4">
      Our <span className="text-teal-600">Courses</span>
    </h1>
    <p className="text-l text-gray-600 max-w-3xl mx-auto mb-4">
      Choose from a range of certified skill-based programs designed to advance your career
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
      />
    </div>

    <select 
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>All Categories</option>
      <option>Technology</option>
      <option>Design</option>
      <option>Marketing</option>
      <option>Business</option>
    </select>

    <select 
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
      value={mode}
      onChange={(e) => setMode(e.target.value)}
    >
      <option>Mode</option>
      <option>Online</option>
      <option>Offline</option>
      <option>Hybrid</option>
    </select>

    <div className="flex gap-2">
      <button 
        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center"
        onClick={handleFilter}
      >
        <Filter className="w-4 h-4 mr-2" />
        Apply Filters
      </button>
      <button 
        className="bg-gray-200 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-300 transition-colors"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  </div>
</div>
    </section>
  );
};

export default CoursesHero;