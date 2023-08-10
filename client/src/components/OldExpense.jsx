import React from "react";
import "./OldExpense.css";
import { FcFullTrash } from "react-icons/fc";

function OldExpense() {


  return (
    <div className="old-expenses">
      <h2>Old Expenses</h2>

      <div className="box">
        <table className="table-old">
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Delete</th>
          </thead>
          <tbody>
           <tr>
            <td>Rs. 500</td>
            <td>Movie</td>
            <td>24-04-2023</td>
            <td>{ <FcFullTrash/> }</td>
           </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OldExpense;
