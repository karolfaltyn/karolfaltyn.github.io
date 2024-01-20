export const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <div className="Projects__content">
            <h3>Portfolio</h3>
            <div className="Projects__box">
              <div className="Project__img-side">
                {/* <img src="" alt="" /> */}
              </div>
              <div className="Projects__text-side">
                <div className="Projects__desc">
                  <h4>Project Name</h4>
                  <p>Project description</p>
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
