// components/ContactCard.tsx
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
  action?: string;
  href?: string; // new: optional URL to open
}

const ContactCard = ({ icon: Icon, title, content, action, href }: ContactCardProps) => {
  return (
    <div className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div 
        className="w-12 h-12 sm:w-12 sm:h-12 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center mb-4
        border border-white/20 hover:scale-105 transform transition-transform duration-300"
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" aria-label={`${title} icon`} />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-4 flex-grow">{content}</p>
      {action && href && (
        <Link
          to={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="text-teal-600 font-medium hover:text-teal-700 transition-colors mt-auto inline-flex items-center text-sm sm:text-base"
        >
          {action}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default ContactCard;
