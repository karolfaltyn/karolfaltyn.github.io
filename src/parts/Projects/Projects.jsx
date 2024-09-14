import React from "react";
import Slider from "react-slick";
import "./projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectBox } from "../../components/ProjectBox/ProjectBox";
import { projectData } from "../../utils/projects";

export const Projects = () => {
  let projects =
    require("../../assets/images/svg-on-pages/projects.svg").default;

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <div className="Projects__slider">
              <Slider {...settings}>
                <ProjectBox data={projectData[0]} />
                <ProjectBox data={projectData[1]} />
                <ProjectBox data={projectData[2]} />
                <ProjectBox data={projectData[3]} />
                <ProjectBox data={projectData[4]} />
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
