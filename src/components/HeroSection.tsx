import { useEffect, useState } from 'react';
import { Star, ArrowRight, Users, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import hero1 from '../assets/class.png';
import hero2 from '../assets/cloud1.png';
import hero3 from '../assets/sessions.png';

import men1 from '../assets/men1.png';
import men2 from '../assets/men2.png';
import women1 from '../assets/women1.jpg';
import women2 from '../assets/women2.png';
import women3 from '../assets/women3.png';

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const userImages = [women1, men1, women2, men2, women3];
  const heroImages = [hero1, hero2, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="pt-20 lg:pt-10 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text and content */}
          <div className="space-y-8 order-2 lg:order-none">
            <div className="space-y-4">
              <h1
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                data-aos="fade-up"
              >
                Empowering You with{' '}
                <span className="text-teal-600 inline-block transition-transform duration-300 hover:-translate-y-1">
                  Tech Skills
                </span>
              </h1>

              {/* Image carousel for small devices */}
              <div className="relative block lg:hidden" data-aos="fade-up">
                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <img
                    src={heroImages[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-full h-auto rounded-2xl transition-all duration-700"
                  />
                </div>
              </div>

              <p className="text-xl text-gray-600 max-w-2xl" data-aos="fade-up">
                Join thousands of learners advancing their careers with our expert-led courses.
                Transform your future with industry-relevant skills and personalized mentorship.
              </p>

              {/* Key benefits */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 text-center sm:text-left"
                data-aos="fade-up"
              >
                {[
                  { icon: Users, label: 'Mentorship' },
                  { icon: Briefcase, label: 'Industry Skills' },
                  { icon: GraduationCap, label: 'Placement Assistance' },
                ].map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="bg-teal-100 text-teal-600 p-2 rounded-full">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center lg:justify-start"
              data-aos="fade-up"
            >
              <Link to="/courses">
                <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg flex items-center justify-center group">
                  Explore Courses
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-600 hover:text-white transition-colors font-semibold text-lg">
                  Request Callback
                </button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8" data-aos="fade-up">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {userImages.map((src, index) => (
                    <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                      <img src={src} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9</span>
                  </div>
                  <div>50k+ learners</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <div className="text-teal-600 font-semibold">Trusted by 500+ Companies</div>
                <div>Google • Microsoft • Amazon</div>
              </div>
            </div>
          </div>

          {/* Carousel for large screens */}
          <div className="relative hidden lg:block" data-aos="fade-left">
            <div className="relative z-10 overflow-hidden rounded-2xl w-full h-[460px]">
              <img
                src={heroImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-full object-cover rounded-2xl transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
