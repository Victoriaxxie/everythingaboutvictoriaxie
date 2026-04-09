const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function FooterV2() {
  return (
    <footer className="site-footer relative overflow-hidden px-6 pt-16 pb-8">
      <div className="site-footer-panel relative mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#050505]">
        <div className="site-footer-marquee pointer-events-none select-none" aria-hidden="true">
          VICTORIA XIE
        </div>

        <div className="site-footer-content relative z-10 px-8 pt-10 pb-36 md:px-12 md:pt-12 md:pb-40">
          <div className="site-footer-note flex flex-col gap-3 md:max-w-md">
            <div className="text-xs uppercase tracking-[0.22em] text-white/35">End Note</div>
            <p className="text-sm leading-relaxed text-white/68">
              Open to internships, collaborations, and conversations across legal tech, AI policy,
              and software.
            </p>
          </div>
        </div>

        <div className="site-footer-bar relative z-20 flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>Copyright © 2026 Victoria Xie. All Rights Reserved.</div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="site-footer-link">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
