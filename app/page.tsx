import { HeroSection } from "./_components/pages/home/hero-section";
import HighlightedProjects from "./_components/pages/home/highlighted-projects";
import KnownTechs from "./_components/pages/home/known-techs";
import WorkExperience from "./_components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
