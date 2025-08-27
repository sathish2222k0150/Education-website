import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { blogPosts } from './blogData';
import HeroSection from './HeroSection';
import AuthorBanner from './AuthorBanner';
import Sidebar from './Sidebar';
import CTASection from '../About/CTASection';
import blog from '../../assets/blog-1.png';

interface BlogDetailsPageProps {
  darkMode: boolean;
}

const BlogDetailsPage: React.FC<BlogDetailsPageProps> = ({ darkMode }) => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-teal-600 hover:text-teal-700 font-medium underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div data-aos="fade-down">
        <HeroSection
          title="Blog"
          breadcrumb={{
            home: 'Home',
            current: 'Blog Details'
          }}
          backgroundImage={blog}
          darkMode={darkMode}
        />
      </div>

      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} w-full`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8" data-aos="fade-up">
              <div className="overflow-hidden rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
              </div>

              <article className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 md:p-8 shadow-sm`} data-aos="fade-up" data-aos-delay="200">
                <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-teal-600'
                }`}>
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="text-orange-500 font-medium">{post.category}</span>
                </div>

                <div className="prose prose-lg max-w-none mb-6">
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {post.content.introduction}
                  </p>
                </div>

                <blockquote className="bg-gray-50 dark:bg-gray-700 border-l-4 border-orange-500 p-6 rounded-r-lg my-6" data-aos="fade-up" data-aos-delay="300">
                  <p className={`italic text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {post.content.keyConcepts[0]}
                  </p>
                </blockquote>

                <div className="mb-6" data-aos="fade-up" data-aos-delay="400">
                  <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {post.h3}
                  </h2>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {post.p}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <img
                    src={post.image1}
                    alt="Students working together"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  />
                  <img
                    src={post.image2}
                    alt="Student studying"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                  />
                </div>

                {/* Tags and Share Section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-gray-200 dark:border-gray-700 gap-4">
                  <div className="flex items-center gap-3 flex-wrap" data-aos="fade-left" data-aos-delay="700">
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Tags:</span>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3" data-aos="fade-right" data-aos-delay="800">
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Share:</span>
                    <div className="flex gap-3">
                      <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
                        <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
                      </a>
                      <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors">
                        <Facebook size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              <div data-aos="fade-up" data-aos-delay="900">
                <AuthorBanner author={post.author} darkMode={darkMode} />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
              <Sidebar darkMode={darkMode} />
            </aside>
          </div>
        </div>
      </section>

      <div data-aos="fade-up" data-aos-delay="200">
        <CTASection />
      </div>
    </>
  );
};

export default BlogDetailsPage;
