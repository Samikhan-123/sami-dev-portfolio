import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
} from "lucide-react";
import RetroGrid from "../ui/RetroGrid";
import BackgroundBeams from "../ui/BackgroundBeams";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error on typing
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  // =========================
  // VALIDATION
  // =========================
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // HANDLE SUBMIT
  // =========================
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  // Honeypot
  if (formData.company) return;

  // Rate limit
  const lastSent = localStorage.getItem("lastEmailTime");
  const now = Date.now();

  if (lastSent && now - lastSent < 60000) {
    toast("⏳ Please wait 1 minute before sending again.");
    return;
  }

  setIsSubmitting(true);

  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const adminTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const autoReplyTemplateId = import.meta.env
      .VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Send emails
    await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);
    await emailjs.send(
      serviceId,
      autoReplyTemplateId,
      templateParams,
      publicKey,
    );

    // Success UX
    toast.success("🚀 Message sent successfully! I'll reply soon.");

    // Rate limit set
    localStorage.setItem("lastEmailTime", now);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  } catch (error) {
    console.error(error);
    toast.error("❌ Failed to send message. Try again later.");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      content: "isamikhan.dev@gmail.com",
      link: "mailto:isamikhan.dev@gmail.com",
    },
    {
      icon: <Phone />,
      title: "Available For",
      content: "Full-time & Freelance",
      link: null,
    },
    {
      icon: <MapPin />,
      title: "Location",
      content: "Remote / On-site",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: <Github />, link: "https://github.com/Samikhan-123" },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/muhammad-samiullah-khan-00323823a/",
    },
    { icon: <Twitter />, link: "https://twitter.com/SAMIIKHANNN" },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/sami_khannn_?igsh=bDy0ZzVjbnJ0oNWFh",
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight uppercase">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life with elite engineering.
          </p>
          <div className="w-24 h-1 bg-sapphire mx-auto mt-8 rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="glass-card p-10 rounded-[2rem] h-full flex flex-col border-white/5 shadow-2xl">
              <h3 className="text-2xl font-bold mb-10 border-l-4 border-sapphire pl-6">
                Contact Info
              </h3>

              <div className="space-y-10 flex-grow">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-sapphire group-hover:bg-sapphire group-hover:text-white transition-all shadow-inner">
                      {info.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">
                        {info.title}
                      </h5>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-sapphire transition-colors font-medium underline underline-offset-4 decoration-white/10"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <h5 className="text-xs font-bold text-sapphire uppercase tracking-[0.3em] mb-6">
                  Connect With Me
                </h5>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-sapphire/20 border-white/5 transition-all"
                    >
                      {React.cloneElement(social.icon, { size: 18 })}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="glass-card p-10 rounded-[2rem] shadow-2xl border-white/5 relative overflow-hidden">
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-6 right-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-6 py-3 rounded-2xl flex items-center gap-3 z-50 backdrop-blur-xl"
                  >
                    <CheckCircle size={20} />✅ Message sent! I'll reply within
                    24 hours.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* GLOBAL ERROR */}
              {errors.submit && (
                <div className="text-red-400 bg-red-500/10 p-3 rounded-xl mb-4">
                  {errors.submit}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="company"
                      value={formData.company || ""}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="w-full bg-white/5 border border-white/5 focus:border-sapphire/50 rounded-2xl p-4 text-white"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abc@gmail.com"
                      className="w-full bg-white/5 border border-white/5 focus:border-sapphire/50 rounded-2xl p-4 text-white"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-white/5 focus:border-sapphire/50 rounded-2xl p-4 text-white"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/5 focus:border-sapphire/50 rounded-2xl p-4 text-white"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-sapphire text-white font-bold rounded-2xl flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Launch Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
