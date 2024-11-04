import React from 'react';
import { Video, Calendar, Users } from 'lucide-react';

const upcomingWebinars = [
  {
    title: "Latest Trends in AI & Machine Learning",
    date: "2024-03-25",
    time: "2:00 PM IST",
    speaker: "Dr. Sarah Johnson",
    participants: 150
  },
  {
    title: "Cloud Computing: Industry Best Practices",
    date: "2024-03-27",
    time: "3:30 PM IST",
    speaker: "Michael Chen",
    participants: 120
  }
];

export default function LiveSessions() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Live Sessions & Webinars
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Join our interactive sessions with industry experts
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {upcomingWebinars.map((webinar, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {webinar.title}
                </h3>
                <Video className="h-6 w-6 text-accent" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{webinar.date} at {webinar.time}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{webinar.participants} registered</span>
                </div>
              </div>

              <button className="mt-4 w-full bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}