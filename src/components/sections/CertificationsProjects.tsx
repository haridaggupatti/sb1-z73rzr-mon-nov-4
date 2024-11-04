import React from 'react';
import { Award, Code, FileCheck } from 'lucide-react';

const certifications = [
  {
    title: "Industry-Recognized Certifications",
    description: "Earn globally recognized certifications that validate your skills",
    icon: <Award className="h-8 w-8 text-accent" />
  },
  {
    title: "Real-Time Projects",
    description: "Work on actual projects with real-world applications",
    icon: <Code className="h-8 w-8 text-accent" />
  },
  {
    title: "Project Portfolio",
    description: "Build a strong portfolio to showcase to potential employers",
    icon: <FileCheck className="h-8 w-8 text-accent" />
  }
];

export default function CertificationsProjects() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Certifications & Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Validate your skills with recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}