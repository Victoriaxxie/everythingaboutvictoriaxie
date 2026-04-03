import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Category = "All" | "Work" | "Legal" | "Extracurricular";

type Experience = {
  period: string;
  role: string;
  organization: string;
  description: string[];
  tags: string[];
  categories: Category[];
};

const experiences: Experience[] = [
  {
    period: "Sep 2025 – Dec 2025",
    role: "Executive Assistant",
    organization: "China Electronics Chamber of Commerce",
    description: [
      "Assisted in Global AI Machines and Electronics Expo (AIE) 2025.",
      "Coordinated guest invitations and drafted invitation letters for industry leaders, government officials and executives.",
      "Translated official press releases and organised attendee information.",
    ],
    tags: ["Events", "Translation", "AI Industry"],
    categories: ["All", "Work"],
  },
  {
    period: "Dec 2025",
    role: "Ready, Set, Law Program",
    organization: "Clifford Chance",
    description: [
      "Reviewed influencer and social media content for regulatory compliance and ethical marketing standards.",
      "Conducted ESG finance research, evaluating ethical/green financial products and sustainable lending decisions.",
      "Advised on Social Token regulation, licensing requirements, and blockchain compliance issues.",
    ],
    tags: ["Compliance", "ESG", "Blockchain", "RegTech"],
    categories: ["All", "Legal", "Extracurricular"],
  },
  {
    period: "Dec 2025",
    role: "Commercial Law Virtual Internship",
    organization: "King & Wood Mallesons",
    description: [
      "Reviewed and revised a Power of Attorney for stakeholders in an acquisition context.",
      "Assisted in preparing due diligence materials including a request for information and corporate structure overview.",
      "Developed a litigation procedure timeline flowchart to support dispute resolution planning.",
    ],
    tags: ["M&A", "Due Diligence", "Litigation"],
    categories: ["All", "Legal", "Extracurricular"],
  },
  {
    period: "Aug 2025",
    role: "Mediation Session Supervisor",
    organization: "Australian Disputes Centre",
    description: [
      "Supervised mediation sessions at the Asia-Pacific Commercial Mediation Competition 2025.",
      "Supported judges, mediators, and student teams to ensure smooth proceedings.",
    ],
    tags: ["Mediation", "Dispute Resolution", "Competition"],
    categories: ["All", "Work", "Legal"],
  },
  {
    period: "Sep 2025",
    role: "Moot Participant",
    organization: "Corrs Chambers Westgarth First Year Moot",
    description: [
      "Competed in the Corrs Chambers Westgarth First Year Moot 2025.",
      "Examined contract law issues involving AI systems.",
    ],
    tags: ["Mooting", "Contract Law", "AI Law"],
    categories: ["All", "Legal", "Extracurricular"],
  },
  {
    period: "Jun 2025 – Jul 2025",
    role: "Legal Intern",
    organization: "Chinasoft International (CSI)",
    description: [
      "Assisted with legal document preparation including business and procurement contracts, and trademark/patent/software registration lists.",
      "Conducted legal research on compliance issues in Hong Kong IPOs, covering data, operational, and employment compliance.",
    ],
    tags: ["Legal Research", "IPO Compliance", "Contracts"],
    categories: ["All", "Work", "Legal"],
  },
  {
    period: "Dec 2024 – Jan 2025",
    role: "Software Engineer Intern",
    organization: "Chinasoft International (CSI)",
    description: [
      "Collected source code to support development of a learning platform for beginners.",
      "Analysed and improved source code, enhancing algorithm efficiency and code structure.",
      "Demonstrated core algorithms to the team, ensuring clarity on technical approaches.",
    ],
    tags: ["Python", "Algorithms", "Engineering"],
    categories: ["All", "Work"],
  },
  {
    period: "Sep 2024 – Jan 2025",
    role: "Content Creator",
    organization: "Scape",
    description: [
      "Created videos to support advertising efforts across multiple social media platforms.",
    ],
    tags: ["Content", "Social Media"],
    categories: ["All", "Work"],
  },
  {
    period: "Sep 2021 – Jun 2024",
    role: "President / Team Captain / Coach",
    organization: "PKUS Mock Trial Club",
    description: [
      "Led school team through 7 national and international mock trial tournaments, securing multiple top 10 finishes.",
      "Mentored new members in case analysis and courtroom performance — mentees earned National Outstanding Witness awards.",
      "Organised yearly recruitment, interviewed and selected prospective students.",
    ],
    tags: ["Leadership", "Mentorship", "Advocacy"],
    categories: ["All", "Extracurricular"],
  },
  {
    period: "Apr 2023 – Sep 2023",
    role: "Team Captain",
    organization: "PKUS Track Team",
    description: [
      "Led the team as captain, arranged weekly training sessions.",
      "Guided a visually impaired child to complete a 1 km run in a blind running support activity.",
    ],
    tags: ["Leadership", "Athletics", "Community"],
    categories: ["All", "Extracurricular"],
  },
];

const filterCategories: Category[] = ["All", "Work", "Legal", "Extracurricular"];

export function ExperienceV2() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = experiences.filter(e => e.categories.includes(activeFilter));

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <div className="flex items-center gap-3">
          <span className="text-[#61dafb]">02.</span>
          <h2 className="text-3xl">Experience</h2>
          <div className="flex-1 h-px bg-[#61dafb]/20" />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-0 border border-[#61dafb]/20 w-fit">
          {filterCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setExpanded(null); }}
              className="px-4 py-2 text-xs font-mono transition-all duration-200"
              style={{
                background: activeFilter === cat ? 'rgba(97,218,251,0.08)' : 'transparent',
                color: activeFilter === cat ? '#67e8f9' : 'rgba(255,255,255,0.4)',
                borderBottom: activeFilter === cat ? '2px solid #61dafb' : '2px solid transparent',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience list */}
        <div className="space-y-4">
          {filtered.map((exp, index) => {
            const isOpen = expanded === index;
            return (
              <div
                key={index}
                className="border border-[#61dafb]/20 bg-[#050505] transition-colors hover:border-[#61dafb]/40"
              >
                {/* Clickable header */}
                <button
                  className="w-full p-6 text-left"
                  onClick={() => setExpanded(isOpen ? null : index)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-white text-base">{exp.role}</h3>
                      <div className="text-[#61dafb] text-sm mt-0.5">{exp.organization}</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-white/40 text-xs">{exp.period}</span>
                      <ChevronDown
                        className="h-4 w-4 text-white/40 transition-transform duration-200"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </div>
                  </div>

                  {/* Tags always visible */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 text-xs border border-[#61dafb]/30 text-[#61dafb]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>

                {/* Expandable details */}
                {isOpen && (
                  <div className="px-6 pb-6 border-t border-[#61dafb]/10">
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-white/60 leading-relaxed">
                          <span className="text-[#61dafb] shrink-0">›</span>
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
