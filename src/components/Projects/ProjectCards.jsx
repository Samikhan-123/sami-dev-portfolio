import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

function ProjectCards(props) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`glass-card h-full flex flex-col rounded-3xl overflow-hidden group border border-white/5 hover:border-sapphire/30 transition-all duration-500 shadow-2xl hover:shadow-sapphire/20`}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={props.imgPath} 
          alt={props.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sapphire-950 via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-sapphire transition-colors">
          {props.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {props.tags?.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md text-slate-400">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
          {props.description}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 transition-all"
          >
            <Github size={18} />
            GitHub
          </a>

          {props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sapphire text-white text-sm font-bold shadow-lg shadow-sapphire/20 hover:shadow-sapphire/40 group/btn transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <Sparkles size={16} className="animate-pulse" />
              Demo
              <ExternalLink size={16} className="opacity-70" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCards;
