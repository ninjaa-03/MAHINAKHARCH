import React, { useEffect, useState } from "react";
import "./OldExpense.css";
import { FcFullTrash } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const dayjs = require("dayjs");
const { useNavigate } = require("react-router-dom");

function OldExpense() {
  const navigate = useNavigate();
  const [transact, SetTransact] = useState([]);
  const notify = () => toast("Wait Deletion is in process !");
  const notified = () => toast("Successfully Deleted !")

  useEffect(() => {
    callTransactions();
  });

  const callTransactions = async () => {
    try {
      const res = await fetch("/api/oldexpense", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        Credentials: true,
      });
      const { data } = await res.json();
      SetTransact(data);
    } catch (e) {
      console.log(e);
      navigate("/login");
    }
  };

  const formatDate = (date) => {
    return dayjs(date).format("DD  MMM YYYY");
  };
  const removeItem = async (_id) => {

    if (!window.confirm("Are you sure")) return;

    notify();

    const res = await fetch(`/api/${_id}`, {
      method: "DELETE",
      headers:{
        "content-type":"application/json"
      }
    });

    if (res.ok) {
      callTransactions();
      notified();
    }
  };

  return (
    <div className="old-expenses">
      <h2>Old Expenses</h2>

      <div className="box">
        <table className="table-old">
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Change</th>
          </thead>
          <tbody>
            {transact.map((trx) => (
              <tr>
                <td>{trx.amount}</td>
                <td>{trx.description}</td>
                <td>{formatDate(trx.date)}</td>
                <td>
                  <FcFullTrash onClick={() => removeItem(trx._id)} />
                </td>
                <ToastContainer/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OldExpense;
