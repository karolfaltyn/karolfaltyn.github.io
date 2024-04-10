import "./my-data.css";
import CV_Karol_Faltyn from "../../assets/CV-Faltyn-Karol.pdf";

export const MyData = () => {
  return (
    <>
      <section className="my-data" id="my-data">
        <div className="container">
          <div className="MyData__title">
            <h2>CURRICULUM VITAE</h2>
            <div className="MyData__download">
              <a href={CV_Karol_Faltyn} target="_blank" rel="noreferrer">
                DOWNLOAD
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
                  <h3>WMS-DEV - Frontend Developer</h3>
                  <p className="MyData__date">November 2023 - Present</p>
                  <p>
                    • Utilized frontend frameworks for efficient application
                    development and the seamless integration of UI components.
                    <br />• Creating design in Figma and translating it into
                    code using React, TypeScript and Styled Components.
                    <br />• Contributing to strategic technology decisions by
                    providing valuable insights and recommendations, aiding in
                    the selection of optimal technologies for project
                    development and implementation.
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>2M Marek Workiewicz - Internship</h3>
                  <p className="MyData__date">February 2022 - March 2022</p>
                  <p>
                    • Coding using HTML, CSS and JavaScript to develop features
                    for both mobile and desktop platforms.
                    <br />• Implementing SEO requirements for websites.
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>2M Marek Workiewicz - Internship</h3>
                  <p className="MyData__date">June 2021</p>
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
                  <h3>IT Specialist</h3>
                  <p className="MyData__date">
                    2019 - 2023 -{" "}
                    Zespół Szkół i Placówek Oświatowych, Nysa
                  </p>
                  <p> </p>
                  <p>
                    Relevant courses: System Administration, Database
                    Management, Networking Fundamentals, Operating Systems,
                    Computer Hardware Fundamentals, Programming Fundamentals,
                    Web Programming Fundamentals
                  </p>
                </div>
              </div>
            </div>

            <div className="MyData__cv-section">
              <h2>SKILLS</h2>
              <div className="MyData__education">
                <div className="MyData__box">
                  <h3>Technologies</h3>
                  <p>
                    HTML, CSS, Sass/SCSS, Tailwind, JavaScript, React,
                    TypeScript, Git, Figma
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
