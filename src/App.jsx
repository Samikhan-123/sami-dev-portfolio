import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RouteNotFound from "./components/RouteNotFound";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";

import "./index.css";
import "./App.css";

function AppContent() {
  const location = useLocation();

  const routeMeta = {
    "/": {
      title: "Sami Khan | Full Stack Developer",
      description:
        "Sami Khan is a full-stack developer building modern, high-performance web experiences with React, Node.js, and clean UI design.",
    },
    "/project": {
      title: "Projects | Sami Khan",
      description:
        "Explore Sami Khan's recent web development projects, including modern portfolios, SaaS-style products, and full-stack applications.",
    },
    "/about": {
      title: "About | Sami Khan",
      description:
        "Learn more about Sami Khan's background, expertise, and approach to building thoughtful digital products.",
    },
    "/services": {
      title: "Services | Sami Khan",
      description:
        "Discover web development, UI/UX, and product-building services tailored for startups and growing businesses.",
    },
    "/contact": {
      title: "Contact | Sami Khan",
      description:
        "Get in touch with Sami Khan for freelance work, collaboration, or a new product build.",
    },
  }[location.pathname] || {
    title: "Sami Khan | Full Stack Developer",
    description:
      "Sami Khan is a full-stack developer building modern, high-performance web experiences with React, Node.js, and clean UI design.",
  };

  return (
    <>
      <Helmet>
        <title>{routeMeta.title}</title>
        <meta name="description" content={routeMeta.description} />
        <meta
          name="keywords"
          content="Sami Khan, full stack developer, React developer, portfolio website, web app development"
        />
        <meta property="og:title" content={routeMeta.title} />
        <meta property="og:description" content={routeMeta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samikhan.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={routeMeta.title} />
        <meta name="twitter:description" content={routeMeta.description} />
      </Helmet>

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className="bg-sapphire-950 min-h-screen text-white selection:bg-sapphire/30 selection:text-white">
        <Loader />
        <Navbar />
        <ScrollToTop />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#0f172a",
              color: "#fff",
              border: "1px solid #334155",
              borderRadius: "12px",
              padding: "12px 20px",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />

        <main id="main-content" className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<RouteNotFound />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
