import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import RetroGrid from "../ui/RetroGrid";
import BackgroundBeams from "../ui/BackgroundBeams";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern developer portfolio built to showcase my work, skills, and projects. Designed with a focus on performance, clean UI, and smooth user experience, along with a fully functional contact system.",
      imgPath: "/sami-portfolio.png",
      ghLink: "https://github.com/Samikhan-123/sami-dev-portfolio",
      demoLink: "https://samikhan-dev.vercel.app",
      tags: ["React", "Tailwind", "Framer Motion", "EmailJS"],
      featured: true,
    },
    {
      title: "ApnaKhata Financial Client",
      description:
        "A financial management web app focused on simplicity and usability. It helps users track transactions, manage records, and understand their financial flow through a clean and interactive interface.",
      imgPath: "/ApnaKhata.png",
      ghLink: "https://github.com/Samikhan-123/apnakhata-client",
      demoLink: "https://apnakhata.online",
      tags: ["Next.js", "Tailwind", "Framer Motion", "Recharts"],
      featured: true,
    },
    {
      title: "ApnaKhata Backend System",
      description:
        "The backend system that powers the ApnaKhata platform. It handles data processing, authentication, and secure transaction management with a clean and scalable architecture.",
      imgPath: "/ApnaKhata-backend.png",
      ghLink: "https://github.com/Samikhan-123/apnakhata-server",
      tags: ["Node.js", "Express", "Prisma", "PostgreSQL"],
      featured: false,
    },
  ];

  return (
    <div className="relative min-h-screen py-32 overflow-hidden bg-sapphire-950">
      <RetroGrid />
      <BackgroundBeams />

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
            My <span className="text-gradient">Work</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are some of the projects I’ve worked on — focused on real-world
            use cases, clean design, and performance.
          </p>
        </motion.div>

        {/* PROJECTS */}
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
