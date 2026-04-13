import { useState, useEffect } from "react";

type Tab = "technical" | "legal" | "languages";

const technicalSkills = [
  { name: "Python", level: 90, label: "Advanced" },
  { name: "Java", level: 90, label: "Advanced" },
  { name: "R", level: 75, label: "Proficient" },
  { name: "HTML / CSS", level: 60, label: "Intermediate" },
  { name: "JavaScript", level: 40, label: "Elementary" },
];

const legalSkills = [
  { name: "Legal Translation", level: 90, label: "Advanced" },
  { name: "Legal Research", level: 90, label: "Advanced" },
  { name: "Proofreading", level: 90, label: "Advanced" },
];

const languages = [
  { name: "Chinese", level: 100, label: "Native" },
  { name: "English", level: 100, label: "Native" },
];

const tabs: { key: Tab; label: string }[] = [
  { key: "technical", label: "Technical" },
  { key: "legal", label: "Legal" },
  { key: "languages", label: "Languages" },
];

function SkillBar({ name, level, label }: { name: string; level: number; label: string }) {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className="space-y-1 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between text-xs">
        <span className="text-white/70">{name}</span>
        <span
          className="transition-opacity duration-200"
          style={{
            color: hovered ? '#67e8f9' : 'transparent',
          }}
        >
          {label}
        </span>
      </div>
      <div className="h-px bg-white/10 relative overflow-hidden">
        <div
          className="h-full transition-all duration-700"
          style={{
            width: mounted ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, #22d3ee, #818cf8)',
            boxShadow: hovered ? '0 0 8px rgba(97, 218, 251, 0.6)' : 'none',
          }}
        />
      </div>
    </div>
  );
}

export function AboutV2() {
  const [activeTab, setActiveTab] = useState<Tab>("technical");

  const skillMap: Record<Tab, typeof technicalSkills> = {
    technical: technicalSkills,
    legal: legalSkills,
    languages,
  };

  return (
    <section id="about" className="flex items-start justify-center px-6 pt-28 pb-20">
      <div className="max-w-4xl w-full space-y-8">
        <div className="flex items-center gap-3">
          <span className="text-[#61dafb]">01.</span>
          <h2 className="text-3xl">About</h2>
          <div className="flex-1 h-px bg-[#61dafb]/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio */}
          <div data-reveal data-delay="0.05" className="space-y-6 text-white/70 text-sm leading-relaxed">
            <p>
              I'm a first-year student at the University of Sydney, pursuing a combined Bachelor of
              Laws and Bachelor of Science (Computer Science). Originally from Beijing, China, I've lived
              and studied in both Australia and the United States.
            </p>
            <p>
              My interests lie at the intersection of law, technology, and policy. I've gained
              experience across both legal and technical contexts, including internships at Chinasoft
              International and project work with Clifford Chance, Mallesons, and King & Wood.
            </p>
            <p>
              Beyond academics, I led the PKUS Mock Trial Club through seven national and
              international competitions, and previously captained my school's track team.
            </p>

            {/* Awards */}
            <div className="border-l-2 border-[#61dafb]/20 pl-4 space-y-3">
              <div>
                <div className="text-[#67e8f9] text-xs mb-0.5">Dalyell Scholar</div>
                <div className="text-white/50 text-xs">ATAR 98+ · Jul 2024 – Present</div>
              </div>
            </div>

            {/* Fun facts */}
            <div className="about-facts">
              <div className="about-fact"><span className="about-fact-label">singer</span><span className="about-fact-value">Tate McRae</span></div>
              <div className="about-fact"><span className="about-fact-label">k-pop</span><span className="about-fact-value">aespa</span></div>
              <div className="about-fact"><span className="about-fact-label">colour</span><span className="about-fact-value">blue ◆</span></div>
              <div className="about-fact"><span className="about-fact-label">mbti</span><span className="about-fact-value">INFJ</span></div>
            </div>
          </div>

          {/* Skills */}
          <div data-reveal data-delay="0.18" className="space-y-6">
            {/* Tab bar */}
            <div className="about-filter flex flex-wrap gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="about-filter-button px-3 py-2 text-xs font-mono transition-all duration-200"
                  style={{
                    background: activeTab === tab.key ? 'rgba(97,218,251,0.08)' : 'transparent',
                    color: activeTab === tab.key ? '#67e8f9' : 'rgba(255,255,255,0.4)',
                    borderBottom: 'none',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {skillMap[activeTab].map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
