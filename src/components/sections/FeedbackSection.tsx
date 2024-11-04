import React from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

const feedbacks = [
  {
    id: 1,
    name: "Amit Kumar",
    course: "Full Stack Development",
    rating: 5,
    comment: "Excellent curriculum and practical training. The mentors are highly skilled and supportive."
  },
  {
    id: 2,
    name: "Priya Patel",
    course: "Data Science",
    rating: 5,
    comment: "The hands-on projects and real-world applications really helped me understand complex concepts."
  }
];

export default function FeedbackSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Student Feedback
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            What our students say about their learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <MessageCircle className="h-8 w-8 text-accent" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {feedback.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {feedback.course}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(feedback.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}