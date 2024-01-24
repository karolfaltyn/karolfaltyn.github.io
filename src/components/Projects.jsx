import "../assets/style/projects.css";

export const Projects = () => {
  let projects = require("../assets/images/svg-on-pages/projects.svg").default;
  let project_img = require("../assets/images/project-images/abstract.png");

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
                <img src={project_img} alt="project" />
              </div>
              <hr />
              <div className="Projects__text-side">
                <div className="Projects__desc">
                  <h3>Project Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci quam eligendi nostrum ad vel voluptatum,
                    consequatur quae, a voluptatibus, eius labore quisquam velit
                    itaque ex temporibus inventore optio laudantium
                    necessitatibus!
                  </p>
                  <p>Tech usage</p>
                </div>
                <div className="Projects__live-code">
                  <a
                    aria-label="project code"
                    href="##"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                    {/* add github image */}
                  </a>
                  <a
                    aria-label="project live view"
                    href="##"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live view
                    {/* add open in another card image */}
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
