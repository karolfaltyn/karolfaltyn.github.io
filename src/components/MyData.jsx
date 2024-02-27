import "../assets/style/mydata.css";
import CV_Karol_Faltyn_PL from "../assets/CV-Karol-Faltyn.pdf";
import CV_Karol_Faltyn_ENG from "../assets/Reasume-Karol-Faltyn.pdf";

export const MyData = () => {
  return (
    <>
      <section className="mydata" id="mydata">
        <div className="container">
          <div className="MyData__title">
            <h2>CURRICULUM VITAE</h2>
            <h2>DOWNLOAD</h2>
            <div className="MyData__download">
              <a href={CV_Karol_Faltyn_ENG} target="_blank" rel="noreferrer">
                ENGLISH
              </a>
              <a href={CV_Karol_Faltyn_PL} target="_blank" rel="noreferrer">
                POLISH
              </a>
            </div>
          </div>
          <div className="MyData__content">
            <div className="MyData__name-contacts">
              <h1>Karol Faltyn</h1>
              <ul>
                <li className="MyData__contact-option">
                  karolfaltyn.github.io
                </li>
                <li className="MyData__contact-option">
                  karolfaltyn03@gmail.com
                </li>
                <li className="MyData__contact-option">
                  linkedin.com/in/karolfaltyn
                </li>
              </ul>
            </div>

            <div className="MyData__cv-section">
              <h2>EXPERIENCE</h2>
              <div className="MyData__experience">
                <div className="MyData__box">
                  <h3>WMS-DEV</h3>
                  <p className="MyData__date">
                    November 2023 - Present, Internship
                  </p>
                  <p>
                    • Work for the science club.
                    <br />
                    • Utilized frontend frameworks for efficient application
                    development and the seamless integration of UI components.
                    <br />• Using version control to effectively manage code
                    repositories, facilitating collaboration between team
                    members.
                    <br />• Creating responsive website designs and optimizing
                    website performance.
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>2M Marek Workiewicz</h3>
                  <p className="MyData__date">
                    February 2022 - March 2022, Internship
                  </p>
                  <p>
                    • Coding using HTML, CSS and JavaScript to develop features
                    for both mobile and desktop platforms.
                    <br />• Implementing SEO requirements for websites.
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>2M Marek Workiewicz</h3>
                  <p className="MyData__date">June 2021, Internship</p>
                  <p>
                    • Website development for cross-browser integration and
                    compatibility.
                    <br />
                    • Comprehensive troubleshooting of hardware and software
                    issues.
                    <br />• Installation and configuration of drivers and
                    software.
                  </p>
                </div>
              </div>
            </div>

            <div className="MyData__cv-section">
              <h2>EDUCATION</h2>
              <div className="MyData__education">
                <div className="MyData__box">
                  <h3>Zespół Szkół i Placówek Oświatowych w Nysie</h3>
                  <p className="MyData__date">2019 - 2023</p>
                  <p>IT Technical secondary school.</p>
                </div>
              </div>
            </div>

            <div className="MyData__cv-section">
              <h2>TECHNICAL SKILLS</h2>
              <div className="MyData__education">
                <div className="MyData__box">
                  <h3>Technologies</h3>
                  <p>
                    HTML, CSS, Sass/SCSS, Tailwind, JavaScript, React, Git
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>Other</h3>
                  <p>
                  Creativity, Communication skills, Critical thinking
                  </p>
                </div>
              </div>
            </div>

            <div className="MyData__cv-section">
              <h2>CERTIFICATES</h2>
              <div className="MyData__education">
                <div className="MyData__box">
                  <h3>Cisco</h3>
                  <p>
                    IT Essentials: PC Hardware and Software,
                    <br />
                    CCNAv7: Introduction to Networks,
                    <br />
                    PCAP: Programming Essentials in Python
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>Other</h3>
                  <p>
                    INF. 02. Administration and operation of computer systems,
                    peripheral devices and local computer networks,
                    <br />
                    INF. 03. Creating and administering websites, web
                    applications and databases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
