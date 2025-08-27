import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import QualityEducation from '../../assets/Group 795.png';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* 🖼 Image with animation */}
          <div className="relative" data-aos="fade-up">
            <img 
              src={QualityEducation} 
              alt="Students learning together" 
              className="rounded-2xl md:w-[450px] lg:w-[580px] lg:h-[580px] w-[400px] h-[450px] object-cover"
            />
          </div>

          {/* 📄 Content with staggered animations */}
          <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
            <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-4xl font-bold text-gray-900">
                Where Ambition
                <span className="text-teal-600"> Meets Opportunity in Tech</span>
              </h2>
              <p className="text-lg text-gray-600">
                At KG PATH, we empower ambitious learners with top-tier digital skills—from Full-Stack Development to Cloud & AI—to break into the tech industry with confidence. Our journey is rooted in real mentorship, hands-on projects, and outcomes that matter.
              </p>
            </div>

            {/* 📊 Key stats with zoom animations */}
            <div className="grid grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center" data-aos="zoom-in" data-aos-delay="500">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Learners Equipped for Tech Careers</div>
              </div>
              <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
                <div className="text-3xl font-bold text-teal-600">5+</div>
                <div className="text-sm text-gray-600">Years of Hands-On Teaching Excellence</div>
              </div>
              <div className="text-center" data-aos="zoom-in" data-aos-delay="700">
                <div className="text-3xl font-bold text-teal-600">100%</div>
                <div className="text-sm text-gray-600">Success Rate in Placements & Projects</div>
              </div>
            </div>

            {/* ✨ Call-to-action button with animation */}
            <div data-aos="fade-up" data-aos-delay="800">
              <a 
                href="#programs" 
                className="inline-block px-6 py-3 bg-teal-600 text-white rounded-xl shadow hover:bg-teal-700 transition"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
