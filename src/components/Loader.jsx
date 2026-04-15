import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RetroGrid from "./ui/RetroGrid";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timer;
    const onReady = () => {
      setProgress(100);
      clearInterval(timer);
      setTimeout(() => setIsVisible(false), 800);
    };

    const simulateProgress = () => {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) {
            clearInterval(timer);
            return 95;
          }
          const increment = Math.random() * 15 + 10;
          return Math.min(prev + increment, 95);
        });
      }, 200);
    };

    if (document.readyState === "complete") {
      onReady();
    } else {
      simulateProgress();
      window.addEventListener("load", onReady);
    }

    const fallback = setTimeout(onReady, 4000);

    return () => {
      clearInterval(timer);
      clearTimeout(fallback);
      window.removeEventListener("load", onReady);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-sapphire-950 flex flex-col items-center justify-center overflow-hidden"
        >
          <RetroGrid />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="text-4xl md:text-5xl font-black text-gradient tracking-tighter uppercase mb-12"
            >
              Sami Khan
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden relative border border-white/10 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-sapphire shadow-[0_0_20px_rgba(14,165,233,0.8)] rounded-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-beam" />
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]"
            >
              <span className="w-2 h-2 rounded-full bg-sapphire animate-ping" />
              Architecting Digital Excellence
            </motion.div>
          </div>

          <div className="absolute bottom-10 text-[8px] text-slate-700 uppercase tracking-[0.2em] font-medium">
            System Initialization v2.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
