import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

export default function MockInterviews() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Mock Interviews
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Prepare for success with our comprehensive mock interview program
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Technical Interviews
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Practice with industry-specific technical questions and coding challenges
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  HR Interviews
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Master behavioral questions and professional communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}