import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroBg from '../../assets/blog.png';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumb?: {
    home: string;
    current: string;
  };
  darkMode?: boolean;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  breadcrumb,
  className = '',
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className={`relative h-96 lg:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage || HeroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto space-y-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            data-aos="fade-up"
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-200 opacity-90"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {subtitle}
            </p>
          )}

          {breadcrumb && (
            <nav
              className="flex items-center justify-center space-x-2 text-sm text-gray-300 opacity-80"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                to="/"
                className="hover:text-white underline transition-colors duration-200"
              >
                {breadcrumb.home}
              </Link>
              <span>/</span>
              <span className="font-medium">{breadcrumb.current}</span>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
