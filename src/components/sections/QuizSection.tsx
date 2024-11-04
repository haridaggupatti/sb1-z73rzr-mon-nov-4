import React from 'react';
import { CheckCircle, Clock, Award } from 'lucide-react';

const quizFeatures = [
  {
    title: "Regular Assessments",
    description: "Test your knowledge after each module",
    icon: <CheckCircle className="h-6 w-6 text-accent" />
  },
  {
    title: "Instant Feedback",
    description: "Get immediate results and explanations",
    icon: <Clock className="h-6 w-6 text-accent" />
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning journey",
    icon: <Award className="h-6 w-6 text-accent" />
  }
];

export default function QuizSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Interactive Quizzes
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Reinforce your learning with regular assessments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quizFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-lg font-medium text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}