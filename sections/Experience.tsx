import React from 'react';
import Section from '../components/Section';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-white dark:bg-dark-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-slate-900 dark:text-white">Professional Journey</h2>
        <p className="text-slate-600 dark:text-slate-400">
          My career path and key contributions in the tech industry.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot on Line */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 transform -translate-x-1/2 z-10"></div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[45%]">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={16} className="text-primary-500" />
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;