import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

function Github() {
  const sapphireTheme = {
    dark: ['#0e1629', '#075985', '#0369a1', '#0ea5e9', '#38bdf8'],
    light: ['#f5f7ff', '#0ea5e9', '#0284c7', '#0369a1', '#075985'],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center py-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wide border-l-4 border-sapphire pl-6 self-start w-full">
        Days I <span className="text-sapphire">Code</span>
      </h2>
      
      <div className="glass-card p-10 rounded-3xl w-full overflow-hidden flex justify-center border border-white/5 shadow-2xl">
        <GitHubCalendar
          username="samikhan-123"
          blockSize={15}
          blockMargin={6}
          theme={sapphireTheme}
          fontSize={14}
        />
      </div>
    </motion.div>
  );
}

export default Github;
