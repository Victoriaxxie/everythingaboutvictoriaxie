import { useEffect } from "react";
import { Header } from "./components/Header";
import { HeroV2 } from "./components/v2/HeroV2";
import { AboutV2 } from "./components/v2/AboutV2";
import { ExperienceV2 } from "./components/v2/ExperienceV2";
import { FooterV2 } from "./components/v2/FooterV2";

export default function App2() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
            el.style.setProperty("--reveal-delay", `${delay}s`);
            requestAnimationFrame(() => el.classList.add("is-visible"));
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroV2 />
        <AboutV2 />
        <ExperienceV2 />
        <FooterV2 />
      </main>
    </div>
  );
}
