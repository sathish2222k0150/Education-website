import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ } from '../About/type';


const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
    "question": "What are the prerequisites for enrolling in a course?",
    "answer": "Most of our courses are beginner-friendly. However, having a basic understanding of programming concepts can be helpful, especially for AI or Cloud programs."
  },
  {
    "question": "Can I switch between Full-Stack, AI, and Cloud programs later?",
    "answer": "Yes, we offer flexible learning paths. If you start with one track and wish to switch, our team will help you transition smoothly."
  },
  {
    "question": "Do your courses include hands-on projects and assignments?",
    "answer": "Absolutely. Each course includes real-world projects, coding challenges, and case studies to help you apply what you learn."
  },
  {
    "question": "How long does each course take to complete?",
    "answer": "Our programs typically range from 3 to 6 months, depending on the course intensity and your chosen learning pace."
  },
  {
    "question": "Are the courses suitable for working professionals?",
    "answer": "Yes. We offer evening and weekend classes specifically designed to accommodate working professionals."
  }
    // ... other FAQs
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about KGPath and our programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {expandedFaq === index ? (
                  <Minus className="w-5 h-5 text-teal-600" />
                ) : (
                  <Plus className="w-5 h-5 text-teal-600" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;