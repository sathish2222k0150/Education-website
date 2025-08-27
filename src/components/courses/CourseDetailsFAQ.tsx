import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { coursesData } from '../Data/coursesData';

interface CourseDetailsFAQProps {
  courseSlug: string;
}

const CourseDetailsFAQ = ({ courseSlug }: CourseDetailsFAQProps) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Find the course based on the slug
  const course = coursesData.find(c => c.slug === courseSlug);

  // Guard if course not found or has no FAQs
  if (!course || !course.faqs || course.faqs.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">No FAQs available for this course.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions about this course</p>
        </div>

        <div className="space-y-4">
          {course.faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {expandedFaq === index ? (
                  <Minus className="w-5 h-5 text-orange-600" />
                ) : (
                  <Plus className="w-5 h-5 text-orange-600" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsFAQ;
