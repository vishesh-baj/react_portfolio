import { useState } from "react";

const TodoInput = ({ fetchInput }) => {
  const [inputValue, setInputValue] = useState("");
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
    fetchInput(e.target.value);
  };

  return (
    <div className="my-4">
      <input
        placeholder="enter todo"
        className="w-full px-2 py-4 border rounded-xl bg-transparent outline-none  border-teal-400 text-teal-400"
        type="text"
        value={inputValue}
        onChange={inputValueHandler}
      />
    </div>
  );
};

export default TodoInput;
