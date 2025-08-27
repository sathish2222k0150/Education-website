import React from "react";
import { getCourseById } from "../Data/coursesData";
import group from '../../assets/certificate.jpg'; // adjust the path if needed

const Certificates: React.FC = () => {
  const course = getCourseById(1);
  console.log("Fetched course:", course);  // ✅ add here

  if (!course || !course.certificates) {
    return <p>No certificate data found.</p>;
  }

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 py-12 sm:py-16 bg-white max-w-6xl mx-auto">

      {/* Certificate Image */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <img
          src={group}
          alt="KGPATH Certificate"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[380px] mx-auto lg:mx-0 border rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          The <span className="bg-gradient-to-br from-teal-400 to-blue-500 text-transparent bg-clip-text">KGPATH</span> advantage
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold mb-6">
          Invest in yourself – learn, grow, and excel
        </h3>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-6">
          {course.certificates.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg shadow-sm bg-white transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="text-2xl mt-1 text-teal-600">{item.icon}</div>
              <div>
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
