import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PlacementSupport = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Support Info Box */}
        <div
          className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-2xl p-8 lg:p-12"
          data-aos="fade-up"
        >
          <div className="text-center">
            <h3
              className="text-3xl font-bold text-orange-500 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Placement Assistance
            </h3>
            <p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our commitment doesn't end with course completion. We provide ongoing support throughout your career journey.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Career Support</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="text-4xl font-bold text-blue-500 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Industry Mentors</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                <div className="text-4xl font-bold text-green-500 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Job Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSupport;
