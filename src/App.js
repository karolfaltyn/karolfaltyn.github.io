import { Hero } from "./components/Hero";
import { Footer } from "./parts/Footer";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
export const App = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}