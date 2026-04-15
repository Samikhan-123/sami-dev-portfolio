import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home1.png";
// import Home2 from "./Home2";
import Type from "./Type";
import RetroGrid from "../ui/RetroGrid";
import BackgroundBeams from "../ui/BackgroundBeams";

function Home() {
  return (
    <section>
      <div
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        id="home"
      >
        {/* Background */}
        <RetroGrid />
        <BackgroundBeams />

        {/* Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sapphire-glow blur-[120px] rounded-full z-0 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi There!{" "}
                <span className="inline-block animate-bounce">👋🏻</span>
              </h1>

              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                I'M <span className="text-gradient">SAMI KHAN</span>
              </h1>

              {/* 🔥 HUMANIZED HEADLINE */}
              <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-6">
                I build fast, modern web applications that solve real problems.
              </h2>

              {/* 🔥 HUMANIZED DESCRIPTION */}
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Whether it's a startup idea or a business website, I focus on
                performance, clean design, and a smooth user experience that
                actually delivers results.
              </p>

              {/* 🔥 TYPE TEXT (keep your component) */}
              <div className="h-16 flex items-center text-2xl md:text-3xl mb-8">
                <Type />
              </div>

              {/* 🔥 CTA BUTTONS (IMPORTANT) */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-sapphire text-white font-bold rounded-2xl shadow-xl shadow-sapphire/20 hover:shadow-sapphire/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                >
                  Let's Work Together
                </Link>

                <Link
                  to="/project"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center backdrop-blur-sm"
                >
                  View My Work
                </Link>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-sapphire blur-[100px] opacity-20 hover:opacity-40 transition-opacity duration-1000" />
              <img
                src={homeLogo}
                alt="home pic"
                className="relative z-10 max-h-[450px] drop-shadow-2xl"
                style={{ animation: "float 6s ease-in-out infinite" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* <Home2 /> */}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

export default Home;
