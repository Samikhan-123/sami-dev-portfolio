import React from "react";
import { Sparkles, Terminal, Plane, Gamepad2, PenTool } from "lucide-react";

function AboutCard() {
  const activities = [
    { text: "Playing competitive games", icon: <Gamepad2 size={18} /> },
    { text: "Writing about tech & development", icon: <PenTool size={18} /> },
    { text: "Exploring new places", icon: <Plane size={18} /> },
  ];

  return (
    <div className="glass-card p-10 rounded-3xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 text-sapphire/20 group-hover:text-sapphire/40 transition-colors">
        <Terminal size={120} />
      </div>

      <div className="relative z-10 space-y-6">
        <p className="text-xl text-slate-300 leading-relaxed text-justify">
          Hi, I'm <span className="text-sapphire font-bold">Sami Khan</span>{" "}
          from{" "}
          <span className="text-sapphire font-bold underline decoration-sapphire/30 underline-offset-4">
            Pakistan
          </span>
          .
          <br />
          <br />
          I’m a full-stack developer who enjoys building real-world web
          applications — from simple websites to complete systems.
          <br />
          <br />
          I focus on writing clean code, building fast interfaces, and making
          sure everything works smoothly from frontend to backend.
          <br />
          <br />
          Currently pursuing a{" "}
          <span className="text-sapphire font-medium italic">
            BS in Computer Science
          </span>
          , I’m constantly improving my skills and working on practical
          projects.
        </p>

        <div className="pt-6">
          <p className="text-white font-bold mb-6 flex items-center gap-2">
            <Sparkles size={18} className="text-sapphire" />
            Outside of coding, I enjoy:
          </p>

          <ul className="space-y-4">
            {activities.map((activity, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-sapphire">
                  {activity.icon}
                </span>
                {activity.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-10">
          <blockquote className="border-l-4 border-sapphire pl-6 py-2">
            <p className="text-sapphire font-bold italic text-lg mb-2">
              "Simple code is better than clever code."
            </p>
            <footer className="text-slate-500 text-sm font-medium">
              — Developer mindset
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
