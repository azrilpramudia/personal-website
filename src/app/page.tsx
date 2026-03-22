import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Project from "../components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project />
    </main>
  );
}
