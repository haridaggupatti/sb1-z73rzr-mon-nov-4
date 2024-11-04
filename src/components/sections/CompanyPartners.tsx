import React from 'react';
import { Building } from 'lucide-react';

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "IBM",
  "Intel",
  "Adobe",
  "Oracle",
  "Cisco"
];

export default function CompanyPartners() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Our Industry Partners
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Leading companies that trust our graduates
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <Building className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {company}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}