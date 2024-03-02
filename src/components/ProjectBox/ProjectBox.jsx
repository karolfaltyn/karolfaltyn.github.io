import "./project-box.css";

export const ProjectBox = ({ data }) => {
  const { link, name, desc, tech_used, link_code, link_live } = data;

  let code_icon =
    require("../../assets/images/other-icons/code-icon.svg").default;
  let link_icon =
    require("../../assets/images/other-icons/link-external-icon.svg").default;

  return (
    <div className="Projects__box">
      <div className="Projects__img-side">
        <img src={link} alt="project" />
      </div>
      <div className="Projects__text-side">
        <div className="Projects__desc">
          <h3>{name}</h3>
          <p>
            {desc}
            <br />
            <br />
            Tech used: {tech_used}
          </p>
        </div>
        <div className="Projects__live-code">
          <a
            aria-label="project code"
            href={link_code}
            target="_blank"
            rel="noreferrer"
          >
            Code
            <img src={code_icon} alt="code icon" />
          </a>
          <a
            aria-label="project live view"
            href={link_live}
            target="_blank"
            rel="noreferrer"
          >
            Live
            <img src={link_icon} alt="link icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
