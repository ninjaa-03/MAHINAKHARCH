import React, { useContext, useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Login() {
  const {state, dispatch} = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await  res.json();

    if (res.status === 400 || !data) {
      window.alert("Login Failed");
    } else {
      dispatch({type:"USER",payload:true});
      window.alert("Successfully login");
      navigate("/");
    }
  }

  return (
    <div className="login-page">
      <h2 className="login-head">Login</h2>
      <form>
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
          <button onClick={handleSubmit} className="btn" type="submit">
            Login
          </button>
        </div>
      </form>
      <NavLink to="/register">New here ? Goto Register..</NavLink>
    </div>
  );
}

export default Login;
