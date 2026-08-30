import  { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { InfoSection } from './components/InfoSection';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'work' | 'info'>('work');

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2] font-sans relative selection:bg-white/20 pb-32">
      
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="pt-40 px-4 md:px-12 flex flex-col items-center w-full max-w-[1400px] mx-auto space-y-32">
        
        {/* THE MAGIC: AnimatePresence allows components to animate OUT before disappearing */}
        <AnimatePresence mode="wait">
          
          {currentView === 'work' ? (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full space-y-32"
            >
              <Hero />
              <WorkSection />
            </motion.div>
          ) : (
            <motion.div
              key="info"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full"
            >
              <InfoSection />
            </motion.div>
          )}

        </AnimatePresence>

      </main>
      
      <Analytics />
    </div>
  );
}