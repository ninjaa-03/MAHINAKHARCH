import React, { useState } from "react";
import "./User.css";

function User() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });
  
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    await res.json();
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="user-page">
      <div className="total-bal">
        <h1 className="total-expo">Total Expenditure</h1>
        <div className="circle">
          <h2 className="text-cir">Rs. 500</h2>
        </div>
      </div>
      <div className="new-item">
        <h1 className="new-item-head">Add new Expense</h1>

        <form onSubmit={handleSubmit}>
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
            <button className="btn" type="submit">
              Add New Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
