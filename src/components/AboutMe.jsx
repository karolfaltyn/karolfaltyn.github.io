import "../assets/style/aboutme.css";

export const AboutMe = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="About__content">
            <div className="About__img-side">{/* <img src="" alt="" /> */}</div>
            <div className="About__text-side">
              <h3>About me</h3>
              <h4>
                Front-end Developer <br /> based in Wrocław, Poland.
              </h4>
              <p>
                Hey, my name is Karol, and I'm a Frontend Developer. My passion
                is to create web application for global reach and accessibility.
                <br />
                <br />
                My main stack currently is React.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
