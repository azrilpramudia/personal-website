"use client";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Terminal } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Development_Stack",
      icon: <Code2 className="text-[#8aadf4]" size={20} />,
      skills: ["React", "JavaScript (ES6+)", "TypeScript", "Node.js", "Prisma"],
      color: "text-[#8aadf4]",
    },
    {
      title: "UI_&_Styling",
      icon: <Layout className="text-[#ed8796]" size={20} />,
      skills: ["Tailwind CSS", "Shadcn/ui", "DaisyUI", "HTML5", "CSS3"],
      color: "text-[#ed8796]",
    },
    {
      title: "Database_Management",
      icon: <Database className="text-[#c6a0f6]" size={20} />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
      color: "text-[#c6a0f6]",
    },
    {
      title: "Infra_&_Systems",
      icon: <Terminal className="text-[#a6da95]" size={20} />,
      skills: [
        "Docker",
        "Linux (Mint/XFCE)",
        "Network Fundamentals",
        "Bash Scripting",
      ],
      color: "text-[#a6da95]",
    },
  ];

  return (
    <section id="skills" className="min-h-screen bg-[#1e2030] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="mb-16 space-y-4">
          <h3 className="text-[#a6da95] font-mono text-xs tracking-[0.3em] uppercase italic">
            02. Expertise
          </h3>
          <h2 className="text-4xl font-bold text-[#cad3f5]">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-[#8aadf4] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* SISI KIRI: Description Card */}
          <div className="md:col-span-4 self-start">
            <div className="bg-[#363a4f] p-8 rounded-2xl border border-[#494d64] shadow-xl space-y-6">
              <p className="text-[#a5adcb] leading-relaxed">
                I focus on building{" "}
                <span className="text-[#8aadf4]">performant web apps</span>{" "}
                while maintaining a
                <span className="text-[#a6da95]"> solid infrastructure</span>.
                My workflow is heavily inspired by the efficiency of
                terminal-based environments.
              </p>
              <div className="pt-4 border-t border-[#494d64]">
                <span className="text-[10px] font-bold text-[#eed49f] tracking-widest uppercase">
                  Learning Philosophy:
                </span>
                <p className="text-sm text-[#91d7e3] mt-2 italic">
                  "Depth over breadth. Understanding the core over following the
                  hype."
                </p>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Terminal-style Skill List */}
          <div className="md:col-span-8 bg-[#24273a] rounded-2xl border border-[#494d64] overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#363a4f] px-6 py-4 border-b border-[#494d64] flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ed8796]"></div>
                <div className="w-3 h-3 rounded-full bg-[#eed49f]"></div>
                <div className="w-3 h-3 rounded-full bg-[#a6da95]"></div>
              </div>
              <span className="text-[#a5adcb] font-mono text-xs opacity-60 tracking-wider">
                skills.json — Read-only
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 font-mono">
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3">
                    {cat.icon}
                    <h4
                      className={`text-sm font-bold tracking-wider ${cat.color}`}
                    >
                      {cat.title}
                    </h4>
                  </div>

                  <ul className="space-y-2 border-l border-[#494d64] ml-2.5 pl-5">
                    {cat.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="text-[#cad3f5] text-sm flex items-center gap-2 group cursor-default"
                      >
                        <span className="text-[#a5adcb] opacity-30 group-hover:opacity-100 group-hover:text-[#a6da95] transition-all">
                          -
                        </span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="bg-[#1e2030] px-8 py-4 border-t border-[#494d64] flex items-center gap-3 font-mono text-xs">
              <span className="text-[#a6da95]">➜</span>
              <span className="text-[#8aadf4]">~</span>
              <div className="flex items-center gap-2">
                <span className="text-[#cad3f5]">capacity:</span>
                <span className="text-[#a6da95] animate-pulse italic">
                  full_speed_learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
