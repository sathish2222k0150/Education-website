import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Shield, Lock, Eye, Database, Users, Globe, FileText, Mail, Settings, UserCheck, AlertTriangle, Calendar, Phone } from 'lucide-react';
import Privacy from '../../assets/Privacy.png';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

function PrivacyPolicy() {
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
            At our company, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, store, and protect your data when you use our educational platform and services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This policy applies to all our services including our website, mobile applications, customer relationship management systems, 
            and any other platforms or services we provide. By using our services, you consent to the data practices described in this policy.
          </p>
          <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
            <p className="text-teal-800 font-medium">
              <Shield className="w-4 h-4 inline mr-2" />
              Your trust is important to us, and we are committed to transparency in how we handle your personal information.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'information-collect',
      title: 'Information We Collect',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                <UserCheck className="w-5 h-5 mr-2" />
                Personal Information
              </h4>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• Full name and contact details</li>
                <li>• Email address and phone number</li>
                <li>• Educational background and qualifications</li>
                <li>• Professional experience and skills</li>
                <li>• Payment and billing information</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Usage Data
              </h4>
              <ul className="space-y-2 text-purple-700 text-sm">
                <li>• Pages visited and time spent</li>
                <li>• Course progress and completion rates</li>
                <li>• Device information and browser type</li>
                <li>• IP address and location data</li>
                <li>• Search queries and preferences</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Database className="w-5 h-5 mr-2 text-teal-600" />
              Automatically Collected Information
            </h4>
            <p className="text-gray-700 mb-3">
              We automatically collect certain information when you interact with our platform:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border-l-4 border-teal-500">
                <p className="font-medium text-gray-900">Technical Data</p>
                <p className="text-sm text-gray-600">Browser, OS, device specs</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                <p className="font-medium text-gray-900">Behavioral Data</p>
                <p className="text-sm text-gray-600">Click patterns, navigation</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                <p className="font-medium text-gray-900">Performance Data</p>
                <p className="text-sm text-gray-600">Load times, errors</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Service Provision
                </h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Account creation and management</li>
                  <li>• Course delivery and progress tracking</li>
                  <li>• Customer support and assistance</li>
                  <li>• Payment processing and billing</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Communication
                </h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Course updates and announcements</li>
                  <li>• Marketing and promotional content</li>
                  <li>• Important policy changes</li>
                  <li>• Technical support notifications</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Platform Improvement
                </h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• Analytics and usage insights</li>
                  <li>• Feature development and testing</li>
                  <li>• Performance optimization</li>
                  <li>• User experience enhancement</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Career Services
                </h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Job placement assistance</li>
                  <li>• Employer matching services</li>
                  <li>• Career counseling and guidance</li>
                  <li>• Industry networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies & Tracking',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2 text-amber-600" />
              What Are Cookies?
            </h4>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device that help us provide a better user experience. 
              We use different types of cookies for various purposes on our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Essential Cookies</h5>
              <p className="text-sm text-gray-600 mb-2">Required for basic site functionality</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• User authentication</li>
                <li>• Session management</li>
                <li>• Security features</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h5>
              <p className="text-sm text-gray-600 mb-2">Help us understand user behavior</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Google Analytics</li>
                <li>• Usage statistics</li>
                <li>• Performance metrics</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h5>
              <p className="text-sm text-gray-600 mb-2">Used for targeted advertising</p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Ad personalization</li>
                <li>• Conversion tracking</li>
                <li>• Social media integration</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Managing Cookies</h4>
            <p className="text-blue-700 text-sm">
              You can control cookies through your browser settings. However, disabling certain cookies may affect 
              the functionality of our platform. We recommend keeping essential cookies enabled for the best experience.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'third-party',
      title: 'Third-party Services',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            We integrate with various third-party services to enhance our platform functionality and provide you with the best possible experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Payment Processing</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700">Razorpay - Secure payment gateway</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-700">Stripe - International payments</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Analytics & Tracking</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-blue-700">Google Analytics - Usage analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-blue-700">Hotjar - User behavior analysis</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-3">Communication</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-purple-700">WhatsApp Business API</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-purple-700">SendGrid - Email services</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Cloud Services</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-orange-700">AWS - Cloud infrastructure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-orange-700">Cloudflare - CDN and security</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mb-2" />
            <p className="text-yellow-800 text-sm">
              <strong>Important:</strong> These third-party services have their own privacy policies. 
              We encourage you to review their policies to understand how they handle your data.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Disclosure',
      content: (
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Our Commitment
            </h4>
            <p className="text-red-700">
              We do not sell, trade, or rent your personal information to third parties. We only share your data 
              in specific circumstances outlined below, and always with appropriate safeguards in place.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">With Your Consent</h4>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Hiring partner referrals</li>
                  <li>• Job placement services</li>
                  <li>• Career networking events</li>
                  <li>• Alumni connections</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Service Providers</h4>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Payment processors</li>
                  <li>• Email service providers</li>
                  <li>• Cloud hosting services</li>
                  <li>• Analytics platforms</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Legal Requirements</h4>
                <ul className="space-y-1 text-orange-700 text-sm">
                  <li>• Court orders or legal process</li>
                  <li>• Government investigations</li>
                  <li>• Regulatory compliance</li>
                  <li>• Law enforcement requests</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Business Transfers</h4>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Mergers or acquisitions</li>
                  <li>• Asset sales</li>
                  <li>• Bankruptcy proceedings</li>
                  <li>• Corporate restructuring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-security',
      title: 'Data Security Measures',
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
            <Lock className="w-8 h-8 text-teal-600 mb-4" />
            <h4 className="font-semibold text-gray-900 mb-3">Our Security Commitment</h4>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. Your data security is our top priority.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
                <Lock className="w-5 h-5 text-teal-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Encryption</h5>
              <p className="text-sm text-gray-600">
                All data transmission is encrypted using SSL/TLS protocols. Sensitive data is encrypted at rest.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Access Control</h5>
              <p className="text-sm text-gray-600">
                Strict access controls ensure only authorized personnel can access your personal information.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <Database className="w-5 h-5 text-purple-600" />
              </div>
              <h5 className="font-semibold text-gray-900 mb-2">Secure Servers</h5>
              <p className="text-sm text-gray-600">
                Our servers are hosted in secure data centers with 24/7 monitoring and physical security.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Additional Security Measures</h4>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Regular security audits and assessments</li>
                <li>• Multi-factor authentication for admin access</li>
                <li>• Automated backup and disaster recovery</li>
              </ul>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Employee security training programs</li>
                <li>• Incident response and monitoring systems</li>
                <li>• Regular software updates and patches</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">
            You have several rights regarding your personal information. We are committed to helping you exercise these rights 
            and will respond to your requests within the timeframes required by applicable law.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-2 flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Right to Access
                </h4>
                <p className="text-teal-700 text-sm">
                  Request a copy of the personal information we hold about you, including how we use it and who we share it with.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Right to Rectification
                </h4>
                <p className="text-blue-700 text-sm">
                  Request correction of inaccurate or incomplete personal information we hold about you.
                </p>
              </div>
              
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Right to Erasure
                </h4>
                <p className="text-red-700 text-sm">
                  Request deletion of your personal information under certain circumstances, subject to legal requirements.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  Right to Restrict Processing
                </h4>
                <p className="text-orange-700 text-sm">
                  Request limitation of how we process your personal information in certain situations.
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  Right to Data Portability
                </h4>
                <p className="text-purple-700 text-sm">
                  Request transfer of your personal information to another service provider in a structured format.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Right to Opt-out
                </h4>
                <p className="text-green-700 text-sm">
                  Unsubscribe from marketing communications at any time through email links or account settings.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">How to Exercise Your Rights</h4>
            <p className="text-gray-700 mb-3">
              To exercise any of these rights, please contact us using the information provided in the Contact section. 
              We may need to verify your identity before processing your request.
            </p>
            <div className="bg-white p-3 rounded border-l-4 border-teal-500">
              <p className="text-gray-600 text-sm">
                <strong>Response Time:</strong> We will respond to your request within 30 days. 
                If we need more time, we will inform you of the delay and the reasons for it.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'children-privacy',
      title: "Children's Privacy",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-red-600 mb-3" />
            <h4 className="font-semibold text-red-800 mb-3">Age Restrictions</h4>
            <p className="text-red-700 mb-3">
              Our services are not intended for children under the age of 16. We do not knowingly collect personal 
              information from children under 16 years of age.
            </p>
            <div className="bg-white p-4 rounded border-l-4 border-red-500">
              <p className="text-red-700 text-sm">
                <strong>If you are under 16:</strong> Please do not provide any personal information through our platform. 
                If you are a parent or guardian and believe your child has provided us with personal information, 
                please contact us immediately.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Parental Rights</h4>
            <p className="text-blue-700 text-sm">
              Parents and guardians have the right to review, delete, or refuse further collection of their child's 
              personal information. If we discover we have collected information from a child under 16, we will 
              delete it immediately.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'policy-updates',
      title: 'Updates to This Policy',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <Calendar className="w-6 h-6 text-blue-600 mb-3" />
            <h4 className="font-semibold text-gray-900 mb-3">Policy Changes</h4>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
              legal requirements, or other factors. When we make significant changes, we will notify you through:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <h5 className="font-medium text-gray-900">Email Notification</h5>
                <p className="text-sm text-gray-600">Sent to your registered email address at least 30 days before changes take effect</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                <h5 className="font-medium text-gray-900">Platform Notice</h5>
                <p className="text-sm text-gray-600">Prominent banner on our website and mobile app</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">
              <strong>Effective Date:</strong> This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}. Continued use of our services after policy updates constitutes acceptance of the revised terms.
            </p>
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
            <h4 className="font-semibold text-gray-900 mb-4">Data Protection Officer</h4>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, your personal information, or wish to exercise your rights, 
              please contact our Data Protection Officer:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Mail className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:privacy@company.com" className="text-teal-600 hover:text-teal-700 text-sm">
                    privacy@company.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Phone className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+911234567890" className="text-orange-600 hover:text-orange-700 text-sm">
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Response Commitment</h4>
            <p className="text-blue-700 text-sm">
              We are committed to addressing your privacy concerns promptly. We will acknowledge receipt of your inquiry 
              within 48 hours and provide a substantive response within 30 days.
            </p>
          </div>
        </div>
      )
    }
  ];

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'information-collect', title: 'Information We Collect', icon: Database },
    { id: 'how-we-use', title: 'How We Use Information', icon: Settings },
    { id: 'cookies-tracking', title: 'Cookies & Tracking', icon: Eye },
    { id: 'third-party', title: 'Third-party Services', icon: Globe },
    { id: 'data-sharing', title: 'Data Sharing', icon: Users },
    { id: 'data-security', title: 'Data Security', icon: Lock },
    { id: 'user-rights', title: 'Your Rights', icon: UserCheck },
    { id: 'children-privacy', title: "Children's Privacy", icon: AlertTriangle },
    { id: 'policy-updates', title: 'Policy Updates', icon: Calendar },
    { id: 'contact', title: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-teal-600">
  {/* Background Image */}
  <img
    src={Privacy}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  {/* Animated Background Elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
  </div>

  {/* Main Content */}
  <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
    <div className="animate-fade-in">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white-100 mb-8 leading-relaxed">
        Your privacy matters to us. Here's how we protect it.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => scrollToSection('introduction')}
          className="bg-white text-teal-700 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Read Policy
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-700 transition-all duration-300 transform hover:scale-105"
        >
          Contact DPO
        </button>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
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
            <Shield className="w-8 h-8 text-teal-400 mr-3" />
            <span className="text-xl font-serif font-bold">Privacy Policy</span>
          </div>
          <p className="text-gray-400 mb-4">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <a href="#terms" className="hover:text-teal-400 transition-colors">Terms of Use</a>
            <a href="#refund" className="hover:text-teal-400 transition-colors">Refund Policy</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style >{`
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

export default PrivacyPolicy;