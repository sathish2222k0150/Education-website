// CourseDetails.tsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CourseDetailsHero from './CourseDetailsHero';
import StickySideCard from './StickySideCard';
import TabbedInfoSection from './TabbedInfoSection';
import CareerOpportunities from './CareerOpportunities';
import HiringPartners from './HiringPartners';
import CourseDetailsFAQ from './CourseDetailsFAQ';
import { getCourseBySlug } from '../Data/coursesData';
import RecommendedCourses from './RecommendedCourses';
import Certificates from './Certificates';
import CourseBenefits from './WhatWeGive';
import WhoCanLearnSection from './WhoCanLearn';
import ApplyFormModal from './ApplyFormModal';

interface CourseDetailsProps {
  slug: string;
  onNavClick: (page: string) => void;
  onBackClick: () => void;
  onApplyClick: () => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ slug, onBackClick }) => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Course not found
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Pass apply callback here */}
        <div data-aos="fade-down">
          <CourseDetailsHero course={course} onBackClick={onBackClick} onApplyNowClick={() => setIsApplyOpen(true)} />
        </div>

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="lg:col-span-3 order-1 lg:order-none" data-aos="fade-up">
              <TabbedInfoSection course={course} />
            </div>
            <div className="lg:col-span-1 order-0 lg:order-none" data-aos="fade-down">
              <StickySideCard course={course} onApplyClick={() => setIsApplyOpen(true)} />
            </div>
          </div>
        </div>

        <div className="space-y-12 md:space-y-12">
          <div data-aos="fade-up">
            <CourseBenefits courseId={course.id} />
          </div>
          <div data-aos="fade-down">
            <WhoCanLearnSection courseId={course.id} />
          </div>
          <div data-aos="fade-up">
            <Certificates />
          </div>
          <div data-aos="fade-down">
            <CareerOpportunities careers={course.careers} />
          </div>
          {course?.id !== undefined && (
            <div data-aos="fade-up">
              <HiringPartners courseId={course.id} />
            </div>
          )}
          <div data-aos="fade-down">
            <CourseDetailsFAQ courseSlug={course.slug} />
          </div>
          <div data-aos="fade-up">
            <RecommendedCourses />
          </div>
        </div>
      </div>

      {/* Show modal when triggered from hero */}
      <ApplyFormModal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </>
  );
};

export default CourseDetails;
