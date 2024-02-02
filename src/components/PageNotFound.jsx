import { Outlet, Link } from "react-router-dom";

import "../assets/style/pagenotfound.css";

export const PageNotFound = () => {
  let error = require("../assets/images/svg-on-pages/error.svg").default;
  let go_back =
    require("../assets/images/other-icons/left-arrow-icon.svg").default;

  return (
    <>
      <section className="pagenotfound" id="pagenotfound">
        <div className="container">
          <div className="PageNotFound__content">
            <img src={error} alt="error 404" className="PageNotFound__img-content" />
            <h1>Error 404!</h1>
            <p>Page not found</p>
            <Link to="/">
              Lets go back
              <img src={go_back} alt="back arrow" />
            </Link>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};
