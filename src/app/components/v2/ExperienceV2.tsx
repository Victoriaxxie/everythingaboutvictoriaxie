import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Experience = {
  period: string;
  role: string;
  organization: string;
  description: string[];
  tags: string[];
};

const workExperiences: Experience[] = [
  {
    period: "Apr 2026 – Present",
    role: "Intern",
    organization: "King & Wood",
    description: [
      "Banking & Finance Department – Beijing Banking Finance Team.",
      "Proofreading and reviewing legal documents and transaction materials.",
      "Assisting with research and due diligence on banking and finance matters.",
    ],
    tags: ["Banking & Finance", "Legal Research", "Beijing"],
  },
  {
    period: "Sep – Dec 2025",
    role: "Executive Assistant",
    organization: "China Electronics Chamber of Commerce",
    description: [
      "Assisted in Global AI Machines and Electronics Expo (AIE) 2025.",
      "Coordinated guest invitations and drafted invitation letters for industry leaders, government officials and executives.",
      "Translated official press releases and organised attendee information.",
    ],
    tags: ["Events", "Translation", "AI Industry"],
  },
  {
    period: "Aug 2025",
    role: "Mediation Supervisor",
    organization: "Australian Disputes Centre",
    description: [
      "Supervised mediation sessions at the Asia-Pacific Commercial Mediation Competition 2025.",
      "Supported judges, mediators, and student teams to ensure smooth proceedings.",
    ],
    tags: ["Mediation", "Dispute Resolution"],
  },
  {
    period: "Jun – Jul 2025",
    role: "Legal Intern",
    organization: "Chinasoft International (CSI)",
    description: [
      "Assisted with legal document preparation including business and procurement contracts, and trademark/patent/software registration lists.",
      "Conducted legal research on compliance issues in Hong Kong IPOs.",
    ],
    tags: ["Legal Research", "IPO Compliance", "Contracts"],
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
  },
  {
    period: "Sep 2024 – Jan 2025",
    role: "Content Creator",
    organization: "Scape",
    description: [
      "Created videos to support advertising efforts across multiple social media platforms.",
    ],
    tags: ["Content", "Social Media"],
  },
];

const extracurriculars: Experience[] = [
  {
    period: "Dec 2025",
    role: "Ready, Set, Law",
    organization: "Clifford Chance",
    description: [
      "Reviewed influencer and social media content for regulatory compliance and ethical marketing standards.",
      "Conducted ESG finance research, evaluating ethical/green financial products and sustainable lending decisions.",
      "Advised on Social Token regulation, licensing requirements, and blockchain compliance issues.",
    ],
    tags: ["Compliance", "ESG", "Blockchain", "FinTech"],
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
  },
  {
    period: "Sep 2025",
    role: "Moot Participant",
    organization: "Corrs Chambers Westgarth",
    description: [
      "Competed in the Corrs Chambers Westgarth First Year Moot 2025.",
      "Examined contract law issues involving AI systems.",
    ],
    tags: ["Mooting", "Contract Law", "AI Law"],
  },
  {
    period: "Sep 2021 – Jun 2024",
    role: "President / Captain / Coach",
    organization: "PKUS Mock Trial Club",
    description: [
      "Led school team through 7 national and international mock trial tournaments, securing multiple top 10 finishes.",
      "Mentored new members in case analysis and courtroom performance — mentees earned National Outstanding Witness awards.",
      "Organised yearly recruitment, interviewed and selected prospective students.",
    ],
    tags: ["Leadership", "Mentorship"],
  },
  {
    period: "Apr – Sep 2023",
    role: "Team Captain",
    organization: "PKUS Track Team",
    description: [
      "Led the team as captain, arranged weekly training sessions.",
      "Guided a visually impaired child to complete a 1 km run in a blind running support activity.",
    ],
    tags: ["Leadership", "Athletics", "Community"],
  },
];

/* ── Accordion list (used for Extracurriculars) ───────────────── */
function ExperienceList({ items, startIndex = 0 }: { items: Experience[]; startIndex?: number }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {items.map((exp, index) => {
        const isOpen = expanded === index;
        return (
          <div
            key={index}
            data-reveal
            data-delay={String((startIndex + index) * 0.07)}
            className="act-item"
          >
            <button className="w-full p-6 text-left" onClick={() => setExpanded(isOpen ? null : index)}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="act-role">{exp.role}</h3>
                  <div className="act-org">{exp.organization}</div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="act-period">{exp.period}</span>
                  <ChevronDown
                    className="act-chevron"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.tags.map((tag) => (
                  <span key={tag} className="act-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
            {isOpen && (
              <div className="act-detail">
                <ul className="mt-4 space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed act-desc">
                      <span className="act-bullet shrink-0">›</span>
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
  );
}

/* ── Editorial list (used for Work Experience) ────────────────── */
function EditorialList({ items }: { items: Experience[] }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="exp-editorial">
      <div className="exp-rule" />

      {items.map((exp, index) => {
        const isOpen = expanded === index;
        return (
          <div
            key={index}
            data-reveal
            data-delay={String(index * 0.06)}
            className="exp-item"
          >
            <button
              className="exp-row"
              onClick={() => setExpanded(isOpen ? null : index)}
            >
              <h3 className="exp-title">{exp.role.toUpperCase()}</h3>
              <span className="exp-company">{exp.organization}</span>
              <span className="exp-period">{exp.period}</span>
            </button>

            {/* Expandable detail */}
            {isOpen && (
              <div className="exp-detail">
                <div className="exp-detail-inner">
                  <ul className="exp-detail-list">
                    {exp.description.map((point, i) => (
                      <li key={i} className="exp-detail-item">
                        <span className="exp-detail-bullet">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="exp-detail-tags">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="exp-rule" />
          </div>
        );
      })}
    </div>
  );
}

/* ── Main export ──────────────────────────────────────────────── */
export function ExperienceV2() {
  return (
    <>
      {/* Work Experience — editorial layout */}
      <section id="experience" className="flex justify-center px-6 pt-20 pb-20">
        <div className="max-w-4xl w-full">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[#61dafb] text-xs font-mono tracking-widest">02.</span>
            <h2 className="text-3xl">Experience</h2>
            <div className="flex-1 h-px bg-[#61dafb]/20" />
          </div>
          <EditorialList items={workExperiences} />
        </div>
      </section>

      {/* Extracurriculars — accordion style */}
      <section id="extracurriculars" className="flex justify-center px-6 pt-8 pb-20">
        <div className="max-w-4xl w-full space-y-12">
          <div className="flex items-center gap-3">
            <span className="text-[#61dafb] text-xs font-mono tracking-widest">03.</span>
            <h2 className="text-3xl">Extracurriculars</h2>
            <div className="flex-1 h-px bg-[#61dafb]/20" />
          </div>
          <ExperienceList items={extracurriculars} startIndex={workExperiences.length} />
        </div>
      </section>
    </>
  );
}
