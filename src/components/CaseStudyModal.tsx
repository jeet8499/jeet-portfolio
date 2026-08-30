import React from 'react';
import type { Project } from '../data/projects'; // <-- THE FIX: Added "type" here
import { X, ArrowUpRight } from 'lucide-react';

interface Props {
  project: Project;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<Props> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#101010]/95 backdrop-blur-md overflow-y-auto p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-12 pb-24">
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <div className="font-mono text-xs text-zinc-500 uppercase">CASE STUDY / {project.number}</div>
          <button 
            onClick={onClose} 
            className="p-2 text-zinc-400 hover:text-white border border-white/10 bg-[#18181A] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div>
          <h2 className="font-serif text-5xl sm:text-6xl text-white mb-2">{project.title}</h2>
          <p className="font-mono text-sm text-[#0000EE]">{project.tagline}</p>
        </div>

        <div className="w-full aspect-[16/9] overflow-hidden border border-white/10">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500">01 — The Problem</h4>
            <p className="text-zinc-300 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500">02 — The Approach</h4>
            <p className="text-zinc-300 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="space-y-3 border-t border-white/10 pt-8">
          <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-500">03 — Key Results</h4>
          <ul className="space-y-2">
            {project.results.map((res, i) => (
              <li key={i} className="font-mono text-xs text-zinc-300 flex items-center gap-2">
                <span className="text-[#0000EE]">•</span> {res}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center border-t border-white/10 pt-8 font-mono text-xs">
          <span className="text-zinc-500">{project.metrics}</span>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noreferrer"
            className="bg-white text-black hover:bg-zinc-200 px-5 py-2.5 font-medium flex items-center gap-2 transition-colors"
          >
            VIEW SOURCE CODE <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};