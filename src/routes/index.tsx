import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CodolioSection } from "@/components/CodolioSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "rith.dev" },
      {
        name: "description",
        content:
          "AI/ML Engineer with 1 year of experience building intelligent systems with Python, PyTorch, TensorFlow and LLMs.",
      },
      { property: "og:title", content: "Rithish R — AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of an AI/ML Engineer building production ML pipelines, computer vision and LLM-powered apps.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CodolioSection />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
