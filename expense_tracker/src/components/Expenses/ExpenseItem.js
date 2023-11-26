import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = ({ expense }) => {
  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    console.log("Clicked");
    setTitle("UPDATED!");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
