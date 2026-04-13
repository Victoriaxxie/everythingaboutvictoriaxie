import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

type ContactLink = {
  icon: typeof Mail;
  label: string;
  value: string | string[];
  href?: string;
  isExternal?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Email",
    value: "victoriaa.xiery@gmail.com",
    href: "mailto:victoriaa.xiery@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/victoria-xie",
    href: "https://www.linkedin.com/in/victoria-xie-912599320",
    isExternal: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: ["+61 401 865 548", "+86 185 1180 5322"],
  },
  {
    icon: MapPin,
    label: "Location",
    value: ["Australia", "China", "United States"],
  },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Extracurriculars", href: "#extracurriculars" },
  { label: "Contact", href: "#contact" },
];

export function FooterV2() {
  return (
    <section id="contact" className="site-footer">

      {/* ── Combined contact + CTA ───────────────────────── */}
      <div className="site-footer-body">

        {/* Oversized background name — behind content */}
        <div className="site-footer-bgname" aria-hidden="true">
          VICTORIA XIE
        </div>

        {/* Two columns: CTA left | contact cards right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — editorial CTA */}
          <div data-reveal data-delay="0.05" className="site-footer-cta-col">
            <p className="site-footer-eyebrow">That's All About Me</p>
            <h2 className="site-footer-heading">
              Feel Free<br />to Say Hi.
            </h2>
            <p className="site-footer-sub">
              I'm open to opportunities in AI governance, legal technology,
              software engineering, and policy research. Reach out for
              internships, collaborations, or just a conversation.
            </p>
          </div>

          {/* Right — contact cards */}
          <div data-reveal data-delay="0.2" className="space-y-4 pt-2">
            {contactLinks.map((link) => {
              const content = (
                <div className="flex items-start gap-4">
                  <link.icon className="h-5 w-5 text-[#61dafb] mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-white/50 text-xs mb-1">{link.label}</div>
                    {Array.isArray(link.value) ? (
                      <div className="flex flex-col gap-0.5">
                        {link.value.map((v) => (
                          <div key={v} className="text-white text-sm group-hover:text-[#61dafb] transition-colors">
                            {v}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-white text-sm group-hover:text-[#61dafb] transition-colors truncate">
                        {link.value}
                      </div>
                    )}
                  </div>
                </div>
              );

              if (!link.href) {
                return (
                  <div
                    key={link.label}
                    className="block border border-[#61dafb]/20 bg-[#050505] p-4"
                  >
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noreferrer noopener" : undefined}
                  className="block border border-[#61dafb]/20 bg-[#050505] p-4 hover:border-[#61dafb]/40 hover:bg-[#61dafb]/5 transition-all group"
                >
                  {content}
                </a>
              );
            })}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────── */}
      <div className="site-footer-bar">
        <div>Copyright © 2026 Victoria Xie. All Rights Reserved.</div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="site-footer-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

    </section>
  );
}
