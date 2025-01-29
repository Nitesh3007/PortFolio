import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm text-blue-200 py-8 border-t border-blue-800/30">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-5 h-5 mr-2 text-red-500" />
          <p>Made with passion by Nitesh Patel</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="mailto:your-email@example.com" 
             className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Nitesh3007" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;