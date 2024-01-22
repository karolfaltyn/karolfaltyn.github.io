import "../assets/style/contact.css";

export const Contact = () => {
  let location = require("../assets/images/other-icons/map-regular-48.png");
  let mail = require("../assets/images/other-icons/envelope-regular-48.png");

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="Contact__content">
            <div className="Contact__title">
              <h2>CONTACT</h2>
              <p>Hit me up!</p>
            </div>

            <div className="Contact__options">
              <div className="Contact__info-box">
                <div className="Contact__info-img">
                  <img src={location} alt="map-icon" />
                </div>
                <div className="Contact__text">
                  <h3>Location</h3>
                  <p>Wrocław, Poland</p>
                </div>
              </div>

              <div className="Contact__info-box">
                <div className="Contact__info-img">
                  <img src={mail} alt="gmail" />
                </div>
                <div className="Contact__text">
                  <h3>Mail</h3>
                  <a href="mailto:karolfaltyn03@gmail.com">
                    karolfaltyn03@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
