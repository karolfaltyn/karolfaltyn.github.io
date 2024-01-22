import "../assets/style/navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="container">
          <div className="Navbar__content">
            <div className="Navbar__logo">
              <a aria-current="page" href="/">
                <p>KF.</p>
              </a>
            </div>
            <div className="Navbar__option">
              <a href="/About">About</a>
              <a href="/Resume">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
