import "../assets/style/footer.css";

export const Footer = () => {
  let github = require("../assets/images/social-icons/github-logo-36-alt-color.png");
  let linkedin = require("../assets/images/social-icons/linkedin-logo-36-alt-color.png");
  let gmail = require("../assets/images/social-icons/gmail-logo-36-alt-color.png");

  return (
    <>
      <footer>
        <div className="container">
          <div className="Footer__content">
            <h3>© {new Date().getFullYear()} Karol Faltyn</h3>
            <div className="Footer__content-socials">
              <a
                aria-label="linkedin"
                href="https://www.linkedin.com/in/karol-faltyn/"
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
              <a href="mailto:karolfaltyn03@gmail.com">
                <img src={gmail} alt="gmail" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
