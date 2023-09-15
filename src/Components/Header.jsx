import React from "react";
import Search from "./atom/Search";
import tv from "../Assets/tv.png";
import imbd from "../Assets/ibdm.png";
import fruit from "../Assets/fruit.png";
import hamburger from "../Assets/hamburger-button.svg";
import play from "../Assets/Play.svg";

function Header() {
  return (
    <div className="background-container">
      <div className="background-text">
        <div className="first-heading">
          <div className="movie-boxcon">
            <img src={tv} /> <p>MovieBox</p>
          </div>
          <div>
            <Search />
          </div>
          <div className="hamburger-container">
            <p>Sign in</p>
            <img
              src={hamburger}
              className="layout hamburger"
              style={{ color: "#ffffff" }}
              alt=""
            />
          </div>
        </div>
        <div className="johnwick-story">
          <h2>
            John wick 3: <br></br> Parabellum
          </h2>
          <div style={{ marginTop: "10px" }}>
            <span>
              {" "}
              <img src={imbd} />
              86.0/100
            </span>
            <span style={{ marginLeft: "18px" }}>
              <img src={fruit} /> 97%
            </span>
          </div>
          <div className="content">
            <p>
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
          </div>
          <div>
            <span className="trailer">
              <img src={play} alt="" />
              Watch Trailer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
