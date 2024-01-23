import React, { useState, useEffect, useCallback } from "react";
import { Outlet, Link } from "react-router-dom";
import "../assets/style/navbar.css";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
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
              <Link aria-current="page" to="/">
                <p>KF.</p>
              </Link>
            </div>
            <div className="Navbar__options">
              <Link to="/About">About</Link>
              <Link to="/Resume">Resume</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
