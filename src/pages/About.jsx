import { Navbar } from "../parts/Navbar";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Footer } from "../parts/Footer";

export const About = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
};
