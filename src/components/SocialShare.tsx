import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  hashtags?: string[];
  className?: string;
}

export default function SocialShare({
  url,
  title,
  description = '',
  hashtags = [],
  className = ''
}: SocialShareProps) {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={hashtags[0]}
        className="hover:opacity-80 transition-opacity"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        hashtags={hashtags}
        className="hover:opacity-80 transition-opacity"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        source={window.location.hostname}
        className="hover:opacity-80 transition-opacity"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <button
        onClick={handleCopyLink}
        className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        title="Copy link"
      >
        <Copy className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
}