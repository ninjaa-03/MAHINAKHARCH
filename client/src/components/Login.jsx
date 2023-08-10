import React, { useState } from "react";
import "./Login.css";
import {NavLink} from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    
  }
  function handleInput(e){
    console.log(e);
    setForm({...form,[e.target.name]:e.target.value})
  }


  return (
    <div className="login-page">
      <h2 className="login-head">Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">E-Mail:</label>
          <input
            className="inp"
            onChange={handleInput}
            name="email"
            value={form.email}
            type="email"
          />
        </div>
        <div>
          <label className="label">Password:</label>
          <input
            className="inp"
            name="password"
            onChange={handleInput}
            value={form.password}
            type="password"
          />
        </div>
        <div className="btn-mid">
          <button className="btn" type="submit">
            Login
          </button>
          
        </div>
      </form>
      <NavLink to="/register" >New here ? Goto Register..</NavLink>
    </div>
  );
}

export default Login;
