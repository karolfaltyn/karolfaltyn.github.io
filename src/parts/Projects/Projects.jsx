import React, { useState } from "react";
import "./projects.css";
import { ProjectBox } from "../../components/ProjectBox/ProjectBox";
import { componentsData } from "../../utils/projects";

export const Projects = () => {
  let projects =
    require("../../assets/images/svg-on-pages/projects.svg").default;

  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex + 1) % componentsData.length
    );
  };

  const handlePrevClick = () => {
    setCurrentComponentIndex((prevIndex) =>
      prevIndex === 0 ? componentsData.length - 1 : prevIndex - 1
    );
  };

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

            <div className="Projects__buttons">
              <button
                className="Projects__button-previous"
                onClick={handlePrevClick}
              >
                &#11164;
              </button>

              <button
                className="Projects__button-next"
                onClick={handleNextClick}
              >
                &#11166;
              </button>
            </div>

            <ProjectBox data={componentsData[currentComponentIndex]} />
          </div>
        </div>
      </section>
    </>
  );
};
