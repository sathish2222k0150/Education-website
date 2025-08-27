import { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Mail, 
  FileText, 
  AlertCircle,
  Users,
  Shield,
  ArrowRight,
  Calendar,
  Download
} from 'lucide-react';
import Refund from '../../assets/refund.png';

function RefundPolicy() {
  const [activeSection, setActiveSection] = useState('eligibility');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['eligibility', 'non-refundable', 'process', 'timeline', 'special-cases', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-teal-600 via-teal-700 to-orange-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <img
    src={Refund}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
  />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm">
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Refund Policy
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Know your rights and how refunds work
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('eligibility')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center justify-center transform hover:scale-105"
              >
                View Eligibility
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 backdrop-blur-sm transform hover:scale-105"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {[
                    { id: 'eligibility', label: 'Eligibility', icon: CheckCircle2 },
                    { id: 'non-refundable', label: 'Non-Refundable', icon: XCircle },
                    { id: 'process', label: 'Request Process', icon: FileText },
                    { id: 'timeline', label: 'Timeline', icon: Clock },
                    { id: 'special-cases', label: 'Special Cases', icon: AlertCircle },
                    { id: 'contact', label: 'Contact', icon: Mail }
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left flex items-center px-4 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                        activeSection === id
                          ? 'text-teal-700 bg-teal-100 border-l-4 border-teal-600 shadow-sm'
                          : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50 hover:shadow-sm'
                      }`}
                    >
                      <Icon className={`h-4 w-4 mr-3 transition-colors duration-200 ${
                        activeSection === id ? 'text-teal-600' : 'text-gray-400'
                      }`} />
                      <span className="font-medium">{label}</span>
                      {activeSection === id && (
                        <div className="ml-auto w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Eligibility Section */}
            <section id="eligibility" className="scroll-mt-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-100 rounded-lg p-2 mr-4">
                    <CheckCircle2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Eligibility for Refund</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6 hover:bg-green-100 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Eligible for Refund</h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <Clock className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                        <span>Request within 7 days of enrollment</span>
                      </li>
                      <li className="flex items-start">
                        <Users className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                        <span>Course not accessed or first class not attended</span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                        <span>No course materials downloaded</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 rounded-lg p-6 hover:bg-orange-100 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">⚠️ Important Notes</h3>
                    <ul className="space-y-2 text-orange-700">
                      <li>Refund amount may vary based on course type</li>
                      <li>Processing fees may be deducted</li>
                      <li>Special promotional pricing may affect refund eligibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Non-Refundable Section */}
            <section id="non-refundable" className="scroll-mt-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 rounded-lg p-2 mr-4">
                    <XCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Non-Refundable Situations</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200 transform hover:scale-105">
                    <Download className="h-8 w-8 text-red-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-red-800 mb-2">Certificate Downloaded</h3>
                    <p className="text-red-600 text-sm">Once you've downloaded your completion certificate</p>
                  </div>
                  
                  <div className="text-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200 transform hover:scale-105">
                    <Users className="h-8 w-8 text-red-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-red-800 mb-2">Course Accessed</h3>
                    <p className="text-red-600 text-sm">If course is partially or fully accessed</p>
                  </div>
                  
                  <div className="text-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200 transform hover:scale-105">
                    <Calendar className="h-8 w-8 text-red-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-red-800 mb-2">Time Limit Exceeded</h3>
                    <p className="text-red-600 text-sm">After 7 days from enrollment date</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Request Process Section */}
            <section id="process" className="scroll-mt-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-100 rounded-lg p-2 mr-4">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">How to Request a Refund</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
                    <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Send Email Request</h3>
                      <p className="text-gray-600 mb-2">Send an email to our refund support team with your enrollment ID</p>
                      <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200">
                        <code className="text-sm text-gray-800">refunds@eduplatform.com</code>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
                    <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Include Required Information</h3>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Your full name and email address</li>
                        <li>• Course enrollment ID</li>
                        <li>• Reason for refund request</li>
                        <li>• Original payment method details</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
                    <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Wait for Review</h3>
                      <p className="text-gray-600">Our team will review your request within 3–5 working days and send you a confirmation email</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline Section */}
            <section id="timeline" className="scroll-mt-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-lg p-2 mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Refund Timeline</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Time</h3>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                        <Clock className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-blue-800">7–10 business days for processing</span>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                        <CreditCard className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-green-800">Refund to original payment method</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Email confirmation once approved</li>
                      <li>• Automatic refund to original card/account</li>
                      <li>• Additional 2-5 days for bank processing</li>
                      <li>• Email notification when refund is complete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Special Cases Section */}
            <section id="special-cases" className="scroll-mt-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-100 rounded-lg p-2 mr-4">
                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Special Cases</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-yellow-200 rounded-lg p-6 hover:border-yellow-300 hover:shadow-sm transition-all duration-200">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-3">🆓 Free Courses</h3>
                    <p className="text-yellow-700 mb-3">Free courses are generally non-refundable as there's no payment involved.</p>
                    <p className="text-sm text-yellow-600">However, you can contact support for any issues with course access or content.</p>
                  </div>
                  
                  <div className="border border-orange-200 rounded-lg p-6 hover:border-orange-300 hover:shadow-sm transition-all duration-200">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">🏷️ Discounted Courses</h3>
                    <p className="text-orange-700 mb-3">Courses purchased with special offers or discounts may have limited refund eligibility.</p>
                    <p className="text-sm text-orange-600">Refund amount may be calculated based on the actual amount paid.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-8">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl text-white p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 rounded-lg p-2 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Refund Support</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3" />
                        <span>refunds@eduplatform.com</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3" />
                        <span>Response within 24 hours</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                    <p className="text-teal-100 mb-4">
                      Our support team is here to help you with any questions about our refund policy or to assist with your refund request.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-xl font-bold">EduPlatform</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 EduPlatform. All rights reserved. | Last updated: January 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RefundPolicy;