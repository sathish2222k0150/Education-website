import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Scale, Shield, FileText, Mail, Eye, Users, Lock, Copyright, AlertTriangle, Phone } from 'lucide-react';
import Term from '../../assets/Terms.jpg';
interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

function Terms() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['introduction']));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const sections: Section[] = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            These Terms of Use constitute a binding agreement between you and our company regarding your use of our platform and services. 
            By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your acceptance of these terms occurs automatically upon your first use of our platform. These terms work in conjunction with our 
            <a href="#privacy" className="text-teal-600 hover:text-teal-700 underline mx-1">Privacy Policy</a> 
            and 
            <a href="#refund" className="text-teal-600 hover:text-teal-700 underline mx-1">Refund Policy</a>
            to form a complete agreement.
          </p>
        </div>
      )
    },
    {
      id: 'definitions',
      title: 'Definitions',
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">"User" or "You"</h4>
            <p className="text-gray-700">Refers to any individual or entity accessing our platform or services.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">"Service" or "Platform"</h4>
            <p className="text-gray-700">Refers to our educational platform, courses, content, and related services.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">"We," "Our," or "Company"</h4>
            <p className="text-gray-700">Refers to our organization and its authorized representatives.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">"Content"</h4>
            <p className="text-gray-700">Includes all materials, courses, videos, text, graphics, and other intellectual property on our platform.</p>
          </div>
        </div>
      )
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-2">Prohibited Activities</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>No misuse of the platform for illegal activities or harassment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Prohibition of spamming, phishing, or fraudulent behavior</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>No unauthorized access to other users' accounts or data</span>
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-teal-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-2">Required Conduct</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Provide accurate and truthful information during registration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Maintain the confidentiality of your account credentials</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-teal-500 mt-1">•</span>
                <span>Respect other users and maintain professional conduct</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'account-terms',
      title: 'Account Terms',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Lock className="w-5 h-5 mr-2 text-teal-600" />
              Account Creation & Security
            </h4>
            <p className="text-gray-700 mb-3">
              You are responsible for maintaining the security of your account and all activities that occur under your account.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Use strong, unique passwords</li>
              <li>• Do not share your account with others</li>
              <li>• Notify us immediately of any unauthorized access</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Account Termination</h4>
            <p className="text-red-700">
              We reserve the right to suspend or terminate accounts that violate these terms. 
              You may also terminate your account at any time through your account settings.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'course-access',
      title: 'Course Access & Usage',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Access Rights
              </h4>
              <ul className="space-y-1 text-green-700 text-sm">
                <li>• Lifetime access to purchased courses</li>
                <li>• Stream content on approved devices</li>
                <li>• Download materials for offline study</li>
                <li>• Access to course updates and additions</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Usage Restrictions
              </h4>
              <ul className="space-y-1 text-red-700 text-sm">
                <li>• No sharing or reselling of content</li>
                <li>• Prohibited copying or redistribution</li>
                <li>• No commercial use without permission</li>
                <li>• Limited to personal educational use</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-orange-300 p-6 rounded-lg">
            <Copyright className="w-8 h-8 text-orange-500 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-3">Our Intellectual Property</h4>
            <p className="text-gray-700 mb-3">
              All content, including but not limited to courses, videos, text, graphics, logos, and software, 
              is the exclusive property of our company and is protected by intellectual property laws.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-orange-500">
              <p className="text-gray-700 font-medium">
                Any unauthorized use, reproduction, or distribution of our content may result in severe 
                legal consequences including copyright infringement claims.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers & Limitation of Liability',
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mb-3" />
            <h4 className="font-semibold text-yellow-800 mb-3">Important Disclaimers</h4>
            <div className="space-y-3 text-yellow-700">
              <p>
                <strong>Results May Vary:</strong> Individual results from our courses may vary based on personal 
                effort, prior experience, and market conditions.
              </p>
              <p>
                <strong>No Guarantees:</strong> We do not guarantee specific outcomes, job placements, 
                salary increases, or career advancement.
              </p>
              <p>
                <strong>Educational Purpose:</strong> Our content is for educational purposes only and 
                should not be considered as professional advice.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">
              Our liability is limited to the amount you paid for the specific service. 
              We are not liable for indirect, incidental, or consequential damages.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600 mb-3" />
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. When we make significant changes, 
              we will notify users through the following methods:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <h5 className="font-medium text-gray-900">Email Notification</h5>
                <p className="text-sm text-gray-600">Sent to your registered email address</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <h5 className="font-medium text-gray-900">Platform Notice</h5>
                <p className="text-sm text-gray-600">Prominent display on our website</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm">
              Continued use of our services after modifications constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <Scale className="w-6 h-6 text-purple-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-3">Jurisdiction</h4>
            <p className="text-gray-700 mb-3">
              These Terms of Use are governed by and construed in accordance with the laws of India, 
              specifically under the jurisdiction of Tamil Nadu state courts.
            </p>
            <div className="bg-white p-4 rounded border">
              <p className="text-gray-600 text-sm">
                Any disputes arising from these terms will be resolved through the appropriate legal 
                channels in Tamil Nadu, India. Both parties consent to the exclusive jurisdiction of these courts.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Get in Touch</h4>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Use or need clarification on any points, 
              please don't hesitate to contact us:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                <Mail className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="font-medium text-gray-900">Email Support</p>
                  <a href="mailto:legal@company.com" className="text-teal-600 hover:text-teal-700 text-sm">
                    legal@company.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                <Phone className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone Support</p>
                  <a href="tel:+911234567890" className="text-orange-600 hover:text-orange-700 text-sm">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'definitions', title: 'Definitions', icon: Users },
    { id: 'user-responsibilities', title: 'User Responsibilities', icon: Shield },
    { id: 'account-terms', title: 'Account Terms', icon: Lock },
    { id: 'course-access', title: 'Course Access', icon: Eye },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: Copyright },
    { id: 'disclaimers', title: 'Disclaimers', icon: AlertTriangle },
    { id: 'modifications', title: 'Modifications', icon: FileText },
    { id: 'governing-law', title: 'Governing Law', icon: Scale },
    { id: 'contact', title: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-teal-600 via-teal-700 to-teal-600 flex items-center justify-center overflow-hidden">

         <img
    src={Term}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
  />
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <Scale className="w-16 h-16 mx-auto mb-6 text-orange-300" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              Terms of Use
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
              Please read these terms carefully before using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('introduction')}
                className="bg-white text-teal-700 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Read Terms
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-12 gap-8">
        {/* Table of Contents - Sticky Sidebar */}
        <aside className={`lg:w-80 ${isScrolled ? 'lg:sticky lg:top-8' : ''} h-fit`}>
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 lg:sticky lg:top-8">
            <h3 className="text-lg font-serif font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-teal-600" />
              Table of Contents
            </h3>
            <nav className="space-y-2">
              {tableOfContents.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                      activeSection === item.id
                        ? 'bg-teal-100 text-teal-700 border-l-4 border-teal-500'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 lg:pl-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <h2 className="text-2xl font-serif font-bold text-gray-900">
                      {section.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500 lg:hidden">
                        {expandedSections.has(section.id) ? 'Collapse' : 'Expand'}
                      </span>
                      <div className={`transition-transform duration-300 lg:hidden ${expandedSections.has(section.id) ? 'rotate-90' : ''}`}>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${
                    expandedSections.has(section.id) || window.innerWidth >= 1024 
                      ? 'max-h-none opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-0 border-t border-gray-100">
                      {section.content}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-8 h-8 text-teal-400 mr-3" />
            <span className="text-xl font-serif font-bold">Terms of Use</span>
          </div>
          <p className="text-gray-400 mb-4">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#refund" className="hover:text-teal-400 transition-colors">Refund Policy</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .font-serif {
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default Terms;