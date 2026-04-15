import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Briefcase, 
  Code2, 
  Mail, 
  Menu, 
  X 
} from "lucide-react";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY >= 10);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <User size={18} /> },
    { name: "Services", path: "/services", icon: <Briefcase size={18} /> },
    { name: "Projects", path: "/project", icon: <Code2 size={18} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gradient tracking-tighter uppercase">
            Sami Khan
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                relative flex items-center gap-2 text-sm font-medium transition-all duration-300
                ${isActive ? 'text-sapphire' : 'text-slate-300 hover:text-white'}
              `}
            >
              <span className="opacity-70">{link.icon}</span>
              {link.name}
              {({ isActive }) => (
                isActive && (
                  <motion.div 
                    layoutId="nav-glow"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-sapphire shadow-[0_0_8px_rgba(14,165,233,0.8)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setExpand(!expand)}
        >
          {expand ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {expand && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed top-20 left-6 right-6 z-40 glass-nav backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setExpand(false)}
                  className={({ isActive }) => `
                    flex items-center gap-5 text-xl font-bold p-4 rounded-2xl transition-all
                    ${isActive ? 'bg-sapphire/20 text-white border border-sapphire/30' : 'text-slate-400 hover:bg-white/5'}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? 'text-sapphire' : ''}>{link.icon}</span>
                      {link.name}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
