import "./projects.css";
import { ProjectBox } from "../../components/ProjectBox/ProjectBox";

export const Projects = () => {
  let projects =
    require("../../assets/images/svg-on-pages/projects.svg").default;
  let weather = require("../../assets/images/project-images/weather.png");
  let to_do_list = require("../../assets/images/project-images/to-do-list.png");
  let number_analyzer = require("../../assets/images/project-images/number-analyzer.png");
  let asteroids = require("../../assets/images/project-images/asteroids.png");
  let abstract = require("../../assets/images/project-images/abstract.png");

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

            <ProjectBox
              link={weather}
              name="Weather"
              desc="Application that uses geolocation or, alternatively, allows
                    users to manually input a location to retrieve and display
                    current weather data conditions from the OpenWeather API."
              tech_used="HTML, Tailwind, JavaScript, React"
              link_code="https://github.com/karolfaltyn/weather/"
              link_live="https://karolfaltyn.github.io/weather/"
            />

            <ProjectBox
              link={to_do_list}
              name="To-do List"
              desc="Project that allow user to store tasks along with their
              username using the browser's local storage."
              tech_used="HTML, Sass / SCSS, JavaScript"
              link_code="https://github.com/karolfaltyn/to-do-list/"
              link_live="https://karolfaltyn.github.io/to-do-list/"
            />

            <ProjectBox
              link={number_analyzer}
              name="Number Analyzer"
              desc="Web application which generates numbers and categorizes them
              as even, odd or prime."
              tech_used="HTML, CSS, JavaScript, React"
              link_code="https://github.com/karolfaltyn/number-analyzer/"
              link_live="https://karolfaltyn.github.io/number-analyzer/"
            />

            <ProjectBox
              link={asteroids}
              name="Asteroids"
              desc="A classic arcade-style game from 1979, that allows players
              to control a spaceship and navigate through an asteroid
              field, avoiding collisions and shooting asteroids."
              tech_used="HTML, JavaScript"
              link_code="https://github.com/karolfaltyn/asteroids/"
              link_live="https://karolfaltyn.github.io/asteroids/"
            />

            <ProjectBox
              link={abstract}
              name="Abstract"
              desc="This project is my response to a challenge from the frontend
              practice website. The goal is to enhance your HTML and CSS
              skills by building a visually appealing and responsive
              website."
              tech_used="HTML, CSS"
              link_code="https://github.com/karolfaltyn/abstract/"
              link_live="https://karolfaltyn.github.io/abstract/"
            />
          </div>
        </div>
      </section>
    </>
  );
};
