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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum aut debitis, atque eaque id provident tempore
                    eligendi non, magnam recusandae cum? Tempora earum soluta
                    itaque!
                  </p>
                </div>
                <div className="MyData__box">
                  <h3>2M Marek Workiewicz</h3>
                  <p className="MyData__date">
                    February 2022 - March 2022, Internship
                  </p>
                  <p></p>
                </div>
                <div className="MyData__box">
                  <h3>2M Marek Workiewicz</h3>
                  <p className="MyData__date">June 2021, Internship</p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="MyData__cv-section">
              <h2>EDUCATION</h2>
              <div className="MyData__education">
                <div className="MyData__box">
                  <h3>Zespół Szkół i Placówek Oświatowych w Nysie</h3>
                  <p className="MyData__date">ADD DATE</p>
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
                  <p></p>
                </div>
                <div className="MyData__box">
                  <h3>Other</h3>
                  <p>INF01, INF02</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
