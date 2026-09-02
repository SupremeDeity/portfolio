import { Nav } from "./Components/Nav";
import { Hero } from "./Components/Hero";
import { Experience } from "./Components/Experience";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/skills";
import { Education } from "./Components/Education";
import { Footer } from "./Components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}
