import { Header } from "./components/Header";
import { HeroV2 } from "./components/v2/HeroV2";
import { AboutV2 } from "./components/v2/AboutV2";
import { ExperienceV2 } from "./components/v2/ExperienceV2";
import { ProjectsV2 } from "./components/v2/ProjectsV2";
import { ContactV2 } from "./components/v2/ContactV2";
import { FooterV2 } from "./components/v2/FooterV2";

export default function App2() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main>
        <HeroV2 />
        <AboutV2 />
        <ExperienceV2 />
        <ProjectsV2 />
        <ContactV2 />
        <FooterV2 />
      </main>

      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(97, 218, 251, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(97, 218, 251, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}
