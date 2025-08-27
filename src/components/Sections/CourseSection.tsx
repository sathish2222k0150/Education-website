import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Star, Clock, Users } from 'lucide-react';
import { coursesData } from '../Data/coursesData';
import { Link } from 'react-router-dom';

export default function CoursesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🧠 Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-area">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of industry-relevant courses, 
            designed by experts and updated regularly to match current market demands.
          </p>
        </div>

        {/* 🎓 Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
          {coursesData.map((course, index) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100} // staggered animation per card
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <Link to={`/courses/${course.slug}`}>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-2 hover:text-teal-600 transition-colors whitespace-nowrap">
                      {course.title}
                    </h3>
                  </Link>
                  {/* 👉 Reduce text size only on tablet */}
                  <p className="text-sm md:text-xs lg:text-sm text-gray-900 mb-4">{course.description}</p>
                </div>

                <div className="mb-2">
                  <span className="block text-gray-200">_______________________________________________</span>
                </div>

                {/* 🌟 Rating & Fee */}
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= Math.round(course.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm font-medium">| {course.rating} Reviews</span>
                  </div>
                  <div className="text-lg font-extrabold text-teal-600 lg:text-3xl">{course.fee}</div>
                </div>

                {/* ⏳ Duration, 👥 Students & Original Fee */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 lg:text-xl" />
                      <span className='lg:text-sm'>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 lg:text-xl" />
                      <span className='lg:text-sm'>{course.students}</span>
                    </div>
                  </div>
                  {course.originalFee && (
                    <div className="text-xs text-gray-500 line-through lg:text-xl">{course.originalFee}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
