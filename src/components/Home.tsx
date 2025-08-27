import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from '../components/HeroSection';
import About from '../components/Sections/About';
import CoursesSection from '../components/Sections/CourseSection';
import WhyChooseUsSection from '../components/Sections/WhyChooseUsSection';
import TestimonialsSection from '../components/Sections/TestimonalSection';
import PlacementSection from '../components/Sections/PlacementSection';
import FaqSection from '../components/Sections/FaqSection';
import BlogSection from '../components/Sections/BlogSection';
import NewsletterSection from '../components/Sections/NewsletterSection';
import WelcomePopup from './WelcomePopup';

const Home = ({ onApplyClick }: { onApplyClick: () => void }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 🔥 allow animation every time section enters viewport
    });
  }, []);

  return (
    <>
    <WelcomePopup />
      <div data-aos="fade-up">
        <HeroSection />
      </div>
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <WhyChooseUsSection />
      </div>
      <div data-aos="fade-up">
        <CoursesSection />
      </div>
      <div data-aos="fade-up">
        <PlacementSection />
      </div>
      <div data-aos="fade-up">
        <TestimonialsSection />
      </div>
      <div data-aos="fade-up">
        <FaqSection onApplyClick={onApplyClick} />
      </div>
      <div data-aos="fade-up">
        <BlogSection />
      </div>
      <div data-aos="fade-up">
        <NewsletterSection />
      </div>
    </>
  );
};

export default Home;
