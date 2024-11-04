import React from 'react';
import { X } from 'lucide-react';

interface Card {
  title: string;
  icon: React.ReactNode;
  description: string;
  content: string;
}

interface CardModalProps {
  card: Card | null;
  onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full animate-slide-up">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-blue-600 dark:text-blue-400">
              {card.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {card.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300">
            {card.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardModal;