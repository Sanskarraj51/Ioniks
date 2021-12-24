import React, { useEffect, useState } from "react";
import "./Nav.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 80) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://jioreliance4g.in/wp-content/uploads/2020/11/Aha_Telugu_App_Apk_Download.png"
          alt=""
        />

        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
