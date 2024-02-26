import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </>
  );
};