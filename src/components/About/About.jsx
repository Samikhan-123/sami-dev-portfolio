import React from "react";
import { motion } from "framer-motion";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import RetroGrid from "../ui/RetroGrid";
import BackgroundBeams from "../ui/BackgroundBeams";

function About() {
  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-sapphire-950">
      <RetroGrid />
      <BackgroundBeams />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-7/12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">
              ABOUT <span className="text-gradient">ME</span>
            </h2>
            <Aboutcard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="md:w-5/12 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-sapphire/20 blur-[80px] group-hover:bg-sapphire/40 transition-colors duration-1000" />
              <img
                src={laptopImg}
                alt="about"
                className="relative z-10 w-full max-w-sm drop-shadow-2xl animate-pulse-slow"
              />
            </div>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wide border-l-4 border-sapphire pl-6">
            Skills <span className="text-sapphire">I Work With</span>
          </h2>
          <Techstack />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wide border-l-4 border-sapphire pl-6">
            Tools <span className="text-sapphire">I Use</span>
          </h2>
          <Toolstack />
        </motion.section>

        <Github />
      </div>
    </div>
  );
}

export default About;
