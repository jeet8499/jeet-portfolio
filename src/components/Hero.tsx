import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full aspect-[4/5] md:aspect-[21/10] bg-gradient-to-b from-[#18181A] to-[#0D0D0D] rounded-2xl md:rounded-[24px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
      
      {/* MAC TITLE BAR */}
      <div className="h-12 flex items-center px-5 relative w-full border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20"></div>
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/20"></div>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 relative">
        
        {/* Soft White Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] bg-white/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

        {/* Glowing Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-[5.5rem] lg:text-[7rem] font-medium leading-[0.9] tracking-[-0.04em] text-white relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          I build intelligent <br />
          systems, logic & <br />
          <span className="font-serif italic text-zinc-300 font-light tracking-normal drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">algorithms.</span>
        </motion.h1>

        {/* Right-Aligned Subtitle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 md:mt-20 flex justify-end w-full relative z-10"
        >
          <div className="text-right text-[15px] md:text-[17px] tracking-tight">
            <p className="text-white font-medium">Computer Engineer. Based in Pune.</p>
            <p className="text-zinc-500">Machine Learning & Software Architecture.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};