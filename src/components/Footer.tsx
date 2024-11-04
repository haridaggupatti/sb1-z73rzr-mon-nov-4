import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link to="/technologies" className="hover:text-indigo-400">Courses</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
              <li><Link to="/login" className="hover:text-indigo-400">Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Interview Prep</a></li>
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">FAQs</a></li>
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-indigo-400"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechEdu Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}