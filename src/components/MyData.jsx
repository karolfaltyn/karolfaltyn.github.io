import "../assets/style/mydata.css";
import CV_Karol_Faltyn from "../assets/CV_Karol_Faltyn.pdf";

export const MyData = () => {
  return (
    <>
      <section className="mydata" id="mydata">
        <div className="container">
          <div className="MyData__title">
            <h2>CURRICULUM VITAE</h2>
            <a href="##" target="_blank" rel="noreferrer">
              DOWNLOAD
            </a>
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
                    • Creating React web applications,
                    <br />
                    • Remote work with the team,
                    <br />• Working with git
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>2M Marek Workiewicz</h3>
                  <p className="MyData__date">
                    February 2022 - March 2022, Internship
                  </p>
                  <p>
                    • Creating and modifying web pages,
                    <br />
                    • Working with HTML, CSS, JavaScript language,
                    <br />• Services of hardware
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>2M Marek Workiewicz</h3>
                  <p className="MyData__date">June 2021, Internship</p>
                  <p>
                    • Creating and modifying web pages,
                    <br />
                    • Problem-solving with hardware and software,
                    <br />• Installation and configuration drivers and software
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
              <h2>SKILLSET</h2>
              <div className="MyData__education">
                <div className="MyData__box">
                  <h3>Tools</h3>
                  <p>HTML, CSS, JavaScript, React, Git, </p>
                </div>
                <div className="MyData__box">
                  <h3>Other</h3>
                  <p>Windows, MacOS, Linux - Ubuntu, </p>
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
