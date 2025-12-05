import React from 'react';
import Section from '../components/Section';
import { Terminal, Award, GraduationCap } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white dark:bg-dark-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Image/Visual Side */}
        <div className="sticky top-24">
          <div className="relative group mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-indigo-600 rounded-xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
            <div className="relative rounded-xl overflow-hidden aspect-square max-w-sm mx-auto shadow-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
               <img 
                 src="https://picsum.photos/id/473/800/800" 
                 alt="Praveen Kumar" 
                 className="object-cover w-full h-full transform hover:scale-105 transition duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <div className="text-white">
                    <p className="text-sm font-medium uppercase tracking-wider text-primary-300">Total Experience</p>
                    <p className="text-3xl font-bold font-heading">6+ Years</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                   <GraduationCap size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Education</h3>
             </div>
             <div className="space-y-4">
               <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">B.Tech - Computer Science</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">CT Institute of Engineering (PTU Jalandhar) - 69%</p>
               </div>
               <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                   <p className="font-medium text-slate-800 dark:text-slate-200">Intermediate (Science)</p>
                   <p className="text-sm text-slate-500 dark:text-slate-400">Samastipur College (BSEB Patna) - 62%</p>
               </div>
               <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
                   <p className="font-medium text-slate-800 dark:text-slate-200">Matriculation</p>
                   <p className="text-sm text-slate-500 dark:text-slate-400">R.S.B. High School (BSEB Patna) - 75%</p>
               </div>
             </div>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-slate-900 dark:text-white">
            Architecting Scalable <br />
            <span className="text-primary-600 dark:text-primary-400">Cloud Solutions</span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            I am an IT professional with 6+ years of experience, specializing in Cloud and DevOps for the past 8 years. I am skilled in designing and implementing scalable and secure cloud solutions, seeking challenging opportunities to contribute expertise and drive innovation in cloud & DevOps architecture.
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            I have a proven track record of managing on-premise and AWS infrastructure, optimizing costs (achieving 67% savings), and championing CI/CD practices. I serve as a single point of contact for resolving complex infrastructure problems and ensuring high availability for diverse clients.
          </p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Award className="text-primary-500" size={24}/> Certifications
          </h3>
          
          <div className="grid grid-cols-1 gap-3 mb-8">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                 <div className="h-2 w-2 rounded-full bg-green-500"></div>
                 <span className="font-medium text-slate-700 dark:text-slate-200">{cert}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Terminal size={18} className="text-primary-500"/> Multi-Cloud
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">AWS, Azure, GCP & Hybrid Cloud Architectures.</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Terminal size={18} className="text-primary-500"/> Optimization
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Resource Rightsizing & Infrastructure Security.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;