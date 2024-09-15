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
                  <a
                    href="https://github.com/karolfaltyn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    karolfaltyn.github.io
                  </a>
                </li>
                <li className="MyData__contact-option">
                  <a href="mailto:karolfaltyn03@gmail.com" aria-label="gmail">
                    karolfaltyn03@gmail.com
                  </a>
                </li>
                <li className="MyData__contact-option">
                  <a
                    href="https://www.linkedin.com/in/karolfaltyn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/karolfaltyn
                  </a>
                </li>
              </ul>
            </div>

            <div className="MyData__cv-section">
              <h2>EXPERIENCE</h2>
              <div className="MyData__experience">
                <div className="MyData__box">
                  <h3>Data Entry - Acturis Poland, Wrocław</h3>
                  <p className="MyData__date">July 2024 - Present</p>
                  <p>
                    • Administering and updating insurance policies, conducting
                    detailed data analysis to ensure accuracy and compliance
                    with industry standards.
                    <br />• Collaborating with a UK-based team to resolve
                    insurance policy issues while managing and safeguarding
                    sensitive data in compliance with privacy regulations.
                    <br />• Analyzing insurance policy data to enhance project
                    relevance and functionality.
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>
                    Frontend Developer - WMS-DEV - Scientific Circle, Wrocław
                  </h3>
                  <p className="MyData__date">November 2023 - Present</p>
                  <p>
                    • Designing and prototyping in Figma, translating designs
                    into functional interfaces using React, TypeScript, and
                    Styled Components.
                    <br />
                    • Using JetBrains Space to manage tasks effectively,
                    facilitating collaboration and streamlining project tracking
                    within the team.
                    <br />• Providing strategic insights on technology choices,
                    assisting the team in selecting optimal tools and frameworks
                    for ongoing project development and implementation.
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>Internship - 2M Marek Workiewicz, Nysa</h3>
                  <p className="MyData__date">February 2022 - March 2022</p>
                  <p>
                    • Developed features for both mobile and desktop platforms
                    using HTML, CSS and JavaScript.
                    <br />• Applied SEO best practices to boost website
                    visibility and performance.
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>Internship - 2M Marek Workiewicz, Nysa</h3>
                  <p className="MyData__date">June 2021</p>
                  <p>
                    • Developed websites ensuring cross-browser integration and
                    compatibility.
                    <br />
                    • Performed comprehensive troubleshooting for hardware and
                    software issues.
                    <br />• Conducted installation and configuration of programs
                    and drivers.
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
                    2019 - 2023 - Zespół Szkół i Placówek Oświatowych, Nysa
                  </p>
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
                    HTML, CSS, Sass/SCSS, Tailwind CSS, JavaScript, React,
                    TypeScript
                  </p>
                  <br />
                  <h3>Familiar</h3>
                  <p>Python, C++, SQL</p>
                  <br />
                  <h3>Other</h3>
                  <p>Git, Docker, Figma, Linux</p>
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
