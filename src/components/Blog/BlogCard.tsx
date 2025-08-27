import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BlogPost } from './blogData';

interface BlogCardProps {
  post: BlogPost;
  darkMode?: boolean;
  animationDelay?: number; // optional delay for staggered animation
}

const BlogCard: React.FC<BlogCardProps> = ({ post, darkMode = false, animationDelay = 0 }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <article
      className={`group flex flex-col ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full h-full`}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            className={`text-lg md:text-xl font-bold mb-3 line-clamp-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            } group-hover:text-teal-600 transition-colors`}
          >
            {post.title}
          </h3>

          {/* Excerpt */}
          <p
            className={`${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } mb-4 line-clamp-3 leading-relaxed text-sm md:text-base`}
          >
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span
              className={`text-sm font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.id}`}
            className="whitespace-nowrap inline-flex items-center gap-2 bg-teal-600 text-white px-3 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium text-xs md:text-sm group"
          >
            <span>Read More</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
