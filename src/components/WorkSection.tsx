import React, { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="w-full space-y-16 pt-12">
      
      {/* Grid of massive project cards */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative w-full bg-[#111111] border border-white/10 rounded-[24px] md:rounded-[32px] overflow-hidden cursor-pointer hover:border-white/20 transition-colors"
          >
            {/* Card Header (Title, Subtitle, Arrow) */}
            <div className="p-8 md:p-12 flex justify-between items-start relative z-10">
              <div>
                <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base">
                  <span className="font-semibold text-white">{project.category}</span> — {project.tagline}
                </p>
              </div>
              <ArrowRight className="w-6 h-6 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>

            {/* Project Image Container */}
            <div className="px-8 md:px-12 pb-8 md:pb-12">
              <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-xl md:rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/5 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};