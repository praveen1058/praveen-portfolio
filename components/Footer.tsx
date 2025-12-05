import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Praveen Kumar
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
          © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;