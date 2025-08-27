import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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


export default function PlacementSection() {
  const partners = [
    microsoft, ibm, infosys, accenture, cognizant, google, hcl, tcs, zoho, salesforce, 
  ];

  // Duplicate the array for seamless scroll effect
  const scrollingPartners = [...partners, ...partners];

  return (
    <section id="placement" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Placement<span className="text-teal-600"> Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our graduates join leading companies worldwide. We maintain strong relationships 
            with top employers to ensure the best career opportunities for our students.
          </p>
        </div>

        {/* First row: scroll right to left */}
        <div className="relative overflow-hidden mb-12">
          <div className="animate-scroll-right flex whitespace-nowrap gap-6">
            {scrollingPartners.map((partner, index) => (
                      <div
            key={`row1-${index}`}
            className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md flex items-center justify-center h-32 min-w-[170px]"
          >
            <img
              src={partner}
              alt="Partner Logo"
              className="max-h-[180px] object-contain"
            />
          </div>
            ))}
          </div>
        </div>

        {/* Second row: scroll left to right */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll-left flex whitespace-nowrap gap-6">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md flex items-center justify-center h-32 min-w-[170px]"
              >
                <img
                  src={partner}
                  alt="Partner Logo"
                  className="max-h-[180px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button aligned to bottom-left */}
        <div className="flex justify-center mt-8">
          <Link to="/placement">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-base flex items-center group">
             Know more about Placements
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
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
}
