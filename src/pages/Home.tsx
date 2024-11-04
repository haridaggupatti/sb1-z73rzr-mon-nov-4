import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollingUpdates from '../components/ScrollingUpdates';
import CourseList from '../components/CourseList';
import MockInterviews from '../components/sections/MockInterviews';
import SuccessStories from '../components/sections/SuccessStories';
import LiveSessions from '../components/sections/LiveSessions';
import FeedbackSection from '../components/sections/FeedbackSection';
import CompanyPartners from '../components/sections/CompanyPartners';
import CertificationsProjects from '../components/sections/CertificationsProjects';
import InterviewSimulation from '../components/sections/InterviewSimulation';
import QuizSection from '../components/sections/QuizSection';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/enrollment');
  };

  return (
    <div className="min-h-screen">
      <ScrollingUpdates />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Transform Your Future with
            <span className="block text-accent">VARAHI INSTITUTIONS</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            YOUR FUTURE OUR RESPONSIBILITY
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={handleEnrollClick}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-dark transition-colors duration-200"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <CourseList />
      <MockInterviews />
      <SuccessStories />
      <LiveSessions />
      <FeedbackSection />
      <CompanyPartners />
      <CertificationsProjects />
      <InterviewSimulation />
      <QuizSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of learners and transform your career
          </p>
          <button
            onClick={handleEnrollClick}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-dark transition-colors duration-200"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}