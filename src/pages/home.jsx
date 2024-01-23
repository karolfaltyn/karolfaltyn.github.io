import { Navbar } from "../parts/Navbar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../parts/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
