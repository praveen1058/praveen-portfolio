import React from 'react';
import Section from '../components/Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-slate-50 dark:bg-dark-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Real-world implementations of DevOps practices and Cloud architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col"
          >
            <div className="relative overflow-hidden h-48">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                 <a 
                   href={project.githubUrl} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-2 bg-white/90 dark:bg-slate-900/90 rounded-full text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors backdrop-blur-sm"
                   title="View Code"
                 >
                   <Github size={18} />
                 </a>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <FolderGit2 size={20} className="text-primary-500" />
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;