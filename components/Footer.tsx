
import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F0EB] dark:bg-[#251E18] border-t border-[#DCD0C7] dark:border-[#4A3F37] py-8 text-center text-[#8A766A] dark:text-[#A39890]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5895A] dark:hover:text-[#D4A373] transition-colors">
            <GitHubIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5895A] dark:hover:text-[#D4A373] transition-colors">
            <LinkedInIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-[#C5895A] dark:hover:text-[#D4A373] transition-colors">
            <EmailIcon className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Your Name. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;