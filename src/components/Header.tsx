import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Varahi Institutions Logo"
              />
              <div className="ml-2 flex flex-col">
                <span className="text-xl font-bold text-white">
                  VARAHI INSTITUTIONS
                </span>
                <span className="text-sm text-gray-300 italic">
                  YOUR FUTURE OUR RESPONSIBILITY
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/technologies" className="text-gray-300 hover:text-white transition-colors">
              Technologies
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/technologies"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technologies
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;