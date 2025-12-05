import React from 'react';
import Section from '../components/Section';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white dark:bg-dark-900">
       <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900 dark:text-white">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Open to opportunities in Cloud Engineering and DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm actively seeking challenging opportunities to contribute expertise and drive innovation in cloud architecture.
            </p>

            <div className="space-y-4">
              <a href="mailto:er.praveen143@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-slate-900 dark:text-white font-medium break-all">er.praveen143@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="text-slate-900 dark:text-white font-medium">+91 7814543366</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-slate-900 dark:text-white font-medium">New Ashok Nagar, Delhi-110096</p>
                </div>
              </div>

               <div className="flex gap-4 mt-6">
                <a 
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:text-primary-500 transition-all text-slate-600 dark:text-slate-300"
                >
                  <Github size={20} /> GitHub
                </a>
                <a 
                  href="#"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:text-primary-500 transition-all text-slate-600 dark:text-slate-300"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all dark:text-white resize-none"
                placeholder="Let's connect..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-lg hover:shadow-primary-500/30 transition-all flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
       </div>
    </Section>
  );
};

export default Contact;