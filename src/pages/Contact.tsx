import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contacts = [
  {
    name: 'John Smith',
    role: 'Program Director',
    email: 'john.smith@techedu.com',
    phone: '+1 (555) 123-4567'
  },
  {
    name: 'Sarah Johnson',
    role: 'Student Counselor',
    email: 'sarah.johnson@techedu.com',
    phone: '+1 (555) 234-5678'
  },
  {
    name: 'Michael Chen',
    role: 'Technical Lead',
    email: 'michael.chen@techedu.com',
    phone: '+1 (555) 345-6789'
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Contact Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Get in touch with our expert team for any queries or support
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <div
              key={contact.email}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {contact.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400">{contact.role}</p>
                
                <div className="space-y-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    {contact.email}
                  </a>
                  
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Visit Us
              </h3>
              <div className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p>
                  123 Learning Street<br />
                  Tech Valley, CA 94043<br />
                  United States
                </p>
              </div>
            </div>
            
            <div className="h-64 rounded-lg overflow-hidden">
              {/* Add a map component or image here */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}