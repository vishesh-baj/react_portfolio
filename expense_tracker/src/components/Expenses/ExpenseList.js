import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expensesArr }) => {
  if (expensesArr.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {expensesArr.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
