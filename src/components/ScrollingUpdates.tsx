import React from 'react';

const updates = [
  "New Batch Starting: Full Stack Development - Join Now!",
  "100% Placement Rate for our Advanced Python Course",
  "Upcoming Webinar: AI & Machine Learning Career Paths",
  "Recent Placement: 15 Students placed at top tech companies",
  "New Course Alert: Cloud Computing with AWS",
  "Free Mock Interviews for Registered Students",
  "Industry Expert Session this Weekend",
  "Certification Programs Starting Next Week"
];

export default function ScrollingUpdates() {
  return (
    <div className="bg-indigo-600 text-white py-2 relative overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {updates.map((update, index) => (
          <span key={index} className="mx-4 text-sm">• {update}</span>
        ))}
        {/* Duplicate for seamless loop */}
        {updates.map((update, index) => (
          <span key={`dup-${index}`} className="mx-4 text-sm">• {update}</span>
        ))}
      </div>
    </div>
  );
}