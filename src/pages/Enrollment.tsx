import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import EnrollmentModal from '../components/EnrollmentModal';
import { toast } from 'sonner';

export default function Enrollment() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClose = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const handleEnrollmentSuccess = () => {
    toast.success('Enrollment submitted successfully!');
    handleClose();
  };

  if (!user) {
    navigate('/login', { state: { from: '/enrollment' } });
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Start Your Learning Journey
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Enroll in our courses and transform your career
          </p>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onSuccess={handleEnrollmentSuccess}
      />
    </div>
  );
}