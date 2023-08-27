import React, { useContext, useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import loginPic from "../img/login.png"

function Login() {
  const { state, dispatch } = useContext(UserContext);
  const notify = () => toast("Wait making you login !");
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
    notify();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Login Failed");
    } else {
      dispatch({ type: "USER", payload: true });
      navigate("/");
    }
  }

  return (
    <div className="main">

    <div className="login-pic comp">
    <img src={loginPic} alt="" />
    </div>
    <div className="login-page comp">
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
          <ToastContainer/>
        </div>
      </form>
      <NavLink to="/register">New here ? Goto Register..</NavLink>
    </div>

    </div>
  );
}

export default Login;
