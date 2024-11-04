import React, { useState } from 'react';
import { 
  Briefcase, 
  BookOpen, 
  Users, 
  Video,
  HelpCircle,
  FileCheck,
  Star,
  MapPin,
  Calendar,
  MessageSquare,
  Building,
  Award,
  UserCheck,
  Brain,
  Layout,
  Code,
  MessagesSquare
} from 'lucide-react';
import CardModal from './CardModal';

interface Card {
  title: string;
  icon: React.ReactNode;
  description: string;
  content: string;
}

const cards: Card[] = [
  {
    title: "Careers",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Expert career guidance and personalized development plans",
    content: "At our institution, we prioritize your career development from the very beginning. Our expert career advisors offer personalized guidance, ensuring that you not only acquire the right skills but also understand how to market those skills effectively."
  },
  {
    title: "Courses Available",
    icon: <BookOpen className="h-6 w-6" />,
    description: "Comprehensive range of industry-relevant courses",
    content: "We offer a comprehensive catalogue of courses, tailored to meet the diverse needs of learners at all stages of their careers. From introductory-level courses to advanced certifications."
  },
  // Add all other cards with their full content...
];

const HomeCards = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedCard(card)}
          >
            <div className="flex items-center space-x-4">
              <div className="text-blue-600 dark:text-blue-400">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h3>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <CardModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </div>
  );
};

export default HomeCards;