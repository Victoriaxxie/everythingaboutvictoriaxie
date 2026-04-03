import { useState } from "react";

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
  { name: "Westlaw / LexisNexis", level: 90, label: "Advanced" },
  { name: "Proofreading", level: 90, label: "Advanced" },
  { name: "Contract Drafting", level: 70, label: "Proficient" },
  { name: "Compliance Research", level: 75, label: "Proficient" },
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
            width: `${level}%`,
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
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <div className="flex items-center gap-3">
          <span className="text-[#61dafb]">01.</span>
          <h2 className="text-3xl">About</h2>
          <div className="flex-1 h-px bg-[#61dafb]/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6 text-white/70 text-sm leading-relaxed">
            <p>
              I'm a first-year student at the University of Sydney studying a combined Bachelor of
              Laws and Bachelor of Science (Computer Science) — a <span className="text-[#67e8f9]">Dalyell Scholar</span> with
              a Distinction average (82/100).
            </p>
            <p>
              My work sits at the intersection of law, technology, and policy. I've interned in
              legal and software roles at Chinasoft International, assisted at the Asia-Pacific
              Commercial Mediation Competition, and worked on AI governance tasks with Clifford
              Chance and King & Wood Mallesons.
            </p>
            <p>
              Outside the classroom, I led the PKUS Mock Trial Club through 7 national and
              international tournaments, and captained the track team — including guiding a
              visually impaired child through a 1 km run.
            </p>

            {/* Awards */}
            <div className="border-l-2 border-[#61dafb]/20 pl-4 space-y-3">
              <div>
                <div className="text-[#67e8f9] text-xs mb-0.5">DATA1901 Project Excellence Award</div>
                <div className="text-white/50 text-xs">Top performer among 800+ students · Nov 2024</div>
              </div>
              <div>
                <div className="text-[#67e8f9] text-xs mb-0.5">Dalyell Scholar</div>
                <div className="text-white/50 text-xs">ATAR 98+ · Jul 2024 – Present</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {/* Tab bar */}
            <div className="flex gap-0 border border-[#61dafb]/20">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="flex-1 px-3 py-2 text-xs font-mono transition-all duration-200"
                  style={{
                    background: activeTab === tab.key ? 'rgba(97,218,251,0.08)' : 'transparent',
                    color: activeTab === tab.key ? '#67e8f9' : 'rgba(255,255,255,0.4)',
                    borderBottom: activeTab === tab.key ? '2px solid #61dafb' : '2px solid transparent',
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

            <p className="text-white/30 text-xs">Hover a skill to see proficiency level</p>
          </div>
        </div>
      </div>
    </section>
  );
}
