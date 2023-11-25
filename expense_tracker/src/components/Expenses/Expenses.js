import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [expensesArr, setExpensesArr] = useState(items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    const filteredExpenses = items.filter(
      (item) => item.date.getFullYear() === Number(selectedYear)
    );
    setExpensesArr(filteredExpenses);
  };

  let expenseContent = <p>No expense found</p>;

  if (expensesArr.length > 0) {
    expenseContent = expensesArr.map((expneseItem) => (
      <ExpenseItem key={expneseItem.id} expense={expneseItem} />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
