import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar contact="contact" project="project" />
      <main>
        <HeroSection />
        <Projects />
        <Contact />

      </main>
    </>
  );
}
