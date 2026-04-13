import { useEffect, useRef, useState } from "react";
import profileImg from "../../../imports/background.png";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ∆Ω∑∂αβ";
const TARGET = "Victoria";

function useScramble(target: string, delay = 300) {
  const [display, setDisplay] = useState(target);
  useEffect(() => {
    let frame: number;
    let iteration = 0;
    const total = target.length * 5; // frames to fully resolve
    const start = setTimeout(() => {
      const tick = () => {
        setDisplay(
          target
            .split("")
            .map((char, i) => {
              if (i < Math.floor(iteration / 5)) return char;
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join("")
        );
        iteration++;
        if (iteration <= total) frame = requestAnimationFrame(tick);
        else setDisplay(target);
      };
      frame = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(start); cancelAnimationFrame(frame); };
  }, [target, delay]);
  return display;
}

export function HeroV2() {
  const trRef    = useRef<HTMLDivElement>(null);
  const mrRef    = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const heroRef  = useRef<HTMLElement>(null);
  const scrambled = useScramble(TARGET, 400);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      if (trRef.current)
        trRef.current.style.transform = `translate(${dx * -14}px, ${dy * -10}px)`;
      if (mrRef.current)
        mrRef.current.style.transform = `translateY(-50%) translate(${dx * -10}px, ${dy * -14}px)`;
      if (scrollRef.current)
        scrollRef.current.style.transform = `translate(${dx * -7}px, ${dy * -6}px)`;

      // Cursor spotlight on hero photo
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top)  / rect.height) * 100;
        heroRef.current.style.setProperty("--spot-x", `${x}%`);
        heroRef.current.style.setProperty("--spot-y", `${y}%`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>

      {/* Full-bleed photo with gradient overlays */}
      <div className="hero-photo-wrap">
        <img src={profileImg} alt="Victoria Xie" className="hero-photo-img" />
        <div className="hero-photo-fade-l" />
        <div className="hero-photo-fade-b" />
        <div className="hero-photo-vignette" />
        <div className="hero-spotlight" />
        {/* Foreground — masked to center-right, appears IN FRONT of name */}
        <img src={profileImg} alt="" aria-hidden="true" className="hero-photo-fg" />
      </div>

      {/* Mid-right — personal, warm copy */}
      <div className="hero-mr" ref={mrRef}>
        <span className="hero-role">Sydney · Beijing</span>
        <span className="hero-pill">Law & CS @ USyd</span>
        <p className="hero-desc">
          Curious about the gap between<br />
          legal systems and technology —<br />
          and what lives in between.
        </p>
      </div>

      {/* Massive name — bottom left */}
      <div className="hero-name-wrap">
        <p className="hero-greeting">Hello, I'm<span className="hero-cursor" /></p>
        <h1 className="hero-name">
          <span className="hero-name-first">{scrambled}</span>
          <span className="hero-name-last">XIE.</span>
        </h1>
      </div>

      {/* Scroll indicator — bottom right */}
      <div className="hero-scroll" ref={scrollRef}>
        <span className="hero-scroll-sub">SCROLL DOWN</span>
        <span className="hero-scroll-cta">EXPLORE</span>
        <span className="hero-scroll-arrow" aria-hidden="true">↓</span>
      </div>

    </section>
  );
}
