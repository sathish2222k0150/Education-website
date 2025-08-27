import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CoursesHero from './CoursesHero';
import CourseGrid from './CourseGrid';
import CoursesCallToAction from './CoursesCallToAction';
import FAQ from './FAQ';
import { coursesData } from '../Data/coursesData';

interface CoursesListProps {
  onCourseClick: (slug: string) => void;
}

const CoursesList: React.FC<CoursesListProps> = ({ onCourseClick }) => {
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handleFilter = (filteredCourses: typeof coursesData) => {
    setFilteredCourses(filteredCourses);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: false }); // animate every time section enters view
  }, []);

  return (
    <div className="min-h-screen bg-white space-y-16">
      {/* Hero section with fade-down */}
      <div data-aos="fade-down">
        <CoursesHero onFilter={handleFilter} />
      </div>

      {/* Course grid with zoom-in */}
      <div data-aos="zoom-in">
        <CourseGrid
          onCourseClick={onCourseClick}
          courses={filteredCourses}
        />
      </div>

      {/* FAQ with fade-up */}
      <div data-aos="fade-up">
        <FAQ />
      </div>

      {/* CTA with fade-up and small delay */}
      <div data-aos="fade-up" data-aos-delay="100">
        <CoursesCallToAction />
      </div>
    </div>
  );
};

export default CoursesList;
