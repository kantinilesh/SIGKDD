import React from 'react';
import { Database, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/90 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Database className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold">ACM SIGKDD</span>
            </div>
            <p className="text-gray-400 text-sm">
              Student Chapter dedicated to knowledge discovery and data mining.
            </p>
            <div className="mt-4 flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin', 'github'].map((platform) => (
                <a 
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={`Follow us on ${platform}`}
                >
                  <img
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${platform}.svg`}
                    alt={platform}
                    className="w-5 h-5 invert opacity-75 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Events', 'Team', 'Resources', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                'ACM SIGKDD Official', 
                'KDD Conference', 
                'KDD Cup Competitions',
                'Data Mining Tutorials',
                'Research Papers'
              ].map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400">
              <p>Department of data Science and Business Systems</p>
              <p>University Building, SRM KTR</p>
              <p className="mt-2">Email: acmsigkdd@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ACM SIGKDD Student Chapter. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500" /> by the ACM SIGKDD Student Chapter Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;