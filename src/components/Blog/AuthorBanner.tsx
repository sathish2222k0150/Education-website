import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { BlogPost } from './blogData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

interface AuthorBannerProps {
  author: BlogPost['author'];
  darkMode?: boolean;
}

const AuthorBanner: React.FC<AuthorBannerProps> = ({ author, darkMode = false }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 `}>
      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-24 h-24 rounded-full object-cover flex-shrink-0"
        />
        
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {author.name}
          </h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
            {author.bio}
          </p>
          
          <div className="flex space-x-3">
            {author.social.instagram && (
              <a
                href={author.social.instagram}
                className="p-2 rounded-full border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            )}
            {author.social.twitter && (
              <a
                href={author.social.twitter}
                className="p-2 rounded-full border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                 <FontAwesomeIcon
                icon={faXTwitter}  />
              </a>
            )}
            {author.social.facebook && (
              <a
                href={author.social.facebook}
                className="p-2 rounded-full border border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBanner;