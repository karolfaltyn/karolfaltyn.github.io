import "./footer.css";

export const Footer = () => {
  let github =
    require("../../assets/images/social-icons/github-icon.svg").default;
  let linkedin =
    require("../../assets/images/social-icons/linkedin-icon.svg").default;
  let gmail =
    require("../../assets/images/social-icons/gmail-icon.svg").default;

  return (
    <>
      <footer>
        <div className="container">
          <div className="Footer__content">
            <h5>{new Date().getFullYear()} All right reserved </h5>
            <div className="Footer__content-socials">
              <a
                aria-label="linkedin"
                href="https://www.linkedin.com/in/karolfaltyn/"
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
              <a href="mailto:karolfaltyn03@gmail.com" aria-label="gmail">
                <img src={gmail} alt="gmail" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
