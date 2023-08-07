import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <div className="bg-slate-50">
        <AboutSection />
      </div>
      <ProjectsSection />
      <div className="bg-neutral-50">
        <ContactSection />
      </div>
    </main>
  )
}
