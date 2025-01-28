import { HeroSection } from "./_components/pages/home/hero-section";
import HighlightedProjects from "./_components/pages/home/highlighted-projects";
import KnownTechs from "./_components/pages/home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
    </>
  )
}
