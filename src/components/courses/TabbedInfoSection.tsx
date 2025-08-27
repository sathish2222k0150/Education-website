import { useState } from "react";
import { CheckCircle, User, Calendar, BookOpen } from "lucide-react";
import { Course } from "../Data/coursesData";

interface TabbedInfoSectionProps {
  course: Course;
}

const TabbedInfoSection: React.FC<TabbedInfoSectionProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "curriculum" | "instructor" | "schedule"
  >("overview");
  const [expanded, setExpanded] = useState<number | null>(null);
  const toggleModule = (index: number) =>
    setExpanded((prev) => (prev === index ? null : index));

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8 overflow-x-auto">
          <nav className="flex space-x-4 sm:space-x-8 min-w-max">
            {[
              { id: "overview", label: "Overview", icon: BookOpen },
              { id: "curriculum", label: "Curriculum", icon: BookOpen },
              { id: "instructor", label: "Instructor", icon: User },
              { id: "schedule", label: "Schedule", icon: Calendar },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center space-x-2 py-3 px-2 border-b-2 text-sm md:text-base font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <tab.icon className="w-4 h-4 flex-shrink-0" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">About the Course</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Skills You'll Gain</h3>
              <div className="flex flex-wrap gap-2">
                {course.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CURRICULUM */}
        {activeTab === "curriculum" && (
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Course Curriculum</h3>
            {course.curriculum.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h4 className="font-semibold">{module.module}: {module.title}</h4>
                    <p className="text-xs text-gray-600">{module.lessons} lessons</p>
                  </div>
                  <button
                    onClick={() => toggleModule(index)}
                    className="text-orange-600 hover:text-orange-700 text-sm mt-2 sm:mt-0"
                  >
                    {expanded === index ? "Hide Details" : "View Details"}
                  </button>
                </div>
                {expanded === index && (
                  <div className="mt-3 text-gray-700 text-sm">
                    <ul className="list-disc pl-5 mb-2">
                      {module.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                    <p>{module.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* INSTRUCTOR */}
        {activeTab === "instructor" && (
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Meet Your Instructor</h3>
            <div className="bg-gray-50 p-5 rounded-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold">{course.instructor.name}</h4>
                  <p className="text-orange-600 text-sm">{course.instructor.title}</p>
                  <p className="text-orange-600 text-sm">{course.instructor.duration}</p>
                  <p className="text-gray-600 mt-2 text-sm">{course.instructor.bio}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCHEDULE */}
        {activeTab === "schedule" && (
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Class Schedule</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.schedule.map((batch, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold">{batch.type}</h4>
                  <p className="text-gray-600 text-sm">{batch.days}</p>
                  <p className="text-gray-600 text-sm">{batch.time}</p>
                  <p className={`text-xs mt-1 font-medium ${
                    batch.status === "Available"
                      ? "text-green-600"
                      : batch.status === "Filling Fast"
                      ? "text-orange-600"
                      : "text-gray-600"
                  }`}>
                    {batch.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabbedInfoSection; 