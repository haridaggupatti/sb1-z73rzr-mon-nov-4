import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';
import SocialShare from './SocialShare';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  level,
  image,
}) => {
  const shareUrl = `${window.location.origin}/course/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{level}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>Certificate</span>
          </div>
        </div>
        
        <div className="border-t dark:border-gray-700 pt-4">
          <SocialShare
            url={shareUrl}
            title={`Check out this course: ${title}`}
            description={description}
            hashtags={['education', 'learning', 'tech']}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;