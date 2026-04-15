import React from "react";
import { 
  SiVisualstudiocode, 
  SiPostman, 
  SiVercel,
  SiNetlify,
  SiDocker
} from "react-icons/si";
import { motion } from "framer-motion";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiDocker />, name: "Docker" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12">
      {tools.map((tool, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, borderColor: "rgba(14, 165, 233, 0.4)" }}
          className="glass-card flex flex-col items-center justify-center p-8 rounded-3xl group transition-all duration-300 border border-white/5 shadow-xl hover:shadow-sapphire/20"
        >
          <div className="text-6xl text-slate-400 group-hover:text-sapphire transition-colors duration-300">
            {tool.icon}
          </div>
          <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
            {tool.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default Toolstack;
