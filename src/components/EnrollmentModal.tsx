import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { api } from '../lib/db';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function EnrollmentModal({ isOpen, onClose, onSuccess }: EnrollmentModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    whatsapp: '',
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return;
    }

    try {
      setIsSubmitting(true);
      await api.createEnrollment({
        courseName: 'General Enrollment',
        userId: 'user_id'
      });
      
      onSuccess?.();
      toast.success('Enrollment submitted successfully!');
      onClose();
    } catch (error) {
      toast.error('Failed to submit enrollment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-[85%] max-w-2xl rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl transform transition-all duration-300 ease-out translate-y-0 animate-slide-up">
          <div className="flex justify-between items-center mb-6">
            <Dialog.Title className="text-2xl font-semibold text-gray-900 dark:text-white">
              Enroll Now
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Please enter your full name"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Please enter your mobile number"
                required
              />
            </div>

            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Please enter your email id"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Please enter your WhatsApp number"
                required
              />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              Please enter all the details above to get daily updates via WhatsApp and SMS.
            </p>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={formData.termsAccepted}
                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                I agree to the terms and conditions
              </label>
            </div>

            <button
              type="submit"
              disabled={!formData.termsAccepted || isSubmitting}
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium 
                       disabled:bg-gray-400 disabled:cursor-not-allowed
                       hover:bg-indigo-700 transition-colors duration-200"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}