import { useEffect } from 'react';
import {
  FileText,
  Users,
  Target,
  Briefcase,
  CheckCircle,
  Award
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PlacementProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      icon: FileText,
      title: 'Resume Building',
      description:
        'Professional resume crafting with industry-specific keywords and ATS optimization'
    },
    {
      icon: Users,
      title: 'Mock Interviews',
      description:
        'Practice with real interview scenarios and get feedback from industry experts'
    },
    {
      icon: Target,
      title: 'Soft Skills Training',
      description:
        'Communication, presentation, and leadership skills development'
    },
    {
      icon: Briefcase,
      title: 'Job Matching',
      description:
        'AI-powered job matching based on your skills and career preferences'
    },
    {
      icon: CheckCircle,
      title: 'Final Interviews',
      description:
        'Direct interviews with our hiring partners and placement support'
    },
    {
      icon: Award,
      title: 'Offer Letter',
      description:
        'Celebrate your success and start your new career journey'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Placement <span className="text-teal-600">Support Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A structured approach to ensure your success in landing your dream job
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-200 relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-orange-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementProcess;
