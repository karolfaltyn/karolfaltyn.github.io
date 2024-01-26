import "../assets/style/aboutme.css";

export const AboutMe = () => {
  let about_me = require("../assets/images/svg-on-pages/aboutme.svg").default;

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
          </div>
        </div>
      </section>
    </>
  );
};
