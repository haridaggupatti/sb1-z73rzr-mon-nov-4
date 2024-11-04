import React from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import SocialShare from './SocialShare';

interface TechnologyCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, description, icon }) => {
  const shareUrl = `${window.location.origin}/technology/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        {icon || <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="flex items-center justify-between border-t dark:border-gray-700 pt-4">
        <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </button>

        <SocialShare
          url={shareUrl}
          title={`Learn about ${title}`}
          description={description}
          hashtags={['technology', 'learning', title.toLowerCase().replace(/\s+/g, '')]}
        />
      </div>
    </div>
  );
};

export default TechnologyCard;