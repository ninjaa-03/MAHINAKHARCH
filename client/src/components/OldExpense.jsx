import React, { useEffect, useState } from "react";
import "./OldExpense.css";
import { FcFullTrash } from "react-icons/fc";
const dayjs = require("dayjs");

function OldExpense() {
  const [transact, SetTransact] = useState([]);
  
  useEffect(() => {
    callTransactions();
  }, []);

  const callTransactions = async () => {
    const res = await fetch("/oldexpense");
    const { data } = await res.json();
    SetTransact(data);
  };
  const formatDate = (date)=>{
    return dayjs(date).format("DD  MMM  YYYY");
  }
  const removeItem = async (_id)=>{
    if(!window.confirm("Are you sure")) return;
    const res = await fetch(`/${_id}`,{
      method:"DELETE",
    })
    if(res.ok){
      window.alert("Deleted");
      callTransactions();
    }
  }

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
                <td><FcFullTrash onClick={()=>removeItem(trx._id)} /></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OldExpense;
