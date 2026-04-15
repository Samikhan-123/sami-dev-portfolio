import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket,
  Link as LinkIcon,
  Layout,
  Database,
  Cloud,
  Lightbulb,
  Mail,
} from "lucide-react";
import RetroGrid from "../ui/RetroGrid";
import BackgroundBeams from "../ui/BackgroundBeams";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Website & Web App Development",
      description:
        "I build complete websites and web applications — from simple landing pages to full systems — that are fast, clean, and easy to use.",
      icon: <Rocket size={24} />,
      features: [
        "Responsive design (mobile + desktop)",
        "Fast loading speed",
        "Clean UI & smooth UX",
        "End-to-end development",
      ],
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Backend & API Development",
      description:
        "Need a backend for your app? I create secure and reliable APIs that handle your data smoothly and efficiently.",
      icon: <LinkIcon size={24} />,
      features: [
        "REST API development",
        "Authentication (JWT)",
        "Data validation",
        "Clean structure",
      ],
      technologies: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Frontend Development",
      description:
        "I design and develop modern user interfaces that feel smooth, fast, and easy to interact with.",
      icon: <Layout size={24} />,
      features: [
        "Modern UI design",
        "Animations (Framer Motion)",
        "Responsive layouts",
        "Performance focused",
      ],
      technologies: ["React", "Tailwind CSS"],
    },
    {
      id: 4,
      title: "Database Setup",
      description:
        "I structure and manage your data properly so your application stays fast and reliable as it grows.",
      icon: <Database size={24} />,
      features: [
        "Database design",
        "Efficient queries",
        "Scalable structure",
        "Data handling",
      ],
      technologies: ["MongoDB", "PostgreSQL"],
    },
    {
      id: 5,
      title: "Deployment & Hosting",
      description:
        "I deploy your project so it’s live, secure, and accessible — with proper setup and performance.",
      icon: <Cloud size={24} />,
      features: [
        "Vercel deployment",
        "Domain setup",
        "SSL & security",
        "Performance optimization",
      ],
      technologies: ["Vercel", "Netlify"],
    },
    {
      id: 6,
      title: "Project Guidance",
      description:
        "If you're confused about how to start or scale your project, I can guide you with the right approach and tech decisions.",
      icon: <Lightbulb size={24} />,
      features: [
        "Project planning",
        "Tech selection",
        "Code improvements",
        "Best practices",
      ],
      technologies: ["MERN", "System Design"],
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
          className="text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
            What I <span className="text-gradient">Can Do</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I help turn ideas into real, working web applications — focusing on
            performance, clean design, and user experience.
          </p>

          <div className="w-24 h-1 bg-sapphire mx-auto mt-8 rounded-full" />
        </motion.div>

        {/* SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 glass-card p-12 rounded-[2rem] text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Have an idea in mind?
          </h3>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Let’s discuss your project and see how we can turn it into something
            real.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-sapphire text-white font-bold rounded-2xl hover:scale-105 transition"
          >
            Get In Touch
            <Mail size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
