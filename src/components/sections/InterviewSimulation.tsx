import React from 'react';
import { Users, Video, Code } from 'lucide-react';

const features = [
  {
    title: "Technical Interviews",
    description: "Practice coding challenges and system design questions",
    icon: <Code className="h-6 w-6 text-accent" />
  },
  {
    title: "HR Rounds",
    description: "Master behavioral questions and soft skills",
    icon: <Users className="h-6 w-6 text-accent" />
  },
  {
    title: "Mock Interviews",
    description: "Real-time feedback and performance analysis",
    icon: <Video className="h-6 w-6 text-accent" />
  }
];

export default function InterviewSimulation() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Interview Simulation
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Practice and perfect your interview skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
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