import React, { useState } from 'react';
import { technologies } from '../data/technologies';
import { Dialog } from '@headlessui/react';
import { ChevronRight, X } from 'lucide-react';

export default function Technologies() {
  const [selectedTech, setSelectedTech] = useState<typeof technologies[0] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Technologies
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setSelectedTech(tech)}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-light">
                  {tech.name}
                </h3>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-accent dark:group-hover:text-accent-light" />
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </button>
          ))}
        </div>

        <Dialog
          open={!!selectedTech}
          onClose={() => setSelectedTech(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl animate-slide-up">
              <div className="flex justify-between items-start mb-4">
                <Dialog.Title className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {selectedTech?.name}
                </Dialog.Title>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="prose dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="mb-4">{selectedTech?.description}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Key Benefits
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedTech?.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </div>
  );
}