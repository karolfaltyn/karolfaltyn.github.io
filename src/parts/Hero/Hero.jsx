import "./hero.css";

export const Hero = () => {
  let myPic = require("../../assets/images/p.png");

  const skillsIcons = [
    {
      img: require("../../assets/images/tech-icons/html-icon.svg").default,
      id: 1,
      name: "HTML",
    },
    {
      img: require("../../assets/images/tech-icons/css-icon.svg").default,
      id: 2,
      name: "CSS",
    },
    {
      img: require("../../assets/images/tech-icons/sass-icon.svg").default,
      id: 3,
      name: "Sass/SCSS",
    },
    {
      img: require("../../assets/images/tech-icons/tailwind-icon.svg").default,
      id: 4,
      name: "Tailwind CSS",
    },
    {
      img: require("../../assets/images/tech-icons/javascript-icon.svg")
        .default,
      id: 5,
      name: "JavaScript",
    },
    {
      img: require("../../assets/images/tech-icons/react-icon.svg").default,
      id: 6,
      name: "React",
    },
    {
      img: require("../../assets/images/tech-icons/typescript-icon.svg")
        .default,
      id: 7,
      name: "TypeScript",
    }
  ];

  return (
    <>
      <section id="hero" className="hero">
        <div className="container">
          <div className="Hero__content">
            <div className="Hero__box">
              <div className="Hero__text">
                <h1>Front-End Developer</h1>
                <p>
                  Hi, I'm Karol. A passionate Front-end Developer from Wrocław,
                  Poland.
                </p>
              </div>
              <div className="Hero__img">
                <img src={myPic} alt="karol-faltyn" />
              </div>
            </div>

            <div className="Hero__skills">
              <p>Tech Stack </p>
              <div className="Hero__icons">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img
                        src={icon.img}
                        alt="skill-icon"
                        className="skill-icon"
                        title={icon.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>
    </>
  );
};
