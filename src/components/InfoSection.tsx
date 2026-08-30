import React from 'react';
import { motion } from 'framer-motion';

export const InfoSection: React.FC = () => {
  return (
    <section id="info" className="w-full pt-40 pb-32 relative border-t border-white/5">
      
      {/* HEADER AREA */}
      <div className="relative mb-24 md:mb-32">
        {/* The Dot & "About Me" */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em]">About Me</span>
        </div>

        {/* The Massive Glowing Typography */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[60%] h-[80%] bg-white/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-[5rem] lg:text-[6rem] font-medium leading-[1.05] tracking-[-0.03em] text-white relative z-10"
          >
            I'm passionate about building <br className="hidden md:block" />
            intelligent systems that <br className="hidden md:block" />
            <span className="font-serif italic text-zinc-300 font-light drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">solve real problems.</span>
          </motion.h2>
        </div>
      </div>

      {/* THE STAGGERED EDITORIAL GRID (From 4th.jpg) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        
        {/* LEFT COLUMN: Wide Image + Background Story */}
        <div className="md:col-span-7 space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[4/3] rounded-2xl md:rounded-[24px] overflow-hidden bg-[#111] border border-white/10 relative shadow-2xl"
          >
            {/* Placeholder: Jungle/Nature landscape */}
            <img 
              src="profile-wide.png"
              alt="Forest Valley" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          {/* Engineering Background Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md space-y-6"
          >
            <h3 className="text-xl text-white font-medium tracking-tight">My background in Engineering.</h3>
            <div className="space-y-6 text-zinc-400 text-[15px] leading-relaxed">
              <p>
                I am currently studying Computer Engineering at Savitribai Phule Pune University. There, I became obsessed with machine learning, algorithms, and software architecture.
              </p>
              <p>
                I was deeply fascinated by the concepts of modularity and adaptability — how neural networks and intelligent models could be built to overcome complex real-world constraints. Recently, I've been participating in initiatives like the Meta PyTorch OpenEnv Hackathon and completing an ML internship at ClinchEdge Global Services.
              </p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Offset Text + Tall Portrait Image */}
        <div className="md:col-span-5 flex flex-col pt-12 md:pt-40 space-y-12">
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-[17px] leading-relaxed max-w-[300px]"
          >
            This is my story — alongside some Tech, Algorithms, Trading & Video-Editing.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full aspect-[3/4] rounded-2xl md:rounded-[24px] overflow-hidden bg-[#111] border border-white/10 relative shadow-2xl"
          >
            {/* Placeholder: Jungle Trek Portrait */}
            <img 
              src="profile-ver.png"
              alt="Tech-Exploration" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};