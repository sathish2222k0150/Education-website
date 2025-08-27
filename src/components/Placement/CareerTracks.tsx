import { useEffect, useState } from 'react';
import { Code, Database, Palette } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ApplyFormModal from '../courses/ApplyFormModal';

const CareerTracks = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const tracks = [
    {
      icon: Code,
      title: 'Software Engineer',
      description: 'Build scalable applications and work with cutting-edge technologies',
      avgPackage: '₹8-15 LPA',
      skills: ['JavaScript', 'React', 'Node.js', 'Python'],
      companies: ['Google', 'Amazon', 'Microsoft']
    },
    {
      icon: Database,
      title: 'Data Analyst',
      description: 'Turn data into actionable insights for business decisions',
      avgPackage: '₹6-12 LPA',
      skills: ['SQL', 'Python', 'Tableau', 'Excel'],
      companies: ['Flipkart', 'Zomato', 'Paytm']
    },
    {
      icon: Palette,
      title: 'UI/UX Designer',
      description: 'Create beautiful and intuitive user experiences',
      avgPackage: '₹5-10 LPA',
      skills: ['Figma', 'Adobe XD', 'Sketch'],
      companies: ['Swiggy', 'Ola', 'PhonePe']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Career <span className="text-teal-600">Tracks</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your path and we'll guide you to success
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                <track.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{track.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{track.description}</p>

              {/* Package */}
              <div className="bg-gray-50 rounded-xl p-3 mb-4">
                <div className="text-xs text-gray-600 mb-1">Average Package</div>
                <div className="text-base font-bold text-gray-900">{track.avgPackage}</div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="text-xs font-semibold text-gray-700 mb-2">Key Skills</div>
                <div className="flex flex-wrap gap-2">
                  {track.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Companies */}
              <div className="mb-5">
                <div className="text-xs font-semibold text-gray-700 mb-1">Top Hiring Companies</div>
                <div className="text-xs text-gray-600">{track.companies.join(', ')}</div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:from-teal-600 hover:to-teal-700 transition-colors"
              >
                Explore Track
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ApplyFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default CareerTracks;
