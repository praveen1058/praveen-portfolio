import React from 'react';
import Section from '../components/Section';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <Section id="skills" className="bg-slate-50 dark:bg-dark-950">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900 dark:text-white">Technical Arsenal</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive toolkit enabling me to build, deploy, and manage production-grade infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, catIndex) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-b border-primary-500/30 pb-2 inline-block">
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <div 
                  key={skill.name}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700"
                >
                  {skill.icon && <skill.icon size={20} className="text-primary-500" />}
                  <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;