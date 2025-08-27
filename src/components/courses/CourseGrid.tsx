import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Course } from '../Data/coursesData';

interface CourseGridProps {
  onCourseClick: (getCourseBySlug: string) => void;
  courses: Course[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {courses.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700">
              No courses found matching your criteria
            </h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {course.category}
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <Link to={`/courses/${course.slug}`}>
                      <h3 className="text-xl font-extrabold text-gray-900 mb-2 hover:text-teal-600 transition-colors whitespace-nowrap">
                        {course.title}
                      </h3>
                    </Link>
                    {/* Reduce text size only on tablet */}
                    <p className="text-sm md:text-xs lg:text-sm text-gray-900 mb-4">{course.description}</p>
                  </div>

                  <div className="mb-2">
                    <span className="block text-gray-200">_______________________________________________</span>
                  </div>

                  {/* Ratings and Fee */}
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

                  {/* Duration + Students and Original Fee */}
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 lg:text-xl" />
                        <span className="lg:text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 lg:text-xl" />
                        <span className="lg:text-sm">{course.students}</span>
                      </div>
                    </div>
                    {course.originalFee && (
                      <div className="text-xs text-gray-500 line-through lg:text-xl">
                        {course.originalFee}
                      </div>
                    )}
                  </div>

                  {/* You can add View Details button here if needed */}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            Load More Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
