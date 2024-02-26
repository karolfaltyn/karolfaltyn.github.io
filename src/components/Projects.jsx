import "../assets/style/projects.css";

export const Projects = () => {
  let projects = require("../assets/images/svg-on-pages/projects.svg").default;
  let weather = require("../assets/images/project-images/weather.png");
  let to_do_list = require("../assets/images/project-images/to-do-list.png");
  let number_analyzer = require("../assets/images/project-images/number-analyzer.png");
  let asteroids = require("../assets/images/project-images/asteroids.png");
  let abstract = require("../assets/images/project-images/abstract.png");
  let code = require("../assets/images/other-icons/code-icon.svg").default;
  let link =
    require("../assets/images/other-icons/link-external-icon.svg").default;

  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <div className="Projects__content">
            <div className="Projects__title">
              <img src={projects} alt="projects" />
              <h2>PORTFOLIO</h2>
              <p>Here are part of my projects</p>
            </div>

            <div className="Projects__box">
              <div className="Projects__img-side">
                <img src={weather} alt="project" />
              </div>
              <div className="Projects__text-side">
                <div className="Projects__desc">
                  <h3>Weather</h3>
                  <p>
                    Type in a city and see if you should take an umbrella. The
                    app uses weather forecast data from the OpenWeather API.
                    <br />
                    <br />
                    Tech used: HTML, Tailwind, JavaScript, React
                  </p>
                </div>
                <div className="Projects__live-code">
                  <a
                    aria-label="project code"
                    href="https://github.com/karolfaltyn/weather"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <img src={code} alt="code" />
                  </a>
                  <a
                    aria-label="project live view"
                    href="https://karolfaltyn.github.io/weather/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <img src={link} alt="link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="Projects__box">
              <div className="Projects__img-side">
                <img src={to_do_list} alt="project" />
              </div>
              <div className="Projects__text-side">
                <div className="Projects__desc">
                  <h3>To-do List</h3>
                  <p>
                    Project that allow user to store tasks along with their
                    username using the browser's local storage.
                    <br />
                    <br />
                    Tech used: HTML, Sass / SCSS, JavaScript
                  </p>
                </div>
                <div className="Projects__live-code">
                  <a
                    aria-label="project code"
                    href="https://github.com/karolfaltyn/to-do-list"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <img src={code} alt="code" />
                  </a>
                  <a
                    aria-label="project live view"
                    href="https://karolfaltyn.github.io/to-do-list/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <img src={link} alt="link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="Projects__box">
              <div className="Projects__img-side">
                <img src={number_analyzer} alt="project" />
              </div>
              <div className="Projects__text-side">
                <div className="Projects__desc">
                  <h3>Number Analyzer</h3>
                  <p>
                    Web application which generates numbers and categorizes them
                    as even, odd or prime.
                    <br />
                    <br />
                    Tech used: HTML, CSS, JavaScript, React
                  </p>
                </div>
                <div className="Projects__live-code">
                  <a
                    aria-label="project code"
                    href="https://github.com/karolfaltyn/number-analyzer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <img src={code} alt="code" />
                  </a>
                  <a
                    aria-label="project live view"
                    href="https://karolfaltyn.github.io/number-analyzer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <img src={link} alt="link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="Projects__box">
              <div className="Projects__img-side">
                <img src={asteroids} alt="project" />
              </div>
              <div className="Projects__text-side">
                <div className="Projects__desc">
                  <h3>Asteroids</h3>
                  <p>
                    A classic arcade-style game from 1979, that allows players
                    to control a spaceship and navigate through an asteroid
                    field, avoiding collisions and shooting asteroids.
                    <br />
                    <br />
                    Tech used: HTML, JavaScript
                  </p>
                </div>
                <div className="Projects__live-code">
                  <a
                    aria-label="project code"
                    href="https://github.com/karolfaltyn/asteroids"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <img src={code} alt="code" />
                  </a>
                  <a
                    aria-label="project live view"
                    href="https://karolfaltyn.github.io/asteroids/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <img src={link} alt="link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="Projects__box">
              <div className="Projects__img-side">
                <img src={abstract} alt="project" />
              </div>
              <div className="Projects__text-side">
                <div className="Projects__desc">
                  <h3>Abstract</h3>
                  <p>
                    This project is my response to a challenge from the frontend
                    practice website. The goal is to enhance your HTML and CSS
                    skills by building a visually appealing and responsive
                    website.
                    <br />
                    <br />
                    Tech used: HTML, CSS
                  </p>
                </div>
                <div className="Projects__live-code">
                  <a
                    aria-label="project code"
                    href="https://github.com/karolfaltyn/abstract"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    <img src={code} alt="code" />
                  </a>
                  <a
                    aria-label="project live view"
                    href="https://karolfaltyn.github.io/abstract/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                    <img src={link} alt="link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
