import { IconMail, IconMapSearch } from "@tabler/icons-react";
import "../assets/style/contact.css";

export const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="Contact__content">
            <div className="Contact_title">
              <p>Info</p>
              <h3>Contact me</h3>
            </div>

            <div className="Contact__options">
              <div className="Contact__icon-box">
                <span>
                  <IconMapSearch width={30} height={30}></IconMapSearch>
                </span>
                <div className="Contact__info">
                  <h3>Location</h3>
                  <p>Wrocław, Poland</p>
                </div>
              </div>

              <div className="Contact__icon-box">
                <span>
                  <IconMail width={30} height={30}></IconMail>
                </span>
                <div className="Contact__info">
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
