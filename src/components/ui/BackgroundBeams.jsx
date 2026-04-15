import React from "react";
import { motion } from "framer-motion";

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[600px] w-[2px] bg-gradient-to-b from-transparent via-sapphire to-transparent"
          initial={{ 
            top: "-100%", 
            left: `${15 + i * 20}%`, 
            opacity: 0,
            rotate: 15
          }}
          animate={{ 
            top: "100%", 
            opacity: [0, 0.3, 0] 
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 3,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBeams;
