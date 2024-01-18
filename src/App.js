import { Hero } from "./components/Hero";
import { Footer } from "./parts/Footer";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
export const App = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}