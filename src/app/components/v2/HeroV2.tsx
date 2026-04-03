import { useState, useEffect } from "react";
import profileImg from "../../../imports/profile.png";

export function HeroV2() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const lines = [
    "// Law + Computer Science @ USyd",
    "// Dalyell Scholar | WAM: 82/100",
    "",
    "const victoria = {",
    "  focus: ['AI Governance', 'LegalTech', 'Policy'],",
    "  skills: ['Python', 'Java', 'R', 'Legal Research'],",
    "  languages: ['English', 'Chinese'],",
    "  status: 'open_to_opportunities'",
    "};",
  ];

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];
      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + "\n");
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentCharIndex(0);
        }, 200);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentCharIndex, currentLineIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — photo */}
          <div className="relative overflow-hidden">
            <img
              src={profileImg}
              alt="Victoria Xie"
              className="w-full object-cover block"
              style={{
                filter: 'grayscale(1) contrast(1.35) brightness(0.72)',
              }}
            />
            {/* Subtle cool tint */}
            <div className="absolute inset-0" style={{ background: 'rgba(30, 60, 90, 0.25)', mixBlendMode: 'multiply' }} />
            {/* Vignette */}
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }} />
            {/* Bottom fade into page */}
            <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #000 0%, transparent 100%)' }} />
          </div>

          {/* Right — name + IDE box */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-mono font-bold text-white">
              Hello, I'm{" "}
              <span
                style={{
                  background: 'linear-gradient(90deg, #67e8f9, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Victoria Xie.
              </span>
            </h1>

            <div className="border border-[#61dafb]/20 bg-[#050505]">
              <div className="border-b border-[#61dafb]/20 px-4 py-2 flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1 bg-[#61dafb]/10 border-b-2 border-[#61dafb]">
                  <div className="w-2 h-2 rounded-full bg-[#61dafb]" />
                  <span className="text-xs text-[#61dafb]">portfolio.js</span>
                </div>
              </div>
              <div className="p-6 min-h-[280px]">
                <pre className="text-sm text-white/90 leading-relaxed whitespace-pre-wrap">
                  {displayedText}
                  <span className="inline-block w-2 h-4 bg-[#61dafb] animate-pulse ml-0.5" />
                </pre>
              </div>
              <div className="border-t border-[#61dafb]/20 px-4 py-1.5 flex items-center justify-between text-xs text-white/40">
                <div className="flex items-center gap-4">
                  <span>UTF-8</span>
                  <span>JavaScript</span>
                  <span>Ln {currentLineIndex + 1}, Col {currentCharIndex + 1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#61dafb] animate-pulse" />
                  <span className="text-[#61dafb]">Connected</span>
                </div>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed pl-2">
              Law & Computer Science student at the University of Sydney, building at the
              intersection of AI governance, legal technology, and policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
