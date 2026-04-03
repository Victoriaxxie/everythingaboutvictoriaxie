import { Mail, Linkedin, Phone, FileText } from "lucide-react";

type ContactLink = {
  icon: typeof Mail;
  label: string;
  value: string;
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
    value: "linkedin.com/in/victoria-xie-912599320",
    href: "https://www.linkedin.com/in/victoria-xie-912599320",
    isExternal: true,
  },
  {
    icon: Phone,
    label: "Phone (AU)",
    value: "+61 401 865 548",
    href: "tel:+61401865548",
  },
  {
    icon: FileText,
    label: "CV / Resume",
    value: "Available on request",
  },
];

export function ContactV2() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full space-y-12">
        <div className="flex items-center gap-3">
          <span className="text-[#61dafb]">04.</span>
          <h2 className="text-3xl">Contact</h2>
          <div className="flex-1 h-px bg-[#61dafb]/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#61dafb] text-sm">
                <span>$</span>
                <span className="text-white/40">get_in_touch</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                I'm open to opportunities in AI governance, legal technology, software engineering,
                and policy research. Feel free to reach out for internships, collaborations, or
                just a conversation.
              </p>
            </div>

            <div className="border-l-2 border-[#61dafb]/20 pl-4 space-y-2 text-sm">
              <p className="text-white/60">Based in:</p>
              <p className="text-white/80">Sydney, Australia</p>
            </div>

            <div className="border-l-2 border-[#61dafb]/20 pl-4 space-y-2 text-sm">
              <p className="text-white/60">Response time:</p>
              <p className="text-white/80">Usually within 24–48 hours</p>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {contactLinks.map((link) => {
              const content = (
                <div className="flex items-center gap-4">
                  <link.icon className="h-5 w-5 text-[#61dafb]" />
                  <div className="flex-1 min-w-0">
                    <div className="text-white/50 text-xs mb-1">{link.label}</div>
                    <div className="text-white text-sm group-hover:text-[#61dafb] transition-colors truncate">
                      {link.value}
                    </div>
                  </div>
                </div>
              );

              if (!link.href) {
                return (
                  <div
                    key={link.label}
                    className="block border border-[#61dafb]/20 bg-[#050505] p-4 opacity-60"
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

        <div className="pt-12 border-t border-[#61dafb]/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/40">
            <div>© 2026 Victoria Xie. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 bg-[#61dafb] rounded-full animate-pulse" />
              <span>System operational</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
