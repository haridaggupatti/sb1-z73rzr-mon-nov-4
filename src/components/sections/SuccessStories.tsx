import React from 'react';
import { Star } from 'lucide-react';

const stories = [
  {
    name: "Priya Sharma",
    role: "Full Stack Developer at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    quote: "The practical training and mock interviews helped me land my dream job."
  },
  {
    name: "Rahul Verma",
    role: "Data Scientist at Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    quote: "The industry-focused curriculum gave me a competitive edge in my career."
  }
];

export default function SuccessStories() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Hear from our alumni who transformed their careers
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {story.name}
                  </h3>
                  <p className="text-accent">{story.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{story.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}