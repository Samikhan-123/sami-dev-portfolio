import React from "react";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiMongodb, 
  DiGit 
} from "react-icons/di";
import { motion } from "framer-motion";

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12">
      {techs.map((tech, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, borderColor: "rgba(14, 165, 233, 0.4)" }}
          className="glass-card flex flex-col items-center justify-center p-8 rounded-3xl group transition-all duration-300 border border-white/5 shadow-xl hover:shadow-sapphire/20"
        >
          <div className="text-6xl text-slate-400 group-hover:text-sapphire transition-colors duration-300">
            {tech.icon}
          </div>
          <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default Techstack;
