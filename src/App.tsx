// App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import CoursesList from './components/courses/CoursesList';
import CourseDetails from './components/courses/CourseDetails';
import Placement from './components/Placement';
import CareerPage from './components/CareerPage/CareerPage';
import ContactPage from './components/Contact/ContactPage';
import ScrollToTop from "./components/ScrollTop";
import ChatBot from './components/Chatbot/ChatBot';
import BlogPage from './components/Blog/BlogPage';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import Terms from './components/Legal/Terms';
import RefundPolicy from './components/Legal/RefundPolicy';
import ScrollToTopButton from './components/ScrollTopButton';
import BlogDetailsPage from './components/Blog/BlogDetailsPage';
import Marquee from './components/Marquee';
import EnquiryFormModal from './components/EnquiryFormModal';


const CourseDetailsWrapper = ({
  onNavClick,
  onApplyClick
}: {
  onNavClick: (page: string) => void;
  onApplyClick: () => void;
}) => {
  const { slug } = useParams();
  const handleBackClick = () => window.history.back();

  return (
    <CourseDetails
      slug={slug || ''}
      onNavClick={onNavClick}
      onBackClick={handleBackClick}
      onApplyClick={onApplyClick}
    />
  );
};

function AppWrapper() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (page: string) => {
    navigate(page);
  };

  const handleCourseClick = (slug: string) => {
    navigate(`/courses/${slug}`);
  };

  const openApplyModal = () => setShowApplyModal(true);
  const closeApplyModal = () => setShowApplyModal(false);

  return (
    <div className="min-h-screen bg-white relative">
      <ScrollToTop />

      {/* ✅ Marquee absolutely positioned at the very top */}
      <div className="fixed top-0 left-0 w-full z-[60]">
        <Marquee />
      </div>

      {/* ✅ Navbar fixed below the Marquee */}
      <div className="relative z-[50]">
        <Navbar onNavClick={handleNavClick} onApplyClick={openApplyModal} />
      </div>

      {/* ✅ Main content should stay at top, no spacing needed */}
      <Routes>
        <Route path="/" element={<Home onApplyClick={openApplyModal} />} />
        <Route path="/home" element={<Home onApplyClick={openApplyModal} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CoursesList onCourseClick={handleCourseClick} />} />
        <Route
          path="/courses/:slug"
          element={
            <CourseDetailsWrapper
              onNavClick={handleNavClick}
              onApplyClick={openApplyModal}
            />
          }
        />
        <Route path="/Placement" element={<Placement />} />
        <Route path="/Career" element={<CareerPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/BlogPage" element={<BlogPage darkMode={false} />} />
        <Route path="/blog/:id" element={<BlogDetailsPage darkMode={false} />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
      </Routes>

      <Footer onNavClick={handleNavClick} />
      <EnquiryFormModal isOpen={showApplyModal} onClose={closeApplyModal} />


      <div
        style={{
          position: 'fixed',
          bottom: '70px',
          right: '40px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          zIndex: 9999
        }}
      >
        <ScrollToTopButton />
        <ChatBot />
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
