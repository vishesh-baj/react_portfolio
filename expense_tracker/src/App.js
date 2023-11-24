import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
