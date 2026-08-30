import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentView: 'work' | 'info';
  setCurrentView: (view: 'work' | 'info') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  
  const handleTabClick = (view: 'work' | 'info') => {
    setCurrentView(view);
    // CHANGED: 'auto' snaps instantly, letting Framer Motion handle the smooth visual transition
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-8 flex justify-between items-start z-50 pointer-events-none">
      
      {/* Left: Name */}
      <div className="pointer-events-auto leading-tight">
        <h1 className="font-medium text-white tracking-tight">Jeet Choudhari</h1>
        <p className="text-zinc-500 text-[13px]">Computer Engineer</p>
      </div>

      {/* Center: The Interactive Sliding Pill */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 top-8 flex items-center bg-[#18181A]/90 backdrop-blur-xl border border-white/5 rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* WORK TAB */}
        <button 
          onClick={() => handleTabClick('work')}
          className="relative px-6 py-2 rounded-full flex items-center justify-center transition-colors"
        >
          {currentView === 'work' && (
            <>
              <motion.div 
                layoutId="navGlow" 
                className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-5 h-[2px] bg-white rounded-full shadow-[0_2px_12px_2px_rgba(255,255,255,0.9)]" 
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <motion.div 
                layoutId="navBg" 
                className="absolute inset-0 bg-white/10 rounded-full" 
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </>
          )}
          <span className={`relative z-10 text-[13px] font-medium ${currentView === 'work' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}>
            Work
          </span>
        </button>

        {/* INFO TAB */}
        <button 
          onClick={() => handleTabClick('info')}
          className="relative px-6 py-2 rounded-full flex items-center justify-center transition-colors"
        >
          {currentView === 'info' && (
            <>
              <motion.div 
                layoutId="navGlow" 
                className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-5 h-[2px] bg-white rounded-full shadow-[0_2px_12px_2px_rgba(255,255,255,0.9)]" 
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <motion.div 
                layoutId="navBg" 
                className="absolute inset-0 bg-white/10 rounded-full" 
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </>
          )}
          <span className={`relative z-10 text-[13px] font-medium ${currentView === 'info' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}`}>
            Info
          </span>
        </button>

      </div>
      
      {/* Right: Links */}
      <div className="pointer-events-auto flex gap-6 text-[13px] text-white font-medium">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
          LinkedIn <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-zinc-300 transition-colors">
          Resume <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>
      </div>
    </header>
  );
};