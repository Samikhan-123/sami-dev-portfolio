import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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

function App() {
  return (
    <HelmetProvider>
      <Router>
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

          <main className="relative z-10">
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
      </Router>
    </HelmetProvider>
  );
}

export default App;
