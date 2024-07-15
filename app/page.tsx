import { HomeMainSection } from "./Components/home_main_section";
import { HomeSkillsSection } from "./Components/home_skills_section";
import { Footer } from "./Components/footer";
import { HomeStatsSection } from "./Components/home_stats_section";
import { ProjectsSection } from "./Components/project_section";

export default function Home() {
  return (
    <div className="magicpattern subpixel-antialiased w-screen overflow-x-hidden overflow-y-scroll sm:snap-mandatory sm:snap-y h-screen">
      <HomeMainSection />
      <HomeStatsSection />
      <HomeSkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
