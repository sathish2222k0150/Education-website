import {
  Users,
  Building2,
  TrendingUp,
  BadgeCheck,
  Target,
  BookOpen,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CountUp from 'react-countup';


const PlacementStats = () => {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    {
      number: 50,
      suffix: "+",
      label: "Students Placed",
      caption: "Top recruiters: Amazon, TCS, Zoho",
      icon: Users,
      color: 'text-blue-500',
      bg: 'bg-gradient-to-br from-blue-100 to-blue-300',
    },
    {
      number: 100,
      suffix: "+",
      label: "Hiring Partners",
      caption: "Diverse industry tie-ups",
      icon: Building2,
      color: 'text-green-500',
      bg: 'bg-gradient-to-br from-green-100 to-green-300',
    },
    {
      number: 24,
      suffix: " LPA",
      label: "Highest Package",
      caption: "2024 record package",
      icon: TrendingUp,
      color: 'text-orange-500',
      bg: 'bg-gradient-to-br from-orange-100 to-orange-300',
    },
    {
    number: 25,
    suffix: "+",
    label: "Skill Workshops",
    caption: "Hands-on training sessions",
    icon: BookOpen, // or any relevant icon
    color: 'text-purple-500',
    bg: 'bg-gradient-to-br from-purple-100 to-purple-300',
    },
    {
      number: 100,
      suffix: "%",
      label: "Placement Rate",
      caption: "Every eligible student placed",
      icon: BadgeCheck,
      color: 'text-emerald-500',
      bg: 'bg-gradient-to-br from-emerald-100 to-emerald-300',
    },
    {
      number: 8,
      suffix: " LPA",
      label: "Average Package",
      caption: "Consistently above national avg.",
      icon: Target,
      color: 'text-red-500',
      bg: 'bg-gradient-to-br from-red-100 to-red-300',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
           What Sets Us <span className='text-teal-600'>Apart</span> 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 flex flex-col items-center"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform`}
              >
                <stat.icon className="w-7 h-7" />
              </div>

              {/* Main Metric */}
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  <CountUp end={stat.number} duration={2} enableScrollSpy />{stat.suffix}
                </div>
                <div className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-1 font-medium">
                  {stat.label}
                </div>
                {/* Caption */}
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xs mx-auto">
                  {stat.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;