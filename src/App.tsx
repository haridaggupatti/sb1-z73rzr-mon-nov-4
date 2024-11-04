import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import Contact from './pages/Contact';
import Enrollment from './pages/Enrollment';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ChatWidget from './components/ChatWidget';
import NewsletterForm from './components/NewsletterForm';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme } = useTheme();

  return (
    <ErrorBoundary>
      <Router>
        <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
          <Header />
          <main className="flex-grow bg-gray-50 dark:bg-gray-900">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/contact" element={<Contact />} />
              <Route 
                path="/enrollment" 
                element={
                  <ProtectedRoute>
                    <Enrollment />
                  </ProtectedRoute>
                } 
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
          <NewsletterForm />
          <Toaster position="top-right" richColors />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;