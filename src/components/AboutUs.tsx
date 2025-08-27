import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutHero from '../components/About/AboutHero';
import AboutSection from '../components/About/AboutSection';
import OurStory from '../components/About/OurStory';
import CampusTour from '../components/About/CampusTour';
import Testimonials from '../components/About/Testimonials';
import Certifications from '../components/About/Certifications';
import FAQ from '../components/About/FAQ';
import CTASection from '../components/About/CTASection';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <div data-aos="fade-down">
        <AboutHero />
      </div>
      <div data-aos="fade-up">
        <AboutSection />
      </div>
      <div data-aos="fade-right">
        <OurStory />
      </div>
      <div data-aos="fade-left">
        <CampusTour />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <Testimonials />
      </div>
      <div data-aos="zoom-in-up">
        <Certifications />
      </div>
      <div data-aos="fade-down">
        <FAQ />
      </div>
      <div data-aos="fade-up">
        <CTASection />
      </div>
    </>
  );
};

export default AboutUs;
