import React from 'react'
import './Register.css'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <div className="register-page">
      <h2 className="register-head">Register <span>New</span> </h2>
      <form>
      <div>
          <label className="label">Name:</label>
          <input className="inp" type="text" />
        </div>
        <div>
          <label className="label">E-Mail:</label>
          <input className="inp" type="email" />
        </div>
        <div>
          <label className="label">Password:</label>
          <input className="inp" type="password" />
        </div>
        <div className="btn-mid">
          <button className="btn" type="submit">
            Register
          </button>
        </div>
      </form>
      <NavLink to="/login" >Already here ? Goto Login..</NavLink>
    </div>
  )
}

export default Register
