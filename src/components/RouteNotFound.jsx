import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import RetroGrid from "./ui/RetroGrid";
import BackgroundBeams from "./ui/BackgroundBeams";

const RouteNotFound = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-sapphire-950 overflow-hidden">
      <RetroGrid />
      <BackgroundBeams />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 glass-card p-12 md:p-16 rounded-[3rem] text-center max-w-2xl border-white/5 shadow-2xl"
      >
        <div className="w-24 h-24 bg-sapphire/10 rounded-full flex items-center justify-center text-sapphire mx-auto mb-10 shadow-inner group">
          <AlertTriangle size={48} className="animate-pulse" />
        </div>

        <h1 className="text-8xl md:text-9xl font-black text-gradient tracking-tighter mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase tracking-widest">Architectural Void</h2>
        
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          The coordinate you're looking for doesn't exist in this matrix. 
          It might have been shifted or decommissioned.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 px-10 py-4 bg-sapphire text-white text-lg font-bold rounded-2xl shadow-xl shadow-sapphire/20 hover:shadow-sapphire/40 transition-all hover:scale-105 active:scale-95 group"
        >
          <Home size={20} />
          Return to HQ
          <ArrowLeft size={20} className="opacity-70 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="absolute bottom-10 text-[10px] text-slate-700 uppercase tracking-[0.4em] font-black pointer-events-none">
        System Error // Invalid Route Access
      </div>
    </div>
  );
};

export default RouteNotFound;