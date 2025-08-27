import { useState, useRef, useEffect } from "react";
import { Heart, Coffee, Plane, GraduationCap, Users, Award } from "lucide-react";

interface BenefitItem {
  icon: JSX.Element;
  title: string;
  description: string;
  extra: string;
}

const benefits: BenefitItem[] = [
  { icon: <Heart className="w-6 h-6" />, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage", extra: "Covers dependents, telemedicine, and wellness programs." },
  { icon: <Coffee className="w-6 h-6" />, title: "Flexible Hours", description: "Work-life balance with flexible scheduling", extra: "Core hours from 10am–4pm; work remotely part-time." },
  { icon: <Plane className="w-6 h-6" />, title: "Paid Time Off", description: "25 days PTO plus holidays and sick leave", extra: "Carry over unused PTO to next year up to 5 days." },
  { icon: <GraduationCap className="w-6 h-6" />, title: "Learning Budget", description: "$2000 annual budget for courses and conferences", extra: "Can be used for certifications, online courses, or events." },
  { icon: <Users className="w-6 h-6" />, title: "Team Events", description: "Regular team building and company outings", extra: "Includes off-sites, volunteer days, and fun activities." },
  { icon: <Award className="w-6 h-6" />, title: "Performance Bonus", description: "Quarterly bonuses based on individual and team performance", extra: "Average bonus is 10% of quarterly salary." }
];

export default function Benefit() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activePage, setActivePage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  // Listen for scroll & set active dot
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const totalPages = Math.ceil(container.scrollWidth / container.clientWidth);

      // Calculate page index based on scroll
      const pageIndex = Math.round((scrollLeft / scrollWidth) * (totalPages - 1));
      setActivePage(pageIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Total pages (assuming 3 dots)
  const totalPages = 2;

  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
          <p className="text-xl text-gray-600">We invest in our people with comprehensive benefits and meaningful perks</p>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 w-80"
            >
              <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-6 text-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-3">{benefit.description}</p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-teal-600 font-medium hover:underline"
              >
                {expandedIndex === index ? "Show less" : "Learn more"} →
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 text-gray-500 text-sm mt-2 ${
                  expandedIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p>{benefit.extra}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                activePage === index ? "bg-teal-600" : "bg-gray-300"
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
