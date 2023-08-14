import React, { useEffect, useState } from "react";
import "./User.css";
import 'react-toastify/dist/ReactToastify.css';
const { useNavigate } = require("react-router-dom");
const { ToastContainer, toast } = require( 'react-toastify' );


function User() {
  const navigate = useNavigate();
  const [user, setUser] = useState("User");
  const [total, setTotal] = useState("");
  const notify = () => toast("Wait Adding your New Entry !");
  const notified = () => toast("Successfully Added !")

  useEffect(() => {
    callUser();
  }, []);

  useEffect(() => {
    callTotal();
  });

  const callTotal = async (req, res) => {
    try {
      const res = await fetch("/api/totalexpense", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        Credentials: true,
      });
      const { data } = await res.json();
      console.log(data);
      setTotal(data);
    } catch (e) {
      console.log(e);
    }
  };

  const callUser = async () => {
    try {
      const res = await fetch("/api/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUser(data);
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };

  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    notify();
    const res = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 200 || !data) {
      notified();
      setForm({ amount: 0, description: "", date: "" });
    }
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="user-page">


    <div className="left">
      <h2 className="mail">{user.name}</h2>
      <h5 className="mail">{user.email}</h5>
      <div className="circle">
        <div className="text-cir">
        Rs.{total}
        <h5>Last 1 Month Expense</h5>
        </div>
      </div>
    </div>


      <div className="new-item">
        <h1 className="new-item-head">Add new Expense</h1>

        <form>
          <div>
            <label className="label">Amount:</label>
            <input
              className="inp"
              name="amount"
              value={form.amount}
              onChange={handleInput}
              type="number"
            />
          </div>
          <div>
            <label className="label">Expense Description:</label>
            <input
              placeholder="Enter the description"
              className="inp"
              name="description"
              value={form.description}
              onChange={handleInput}
              type="text"
            />
          </div>
          <div>
            <label className="label">Date:</label>
            <input
              className="inp"
              name="date"
              value={form.date}
              onChange={handleInput}
              type="date"
            />
          </div>
          <div className="btn-mid">
            <button onClick={handleSubmit} className="btn" type="submit">
              Add New Expense
            </button>
            <ToastContainer/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
