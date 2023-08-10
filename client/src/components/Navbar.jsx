import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [ hamburger, setHamburger] = useState(false); 
  return (
    <>
      <div className= {hamburger ? "navbar navbar-mob" : "navbar"}>
        <div className="left-one">MahinaKharch </div>
        <div>
          <ul className="middle-one">
            <li className="n-item"><NavLink to="/user" >User</NavLink></li>
            <li className="n-item"><NavLink to="/oldexpense" >Old Expenses</NavLink></li>
            <li className="n-item"><NavLink to="/login" >Login</NavLink></li>
            <li className="n-item"><NavLink to="/register" >Register</NavLink></li>
          </ul>
        </div>

        <div className="right-one">
          <NavLink to="/about">About Us</NavLink>
        </div>

        <button className="hamburger" onClick={() => setHamburger(!hamburger)}>
          { ! hamburger ? <FiMenu/> : <FiX/>}
        </button>
      </div>
    </>
  );
}

export default Navbar;
