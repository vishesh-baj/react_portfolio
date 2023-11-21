import { useState } from "react";

const TodoDescription = ({ fetchTextArea }) => {
  const [todoDescription, setTodoDescription] = useState("");
  const todoDescriptionHandler = (e) => {
    setTodoDescription(e.target.value);
    fetchTextArea(e.target.value);
  };

  return (
    <div>
      <textarea
        className="px-2 py-4 text-teal-400 rounded-xl bg-transparent border border-teal-400 outline-none"
        placeholder="enter todo description "
        id="todo-description"
        cols="30"
        rows="3"
        value={todoDescription}
        onChange={todoDescriptionHandler}
      ></textarea>
    </div>
  );
};

export default TodoDescription;
