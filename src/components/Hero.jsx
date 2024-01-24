import "../assets/style/hero.css";

export const Hero = () => {
  let myPic = require("../assets/images/myPic.png");

  const skillsIcons = [
    {
      img: require("../assets/images/tech-icons/html-icon.svg").default,
      id: 1,
    },
    {
      img: require("../assets/images/tech-icons/css-icon.svg").default,
      id: 2,
    },
    {
      img: require("../assets/images/tech-icons/javascript-icon.svg").default,
      id: 3,
    },
    {
      img: require("../assets/images/tech-icons/react-icon.svg").default,
      id: 4,
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="Hero__content">
            <div className="Hero__box">
              <div className="Hero__text">
                <h1>Front-End Developer</h1>
                <p>
                  Hi, I'm Karol. A passionate Front-end React Developer from
                  Wrocław, Poland.
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
