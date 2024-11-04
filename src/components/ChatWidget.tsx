import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactForm>({
    name: '',
    email: '',
    phone: ''
  });
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Hello! How can I help you today?', isUser: false }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages([...messages, { text: message, isUser: true }]);
    setMessage('');

    // Show contact form after first user message
    if (!showContactForm) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "To better assist you, could you please provide your contact details? Our support team will get back to you within 24 hours.",
          isUser: false
        }]);
        setShowContactForm(true);
      }, 1000);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages(prev => [...prev, {
      text: "Thank you! Our support team will contact you within 24 hours.",
      isUser: false
    }]);
    setShowContactForm(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-80 h-96 flex flex-col animate-slide-up">
          <div className="p-4 bg-indigo-600 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-semibold">Support Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.isUser
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {showContactForm ? (
            <form onSubmit={handleContactSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                  className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}