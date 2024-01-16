import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="content">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="content-socials">
              <a
                aria-label="linkedin"
                href="https://www.linkedin.com/in/karol-faltyn/"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandLinkedin width={32} height={32} />
              </a>
              <a
                aria-label="github"
                href="https://github.com/karolfaltyn"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandGithub width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
