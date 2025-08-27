import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import KGLOGO from '../assets/Frame 6.png';
import { coursesData } from './Data/coursesData'; // ✅ Correct import

interface FooterProps {
  onNavClick: (page: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-4" id="footer-bottom">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg flex items-center justify-center"></div>
          <img
            src={KGLOGO}
            alt="KGPath"
            className="bg-gray-900 -ml-10 h-14 bg-white rounded-lg object-contain"
          />
        </div>
        <p className="text-gray-400">
          Empowering professionals with cutting-edge digital skills and career opportunities.
        </p>
        <div className="flex space-x-4">
          <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <FontAwesomeIcon
            icon={faXTwitter}
            style={{ color: '' }}
            className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
          />
          <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => onNavClick('/courses')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Courses
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavClick('/about')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavClick('/placement')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Placement
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavClick('/blogPage')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Blog
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavClick('/contact')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Programs */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Programs</h4>
        <ul className="space-y-2">
          {coursesData.map((course) => (
            <li key={course.slug}>
              <button
                onClick={() => onNavClick(`/courses/${course.slug}`)}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {course.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Contact</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-teal-500" />
            <span className="text-gray-400">
              3rd Floor, KG Garden City Mall, Vedapatti, CBE
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-teal-500" />
            <span className="text-gray-400">+91 7397788 918/917/915</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-teal-500" />
            <span className="text-gray-400">info@kgpath.org</span>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-600 mt-2 pt-2 px-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
      <p className="text-gray-400 text-sm">
        © 2025 KGPath. All rights reserved.
      </p>
      <div className="flex space-x-6 md:mt-0">
        <button
          onClick={() => onNavClick('/privacy')}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          Privacy Policy
        </button>
        <button
          onClick={() => onNavClick('/terms')}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => onNavClick('/RefundPolicy')}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          Refund Policy
        </button>
      </div>
    </div>
  </div>
</footer>

  );
}
