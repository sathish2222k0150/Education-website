import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            absolute bottom-8 -right-3
            lg:bottom-[25px]
            lg:right-[-15px]
            sm:right-0 
            right-2/4   
            bg-teal-600 text-white p-5 rounded-full shadow-lg hover:bg-teal-700 transition-all lg:h-16 lg:w-16 h-12 w-12
            z-10
          "
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="lg:text-2xl text-lg lg:ml-0 -ml-1 top-2 -mt-1" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
