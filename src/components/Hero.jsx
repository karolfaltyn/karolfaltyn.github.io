import "../assets/style/hero.css";

export const Hero = () => {
  let myPic = require("../assets/images/myPic.png");
  // let github = require("../assets/images/social-icons/github-logo-36.png");
  // let linkedin = require("../assets/images/social-icons/linkedin-logo-36.png");
  // let gmail = require("../assets/images/social-icons/gmail-logo-36.png");

  const skillsIcons = [
    {
      img: require("../assets/images/tech-icons/html5-logo-36.png"),
      id: 1,
    },
    {
      img: require("../assets/images/tech-icons/css3-logo-36.png"),
      id: 2,
    },
    {
      img: require("../assets/images/tech-icons/javascript-logo-36.png"),
      id: 3,
    },
    {
      img: require("../assets/images/tech-icons/react-logo-36.png"),
      id: 4,
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="Hero__content">
            <div className="Hero__main">
              <div className="Hero__text">
                <h1>Front-End Developer</h1>
                <p>
                  Hi, I'm Karol Faltyn. A passionate Front-end React Developer
                  based in Wrocław, Poland.
                </p>
                {/* <span>
                  <a
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/karol-faltyn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a
                    aria-label="github"
                    href="https://github.com/karolfaltyn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="github" />
                  </a>
                </span> */}
                <div className="Hero__img">
                  <img src={myPic} alt="karol-faltyn" width={100} />
                </div>
              </div>
            </div>

            <div className="Hero__skills">
              <p>Tech Stack</p>
              <div className="Hero__logos">
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
