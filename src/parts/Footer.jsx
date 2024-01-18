import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import "../assets/style/footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="Footer__content">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="Footer__content-socials">
              <a
                aria-label="linkedin"
                href="https://www.linkedin.com/in/karol-faltyn/"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandLinkedin width={30} height={30} />
              </a>
              <a
                aria-label="github"
                href="https://github.com/karolfaltyn"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandGithub width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
