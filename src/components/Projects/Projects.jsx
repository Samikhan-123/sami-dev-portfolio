import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import RetroGrid from "../ui/RetroGrid";
import BackgroundBeams from "../ui/BackgroundBeams";

function Projects() {
  const projects = [
    {
      title: "ApnaKhata Financial Client",
      description:
        "A sophisticated financial management interface designed for clarity and precision. Engineered with a focus on real-time data visualization and a seamless user journey, it empowers users to take full control of their financial flow through intuitive ledger management and interactive analytics.",
      imgPath: "/ApnaKhata.png",
      ghLink: "https://github.com/Samikhan-123/apnakhata-client",
      demoLink: "https://apnakhata.online",
      tags: ["Next.js", "Tailwind", "Framer Motion", "Recharts"],
      featured: true,
    },
    {
      title: "ApnaKhata Core Engine (Server)",
      description:
        "The industrial-strength backbone of the ApnaKhata ecosystem. This robust financial engine handles complex transaction processing, automated Transaction Records, and multi-tenant security with enterprise-grade reliability, ensuring every cent is accounted for with absolute precision.",
      imgPath: "/ApnaKhata-backend.png",
      ghLink: "https://github.com/Samikhan-123/apnakhata-server",
      // demoLink: "https://apnakhata.online",
      tags: ["Node.js", "Express", "Prisma", "PostgreSQL", "Zod"],
      featured: false,
    },
  ];

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-sapphire-950">
      <RetroGrid />
      <BackgroundBeams />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
            Signature <span className="text-gradient"> Solutions </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A deep dive into the architectures I've built. Highlighting full-stack 
            precision, architectural integrity, and elite user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
