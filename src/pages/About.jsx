import { Navbar } from "../parts/Navbar/Navbar";
import { AboutMe } from "../parts/AboutMe/AboutMe";
import { Footer } from "../parts/Footer/Footer";

export const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </>
  );
};
