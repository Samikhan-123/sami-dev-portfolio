import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card h-full flex flex-col p-10 rounded-[2.5rem] border border-white/5 hover:border-sapphire/30 transition-all duration-500 group shadow-2xl hover:shadow-sapphire/20 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 text-sapphire/5 group-hover:text-sapphire/10 transition-colors pointer-events-none">
        {React.cloneElement(service.icon, { size: 140 })}
      </div>

      <div className="relative z-10 flex-grow">
        <div className="w-16 h-16 bg-sapphire/10 rounded-2xl flex items-center justify-center text-sapphire mb-8 group-hover:bg-sapphire group-hover:text-white transition-all duration-300 shadow-inner">
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-sapphire transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
          {service.description}
        </p>

        <div className="space-y-6">
          <div className="space-y-3">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Key Features</h6>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-300 text-sm font-medium group/item">
                  <CheckCircle2 size={16} className="text-sapphire opacity-70 group-hover/item:opacity-100 transition-opacity" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-white/5">
            <h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Tech Stack</h6>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-white/5 rounded-full text-[11px] font-semibold text-slate-400 group-hover:bg-sapphire/20 group-hover:text-white transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
