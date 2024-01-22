import "../assets/style/navbar.css";
import React, { useState, useEffect, useCallback } from "react";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [handleScroll]);

  return (
    <>
      <nav className={`nav ${visible ? "visible" : "hidden"}`} id="nav">
        <div className="container">
          <div className="Navbar__content">
            <div className="Navbar__logo">
              <a aria-current="page" href="/">
                <p>KF.</p>
              </a>
            </div>
            <div className="Navbar__options">
              <a href="/About">About</a>
              <a href="/Resume">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
