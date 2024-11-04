import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X, Mail } from 'lucide-react';

export default function NewsletterAlert() {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Handle newsletter subscription
    setIsSubmitted(true);
    setTimeout(() => setIsOpen(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-x-0 bottom-4 z-40 flex items-center justify-center px-4"
    >
      <Dialog.Panel className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 animate-slide-up">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
              {isSubmitted ? 'Thank You!' : 'Stay Updated'}
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {isSubmitted
                ? 'You have successfully subscribed to our newsletter.'
                : 'Subscribe to our newsletter for latest updates and exclusive offers.'}
            </Dialog.Description>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </Dialog.Panel>
    </Dialog>
  );
}