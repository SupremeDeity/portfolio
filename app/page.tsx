import { HomeMainSection } from "./Components/home_main_section";
import { HomeAboutSection } from "./Components/home_about_section";
import { HomeSkillsSection } from "./Components/home_skills_section";
import { Footer } from "./Components/footer";
import { HomeProjectsSection } from "./Components/home_projects_section";
import { HomeStatsSection } from "./Components/home_stats_section";
import { ProjectsSection } from "./Components/project_section";

export default function Home() {
  return (
    <div className="magicpattern subpixel-antialiased w-screen overflow-x-hidden overflow-y-scroll sm:snap-mandatory sm:snap-y h-screen">
      <HomeMainSection />
      <HomeStatsSection />
      {/* <HomeAboutSection /> */}
      <HomeSkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
