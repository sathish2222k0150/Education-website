import { useRef, useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';
import video from './asset/Sharadha skill academy.mp4';
import cardImage from './asset/Rectangle 434.png'; // replace with your actual card image

const AboutHero = () => {
  const [showModal, setShowModal] = useState(false);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = bgVideoRef.current;
    if (videoEl) {
      const handleTimeUpdate = () => {
        if (videoEl.currentTime >= 15) {
          videoEl.currentTime = 0;
        }
      };
      videoEl.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        videoEl.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        ref={bgVideoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card image overlay */}
      <img
        src={cardImage}
        alt="Hero Card"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="text-orange-500">Empowering Learners</span>
            <span className="text-teal-500"> Since 2025</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto">
            Our story begins with education – transforming lives through innovative learning experiences
            and building the workforce of tomorrow.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="border border-teal-400 text-teal-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-teal-500/10 transition-colors font-medium text-base sm:text-lg flex items-center justify-center"
          >
            <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
            Watch Our Story
          </button>
        </div>
      </div>

      {/* Modal for full video */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-11/12 sm:w-5/6 md:w-3/4 lg:w-1/2">
            {/* Close button inside modal */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <video controls autoPlay className="w-full h-auto rounded-lg shadow-lg">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

    </section>
  );
};

export default AboutHero;
