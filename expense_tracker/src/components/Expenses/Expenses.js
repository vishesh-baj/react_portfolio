import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList expensesArr={expensesArr} />
    </Card>
  );
};

export default Expenses;
