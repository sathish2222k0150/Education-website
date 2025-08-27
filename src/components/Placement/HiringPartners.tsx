import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import microsoft from '../../assets/microsoft.png';
import ibm from '../../assets/IBM.png';
import infosys from '../../assets/infosys.png';
import accenture from '../../assets/accenture-6.png';
import cognizant from '../../assets/cognizants-1.png';
import google from '../../assets/google.png';
import hcl from '../../assets/HCL.png';
import tcs from '../../assets/tcs.png';
import zoho from '../../assets/zoho-1.png';
import salesforce from '../../assets/salesforce-2.png';

const HiringPartners = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const partners = [
    microsoft, ibm, infosys, accenture, cognizant,
    google, hcl, tcs, zoho, salesforce,
  ];

  const scrollingPartners = [...partners, ...partners]; // Duplicate for seamless scroll

  return (
    <section id="hiring-partners" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading companies trust us to provide skilled talent for their teams
          </p>
        </div>

        {/* First row: scroll left to right */}
        <div className="relative overflow-hidden mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="animate-scroll-right flex whitespace-nowrap gap-6">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="bg-white rounded-xl p-4 sm:p-6 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md flex items-center justify-center h-24 sm:h-32 min-w-[140px] sm:min-w-[170px]"
              >
                <img
                  src={partner}
                  alt="Partner Logo"
                  className="max-h-[100px] sm:max-h-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row: scroll right to left */}
        <div className="relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <div className="animate-scroll-left flex whitespace-nowrap gap-6">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="bg-white rounded-xl p-4 sm:p-6 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md flex items-center justify-center h-24 sm:h-32 min-w-[140px] sm:min-w-[170px]"
              >
                <img
                  src={partner}
                  alt="Partner Logo"
                  className="max-h-[100px] sm:max-h-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation styles */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HiringPartners;
