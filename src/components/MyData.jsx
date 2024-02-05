import "../assets/style/mydata.css";
import CV_Karol_Faltyn from "../assets/CV_Karol_Faltyn.pdf";

export const MyData = () => {
  return (
    <>
      <section className="mydata" id="mydata">
        <div className="container">
          <div className="MyData__title">
            <h2>CURRICULUM VITAE</h2>
            <a href={CV_Karol_Faltyn} target="_blank" rel="noreferrer">
              DOWNLOAD
            </a>
          </div>
          <div className="MyData__content">
            <div className="MyData__name-contacts">
              <h1>Karol Faltyn</h1>
              <ul>
                <li className="MyData__contact-option">
                  karolfaltyn.github.io/portfolio
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
                <div className="MyData-experience-box">
                  <h3>WMS-DEV</h3>
                  <p className="MyData__experience-date">
                    November 2023 - Present
                  </p>
                  <p></p>
                </div>
                <div className="MyData-experience-box">
                  <h3>2M Marek Workiewicz</h3>
                  <p className="MyData__experience-date">
                    February 2022 - March 2022
                  </p>
                  <p></p>
                </div>
                <div className="MyData-experience-box">
                  <h3>2M Marek Workiewicz</h3>
                  <p className="MyData__experience-date">June 2021</p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="MyData__cv-section"></div>
            <div className="MyData__cv-section"></div>
          </div>
        </div>
      </section>
    </>
  );
};
