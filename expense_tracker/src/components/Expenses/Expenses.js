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
    console.log("FILTERED YER: ", selectedYear);
    const filteredExpenses = items.filter(
      (item) => item.date.getFullYear() === Number(selectedYear)
    );
    setExpensesArr(filteredExpenses);
    console.log("FILTERED EXPENSES: ", filteredExpenses);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesArr.map((item) => {
        return <ExpenseItem key={item.id} expense={item} />;
      })}
    </Card>
  );
};

export default Expenses;
