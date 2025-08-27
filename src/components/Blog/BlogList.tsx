import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { BlogPost } from './blogData';
import CTASection from '../About/CTASection';

interface BlogListProps {
  posts: BlogPost[];
  darkMode?: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ posts, darkMode = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <section className="py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Latest Blog Posts
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Discover insights, tips, and stories from our educational community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} darkMode={darkMode} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border text-sm font-medium disabled:opacity-50 transition-colors"
            >
              &lt;
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={`px-3 py-1 rounded border text-sm font-medium transition-colors ${
                  currentPage === index + 1
                    ? 'bg-teal-600 text-white'
                    : darkMode ? 'text-white border-white' : 'text-gray-800 border-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border text-sm font-medium disabled:opacity-50 transition-colors"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default BlogList;
