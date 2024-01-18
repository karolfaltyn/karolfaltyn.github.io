import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import "../assets/style/hero.css";

export const Hero = () => {
  const skillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=html,css",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=js,react",
      id: 2,
    },
    {
      img: "https://skillicons.dev/icons?i=github,vscode",
      id: 3,
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="Hero__content">
            <div className="Hero__main">
              <div className="Hero__main-text">
                <h1>Front-End Developer</h1>
                <p>
                  Hi, I'm Karol Faltyn. A passionate Front-end React Developer
                  based in Wrocław, Poland.
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/karol-faltyn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    href="https://github.com/karolfaltyn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
                <div className="Hero__main-img"></div>
              </div>
            </div>

            <div className="Hero__skills">
              <p>Tech Stack</p>
              <div className="Hero__skills-logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
