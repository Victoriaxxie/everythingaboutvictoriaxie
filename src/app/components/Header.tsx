import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "header-scrolled"
          : "header-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-[#61dafb]" />
            <span className="text-[#61dafb]">victoria_xie</span>
          </div>

          <div className="flex gap-8">
            <a href="#about"      className="text-white/60 hover:text-[#61dafb] transition-colors">[about]</a>
            <a href="#experience" className="text-white/60 hover:text-[#61dafb] transition-colors">[experience]</a>
            <a href="#extracurriculars" className="text-white/60 hover:text-[#61dafb] transition-colors">[extracurriculars]</a>
            <a href="#contact"    className="text-white/60 hover:text-[#61dafb] transition-colors">[contact]</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
