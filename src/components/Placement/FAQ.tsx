import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
    "question": "What kind of companies hire KG PATH graduates?",
    "answer": "Our alumni are placed in top tech companies, startups, and MNCs such as Infosys, TCS, Cognizant, Zoho, and many product-based companies."
  },
  {
    "question": "Do you provide interview preparation and resume help?",
    "answer": "Yes. We offer dedicated placement training, mock interviews, resume-building workshops, and LinkedIn optimization."
  },
  {
    "question": "What is the success rate of student placements?",
    "answer": "Over 85% of eligible KG PATH students secure jobs within 3 months of course completion."
  },
  {
    "question": "Are internships included as part of the curriculum?",
    "answer": "Yes, some courses include internship opportunities or capstone projects that simulate real internship experiences."
  },
  {
    "question": "Do you offer placement assistance for international students?",
    "answer": "While our main placement network is in India, we do offer guidance and referrals for international job applications and remote roles."
  }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently <span className='text-teal-600'>Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our placement program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="px-8 pb-6 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <Link to={"/contact"}>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
            Contact Support
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;