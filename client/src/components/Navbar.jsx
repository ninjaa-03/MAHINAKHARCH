import React, { useState, useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { UserContext } from "../App";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state)
      return (
        <>
          <li className="n-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="n-item">
            <NavLink to="/oldexpense">Old Expenses</NavLink>
          </li>

          <li className="n-item">
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </>
      );
    else {
      return (
        <>
          <li className="n-item">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="n-item">
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <>
      <div className={hamburger ? "navbar navbar-mob" : "navbar"}>
        <div className="left-one">MahinaKharch </div>
        <div>
          <ul className="middle-one">
            <RenderMenu></RenderMenu>
          </ul>
        </div>

        <div className="right-one">
          <NavLink to="/about">About Us</NavLink>
        </div>

        <button className="hamburger" onClick={() => setHamburger(!hamburger)}>
          {!hamburger ? <FiMenu /> : <FiX />}
        </button>
      </div>
    </>
  );
}

export default Navbar;
