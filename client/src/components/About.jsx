import React from "react";
import logo from "../img/logo.jpeg";
import { NavLink } from "react-router-dom";
import "./About.css";
import aboutWebsiteimg from "../img/aboutWebsiteimg.jfif";

function About() {
  return (
    <div>
      <div className="about">
        <div className="heading">About Website</div>
        <div className="section">
          <div className="left">
            <img src={aboutWebsiteimg} alt="Img" />
          </div>
          <div className="right">
            <p>
              <strong>MahinaKharch</strong>, It is a website which helps the
              User to help to track that how much money they had spend in the
              last 30 days.
              <br /> It also help user to get total amount spended by User as
              well as to keep their list of description with date and amount
              they had spended till now since they are using the Website in a
              table form for their screenshots.
            </p>
            <ul className="links">
              <li>
                {" "}
                <NavLink
                  className="btn"
                  to="https://mahinakharch.onrender.com/"
                >
                  Live
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  className="btn"
                  to="https://github.com/ninjaa-03/MAHINAKHARCH-MERN-1"
                >
                  Code
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="heading">About Developer</div>
        <div className="section2">
          <div className="right">
            <p>
            🔸 Hiiiiiiiiii....... <br />🔸 I am Nitish Kumar <br /> 🔸 I am a passionate B-Tech 3rd
              year student of Dr. A.P.J Abdul kalam Technical University of
              Computer Science Engineering branch. <br />🔸 I have enthusiasm in Web
              Development and Blockchain as well as in Competitive Programming
              which i do parallely. <br /> 🔸 Basically I am a simple as well as very
              clear minded guy who have just focus on present which makes me
              more effective and productive.
            </p>
            <ul className="links">
              <li>
                {" "}
                <NavLink
                  className="btn"
                  to="https://www.linkedin.com/in/nitish-kumar-899086221/"
                >
                  LinkedIn
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  className="btn"
                  to="https://github.com/ninjaa-03"
                >
                  Github
                </NavLink>{" "}
              </li>
            </ul>
          </div>
          <div className="left">
            <img src={logo} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
