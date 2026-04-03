import { useState } from "react";
import { Trophy, Code2, Scale, ChevronDown } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "DATA1901 Project Excellence Award",
    subtitle: "University of Sydney · November 2024",
    status: "Award",
    description: [
      "Recognised for exceptional performance in project work among a cohort of 800+ students.",
      "Demonstrated excellence in data analysis, critical thinking, and innovative problem-solving.",
      "Coursework covers data wrangling, statistical inference, and visualisation in R and Python.",
    ],
    technologies: ["Python", "R", "Data Analysis", "Statistics"],
  },
  {
    icon: Code2,
    title: "Beginner Learning Platform",
    subtitle: "Chinasoft International (CSI) · Dec 2024 – Jan 2025",
    status: "Engineering",
    description: [
      "Contributed to a learning platform aimed at beginner programmers as part of a software engineering internship.",
      "Collected, reviewed, and improved source code to enhance algorithm efficiency and code structure.",
      "Presented core algorithms and technical approaches to the development team.",
    ],
    technologies: ["Algorithms", "Code Review", "Python"],
  },
  {
    icon: Scale,
    title: "AI Contract Law Moot",
    subtitle: "Corrs Chambers Westgarth · September 2025",
    status: "Legal",
    description: [
      "Competed in the Corrs Chambers Westgarth First Year Moot 2025.",
      "Examined contract law issues arising from AI systems — prepared legal arguments and submissions.",
      "Applied principles of offer, acceptance, and liability to novel AI-related fact patterns.",
    ],
    technologies: ["Contract Law", "AI Law", "Advocacy", "Legal Research"],
  },
  {
    icon: Scale,
    title: "Social Token & ESG Compliance Research",
    subtitle: "Clifford Chance · December 2025",
    status: "Legal",
    description: [
      "Advised on Social Token regulation, licensing requirements, and blockchain compliance issues.",
      "Conducted ESG finance research evaluating ethical/green financial products.",
      "Reviewed influencer marketing content against regulatory and ethical standards.",
    ],
    technologies: ["Blockchain Law", "ESG", "Compliance", "RegTech"],
  },
];

const statusColors: Record<string, string> = {
  Award: "#f59e0b",
  Engineering: "#67e8f9",
  Legal: "#a78bfa",
};

export function ProjectsV2() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <div className="flex items-center gap-3">
          <span className="text-[#61dafb]">03.</span>
          <h2 className="text-3xl">Highlights</h2>
          <div className="flex-1 h-px bg-[#61dafb]/20" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const isOpen = expanded === index;
            const statusColor = statusColors[item.status] ?? '#61dafb';

            return (
              <div
                key={index}
                className="border border-[#61dafb]/20 bg-[#050505] hover:border-[#61dafb]/40 transition-colors"
              >
                <button
                  className="w-full p-6 text-left"
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 p-2 border shrink-0"
                      style={{ borderColor: `${statusColor}30`, color: statusColor }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-white text-base leading-snug">{item.title}</h3>
                          <div className="text-white/40 text-xs mt-0.5">{item.subtitle}</div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span
                            className="px-2 py-0.5 text-xs border"
                            style={{ borderColor: `${statusColor}40`, color: statusColor }}
                          >
                            {item.status}
                          </span>
                          <ChevronDown
                            className="h-4 w-4 text-white/40 transition-transform duration-200"
                            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.technologies.map(tech => (
                          <span key={tech} className="text-xs text-white/40">
                            › {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 border-t border-[#61dafb]/10">
                    <ul className="mt-4 space-y-2">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-white/60 leading-relaxed">
                          <span style={{ color: statusColor }} className="shrink-0">›</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
