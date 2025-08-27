import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './HeroSection';
import BlogList from './BlogList';
import { blogPosts } from './blogData';

interface BlogPageProps {
  darkMode: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div data-aos="fade-down">
        <HeroSection
          title="Our Blog"
          breadcrumb={{
            home: 'Home',
            current: 'Blog'
          }}
          darkMode={darkMode}
        />
      </div>

      <div data-aos="fade-up">
        <BlogList posts={blogPosts} darkMode={darkMode} />
      </div>
    </>
  );
};

export default BlogPage;
