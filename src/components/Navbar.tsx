import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { coursesData } from './Data/coursesData';
import KGLOGO from '../assets/Frame 6.png';
import whatsapp from '../assets/whatsapp.png';

interface NavbarProps {
  currentPage?: string;
  onNavClick: (page: string) => void;
  onApplyClick: () => void;
}

export default function Navbar({ onNavClick, onApplyClick }: NavbarProps) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-teal-600 font-semibold transition-colors'
      : 'text-gray-700 hover:text-teal-600 font-medium transition-colors';

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 flex-wrap lg:flex-nowrap min-w-0">

          {/* 🔰 Logo */}
          <button onClick={() => onNavClick('/')} className="flex items-center">
            <img
              src={KGLOGO}
              alt="KGPath"
              className="h-10 lg:h-12 w-auto max-w-[180px] object-contain"
            />
          </button>

          {/* 🖥 Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button onClick={() => onNavClick('/home')} className="text-gray-700 hover:text-teal-600 font-medium">Home</button>
            <NavLink to="/about" className={navLinkStyle}>About Us</NavLink>

            {/* 📚 Dropdown Courses */}
            <div className="relative group">
              <NavLink to="/courses" className={navLinkStyle}>Courses</NavLink>
              <div className="absolute left-0 top-full mt-2 lg:mt-10 w-64 z-40 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="flex flex-col">
                  {coursesData.map((course) => (
                    <Link
                      key={course.slug}
                      to={`/courses/${course.slug}`}
                      className="px-4 py-3 border-b last:border-none hover:bg-teal-50 text-gray-800 font-medium transition-colors"
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/BlogPage" className={navLinkStyle}>Blog</NavLink>
            <NavLink to="/placement" className={navLinkStyle}>Placement</NavLink>
            <NavLink to="/career" className={navLinkStyle}>Career</NavLink>
            <NavLink to="/contact" className={navLinkStyle}>Contact</NavLink>
          </div>

          {/* ✨ Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button onClick={onApplyClick} className="bg-teal-600 text-white px-4 lg:px-5 py-2 text-sm lg:text-base rounded-lg hover:bg-teal-700 font-medium transition">Enroll Now</button>

            <a
              href="https://wa.me/917397788915"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 px-3 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 mr-2" />
              <span className="text-white font-medium">Chat</span>
            </a>
          </div>

          {/* 📱 Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 📲 Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="px-4 py-6 space-y-4">
            {['home', 'about', 'courses', 'BlogPage', 'placement', 'career', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => { onNavClick(`/${page}`); setIsMenuOpen(false); }}
                className="block text-gray-700 hover:text-teal-600 font-medium"
              >
                {page.charAt(0).toUpperCase() + page.slice(1).replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
            <div className="pt-4 space-y-3">
              <button onClick={onApplyClick} className="w-full inline-flex justify-center items-center bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-medium">Enroll Now</button>
              <a
                href="https://wa.me/917397788915"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-medium"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-5 h-5 mr-2" />
                Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
