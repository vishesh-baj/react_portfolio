import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Car Insurance",
      amount: 293.34,
      date: new Date(2023, 11, 23),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amount: 94.112,
      date: new Date(2023, 3, 12),
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 110,
      date: new Date(2023, 1, 21),
    },
  ]);

  const addExpense = (expenseObj) => {
    setExpenses((prevState) => [...prevState, expenseObj]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
