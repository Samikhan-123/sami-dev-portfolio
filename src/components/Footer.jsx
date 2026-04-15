import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, link: "https://github.com/Samikhan-123" },
    { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/muhammad-samiullah-khan-00323823a/" },
    { icon: <Twitter size={18} />, link: "https://twitter.com/SAMIIKHANNN" },
    { icon: <Instagram size={18} />, link: "https://www.instagram.com/sami_khannn_?igsh=bDy0ZzVjbnJ0oNWFh" },
    { icon: <Mail size={18} />, link: "mailto:isamikhan.dev@gmail.com" },
  ];

  return (
    <footer className="glass-nav py-10 relative z-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-bold text-gradient uppercase tracking-tighter">Sami Khan</h3>
            <p className="text-sm text-slate-500 mt-1">MERN Expert</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <p className="text-sm text-slate-400 font-medium tracking-wide">
              Copyright © {year} <span className="text-sapphire">samikhan.dev</span>
            </p>
            <div className="flex items-center gap-1 text-[10px] text-slate-600 uppercase font-bold tracking-[0.2em] mt-2 justify-center">
            </div>
          </motion.div>

          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-sapphire hover:bg-sapphire/10 border-white/5 transition-all shadow-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
