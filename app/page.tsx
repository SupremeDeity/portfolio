import { HomeMainSection } from "./Components/home_main_section";
import { Footer } from "./Components/footer";
import { HomeStatsSection } from "./Components/home_stats_section";
import { ProjectsSection } from "./Components/project_section";
import { Skills } from "./Components/skills";

export default function Home() {
  return (
    <div className="magicpattern subpixel-antialiased w-screen overflow-x-hidden overflow-y-scroll  h-screen">
      <HomeMainSection />
      <Skills />
      <HomeStatsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
