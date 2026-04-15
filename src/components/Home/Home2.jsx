import React from "react";
import { motion } from "framer-motion";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const expertise = [
    { title: "MongoDB", desc: "Database design, query optimization, and management." },
    { title: "Express.js", desc: "Building scalable RESTful APIs and server-side apps." },
    { title: "React.js", desc: "Dynamic UIs, state management, and performance." },
    { title: "Node.js", desc: "Asynchronous programming and network applications." },
    { title: "Modern JavaScript", desc: "ES6+, async/await, and modular programming." },
    { title: "UI/UX Design", desc: "Responsive design, accessibility, and modern CSS." },
  ];

  return (
    <section className="py-20 bg-sapphire-950 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="md:w-2/3"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight"
            >
              LET ME <span className="text-sapphire"> INTRODUCE </span> MYSELF
            </motion.h1>
            
            <motion.div 
              variants={itemVariants}
              className="text-slate-400 text-lg leading-relaxed space-y-6"
            >
              <p>
                Hello! I'm <span className="text-sapphire font-semibold">Sami Khan</span>, a passionate{" "}
                <span className="text-sapphire font-semibold">MERN Stack Developer</span> with over a year of 
                hands-on experience building modern, scalable web applications.
              </p>
              
              <p>
                My expertise spans the entire MERN stack—from crafting responsive React interfaces 
                to building robust Node.js backends and designing efficient MongoDB databases.
              </p>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-sapphire pl-4">
                  Core Expertise
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {expertise.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="glass-card p-6 rounded-2xl group transition-all"
                    >
                      <h4 className="text-sapphire font-bold mb-2 group-hover:text-white transition-colors">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-slate-500 leading-snug">
                        {skill.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <p className="mt-10 italic">
                I'm always eager to take on new challenges and collaborate on exciting projects. 
                If you're looking for a developer who combines technical expertise with a passion 
                for excellence, let's connect!
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <Tilt className="relative">
              <div className="absolute inset-0 bg-sapphire/20 blur-[60px] rounded-full" />
              <img src={myImg} className="relative z-10 w-72 h-72 md:w-96 md:h-96" alt="avatar" />
            </Tilt>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 uppercase">Find Me On</h2>
          <p className="text-slate-400 mb-8 font-medium">
            Feel free to <span className="text-sapphire">connect </span>with me
          </p>
          <div className="flex justify-center gap-6">
            {[
              { icon: <AiFillGithub />, link: "https://github.com/Samikhan-123" },
              { icon: <AiOutlineTwitter />, link: "https://twitter.com/SAMIIKHANNN" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muhammad-samiullah-khan-00323823a/" },
              { icon: <AiFillInstagram />, link: "https://www.instagram.com/sami_khannn_?igsh=bDy0ZzVjbnJ0oNWFh" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, backgroundColor: "#0ea5e9", color: "#fff" }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl text-sapphire transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Home2;
