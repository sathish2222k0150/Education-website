import { useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import test10 from '../../assets/test-10.jpg';
import test7 from '../../assets/test-7.jpg';
import test5 from '../../assets/test-5.png';

const SuccessStories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stories = [
    {
      name: 'KUMARAVEL',
      role: 'Automation Engineer',
      company: 'L.G.Balakrishnan & Bros',
      package: '3 LPA',
      course: 'IIOT–Industry 4.0',
      image: test10,
      testimonial:
        'Kumaravel’s skills in IIOT–Industry 4.0 helped him start as an Automation Engineer at L.G. Balakrishnan and Bros with 3 LPA. Training in Batch No: 2 made this possible. His achievement reflects dedication and technical excellence.',
      rating: 5
    },
    {
      name: 'MURALIDHARAN',
      role: 'Automation Engineer',
      company: 'L.G.Balakrishnan & Bros',
      package: '3 LPA',
      course: 'IIOT–Industry 4.0',
      image: test7,
      testimonial:
        'Muralidharan’s expertise in IIOT–Industry 4.0 helped him secure a role as an Automation Engineer at L.G. Balakrishnan and Bros with 3 LPA. Training in Batch No: 2 supported this success. His journey reflects dedication and technical skill.',
      rating: 5
    },
    {
      name: 'SRI PAUL',
      role: 'Electrician',
      company: 'Isha Foundation',
      package: '2.2 LPA',
      course: 'Multi Skill Technician',
      image: test5,
      testimonial:
        'Sri Paul’s training as a Multi Skill Technician helped him start as an Electrician at Isha Foundation with 2.2 LPA. Batch No: 5 supported this achievement. His success shows hard work and dedication.',
      rating: 5
    }
  ];

  return (
    <section id="success-stories" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Student <span className="text-teal-600">Success Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Real students, real transformations, real success
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white border border-teal-100 hover:border-teal-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-500">{story.course}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-700 text-sm flex-1 mb-4 leading-relaxed">
                "{story.testimonial}"
              </p>

              {/* Job details */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Role:</span>
                  <span className="font-medium text-gray-900">{story.role}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-medium text-gray-900">{story.company}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Package:</span>
                  <span className="font-bold text-orange-500">{story.package}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-2.5 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm font-medium">
                <span>View Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
