import React from 'react';
import { courses } from '../data/courses';
import CourseCard from './CourseCard';

export default function CourseList() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Courses
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Comprehensive programs designed for your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              duration={course.duration}
              level={course.level}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}