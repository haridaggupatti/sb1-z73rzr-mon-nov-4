import React from 'react';
import { Mail, Phone, UserCircle } from 'lucide-react';

const contacts = [
  {
    name: 'John Smith',
    designation: 'Program Director',
    email: 'john.smith@techedu.com',
    mobile: '+1 (555) 123-4567'
  },
  {
    name: 'Sarah Johnson',
    designation: 'Student Counselor',
    email: 'sarah.johnson@techedu.com',
    mobile: '+1 (555) 234-5678'
  },
  {
    name: 'Michael Chen',
    designation: 'Technical Lead',
    email: 'michael.chen@techedu.com',
    mobile: '+1 (555) 345-6789'
  }
];

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Contact Our Team
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-4">
              <UserCircle className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {contact.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {contact.designation}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5 mr-2" />
                <a
                  href={`tel:${contact.mobile}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {contact.mobile}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}