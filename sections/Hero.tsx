import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden bg-gradient-to-b from-primary-50/50 to-transparent dark:from-dark-900 dark:to-dark-950">
      
      {/* Background Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 border border-primary-200 dark:border-primary-800">
            👋 Hello, I'm Praveen Kumar
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-heading font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Cloud Engineer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600 dark:from-primary-400 dark:to-indigo-400">DevOps Specialist</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          6+ Years of experience architecting scalable cloud solutions, optimizing costs, and automating infrastructure on AWS, Azure, & GCP.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary-500/30 w-full sm:w-auto justify-center"
          >
            Contact Me <ArrowRight size={20} />
          </a>
          <button 
            className="px-8 py-4 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            View Resume <Download size={20} />
          </button>
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <Github size={28} />
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:er.praveen143@gmail.com" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;