import "../assets/style/contact.css";

export const Contact = () => {
  let location = require("../assets/images/other-icons/map-icon.svg").default;
  let mail = require("../assets/images/other-icons/envelope-icon.svg").default;

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
                <img src={location} alt="map-icon" />
                <div className="Contact__text">
                  <h3>Location</h3>
                  <p>Wrocław, Poland</p>
                </div>
              </div>

              <div className="Contact__info-box">
                <img src={mail} alt="gmail" />
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
