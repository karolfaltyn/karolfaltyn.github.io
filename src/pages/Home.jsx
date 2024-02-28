import { Navbar } from "../parts/Navbar/Navbar";
import { Hero } from "../parts/Hero/Hero";
import { Projects } from "../parts/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../parts/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
