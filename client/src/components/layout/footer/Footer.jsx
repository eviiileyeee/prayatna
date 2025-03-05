import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github, 
  Send 
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter signup logic here
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: About */}
          <div>
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-400 text-sm">
              We are dedicated to innovation, creativity, and delivering exceptional solutions that make a difference.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Portfolio</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">FAQ</h4>
            <nav className="space-y-2">
              <Link to="/faq" className="block text-gray-300 hover:text-white transition-colors">FAQs</Link>
            </nav>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gray-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest news, insights, and special offers.
            </p>
            
            <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors flex items-center"
              >
                <Send size={20} className="mr-2" /> Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8 pt-4 border-t border-gray-700">
          © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;