import "../assets/style/aboutme.css";

export const AboutMe = () => {
  let about_me = require("../assets/images/svg-on-pages/aboutme.svg").default;
  let about_me2 = require("../assets/images/svg-on-pages/aboutme2.svg").default;

  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="About__content">
            <div className="About__title">
              <h2>ABOUT ME</h2>
              <p>Hey, my name is Karol Faltyn</p>
            </div>
            <div className="About__box">
              <div className="About__text-side">
                <p>
                  My passion is to create web application for global reach and
                  accessibility.
                  <br />
                  <br />
                  My main stack currently is React.
                </p>
              </div>
              <div className="About__img-side">
                <img src={about_me} alt="aboutme" />
              </div>
            </div>
            <div className="About__box">
              <div className="About__text-side">
                <h5>How it's started.</h5>
                <p>
                  My adventure with frontend began in the second year of IT
                  technical secondary school. Before I knew it, programming
                  became my passion. I immediately started writing small
                  projects to practice and expand knowledge. My school organized
                  two months internship in a company, where I strengthened my
                  teamwork skills and continued to improve my programming
                  experience and other knowledge related to computer networks
                  and databases. I also earned several Cisco certifications,
                  thanks to my school's collaboration with the Cisco Networking
                  Academy. At the end of secondary school I became an IT
                  specialist, passing the INF 02, INF 03 IT exams and the
                  secondary school leaving exam.
                </p>
              </div>
            </div>
            <div className="About__box">
              <div className="About__text-side">
                <h5>How it's going.</h5>
                <p>
                  Currently, since November 2023, I am a member of the official
                  developer's circle in Wrocław University of Science and
                  Technology -{" "}
                  <span>
                    <a
                      href="https://wmsdev.pl/"
                      aria-label="WMS_DEV"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WMS_DEV
                    </a>
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="About__box">
              <div className="About__text-side">
                <h5>Other facts</h5>
                <p>
                  Beside from my passion for programming, I am also interested
                  in classic men's fashion, calisthenics and psychology, in
                  particular the psychology of human behavior.
                </p>
              </div>
            </div>
            <div className="About__img">
              <img src={about_me2} alt="aboutme" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
