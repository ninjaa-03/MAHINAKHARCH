import React, { useState } from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.status !== 200 || !data) window.alert("Failed registration");
    else {
      window.alert("Successful");
      navigate("/login");
    }
  };

  return (
    <div className="register-page">
      <h2 className="register-head">
        Register <span>New</span>{" "}
      </h2>
      <form>
        <div>
          <label className="label">Name:</label>
          <input
            className="inp"
            onChange={handleInput}
            value={form.name}
            name="name"
            type="text"
          />
        </div>
        <div>
          <label className="label">E-Mail:</label>
          <input
            className="inp"
            onChange={handleInput}
            value={form.email}
            name="email"
            type="email"
          />
        </div>
        <div>
          <label className="label">Password:</label>
          <input
            className="inp"
            onChange={handleInput}
            value={form.password}
            name="password"
            type="password"
          />
        </div>
        <div className="btn-mid">
          <button onClick={handleSubmit} className="btn" type="submit">
            Register
          </button>
        </div>
      </form>
      <NavLink to="/login">Already here ? Goto Login..</NavLink>
    </div>
  );
}

export default Register;
