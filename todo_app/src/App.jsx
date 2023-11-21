import React, { useState } from "react";
import TodoDescription from "./components/TodoDescription";
import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const todoButtonHandler = () => {
    if (todoTitle.length === 0 || todoDescription.length === 0) {
      alert("Cannot add empty todo");
    } else {
      if (editingTodo) {
        // Update existing todo if in edit mode
        setTodoList((prevState) =>
          prevState.map((todo) =>
            todo.id === editingTodo.id
              ? { ...todo, title: todoTitle, description: todoDescription }
              : todo
          )
        );
        setEditingTodo(null); // Exit edit mode
      } else {
        // Add new todo
        setTodoList((prevState) => [
          ...prevState,
          { id: Math.random(), title: todoTitle, description: todoDescription },
        ]);
      }

      // Clear input fields after adding or editing todo
      setTodoTitle("");
      setTodoDescription("");
    }
  };

  const fetchTodoTitle = (title) => {
    setTodoTitle(title);
  };

  const fetchTodoDescription = (description) => {
    setTodoDescription(description);
  };

  const deleteTodoHandler = (objToBeDeleted) => {
    setTodoList((prevState) =>
      prevState.filter((todoItem) => todoItem.id !== objToBeDeleted.id)
    );
  };

  const editTodoHandler = (objToBeEdited) => {
    setEditingTodo(objToBeEdited);
    setTodoTitle(objToBeEdited.title);
    setTodoDescription(objToBeEdited.description);
  };

  return (
    <div className="h-screen bg-black text-teal-400 mx-auto w-3/4">
      <div className="flex flex-col items-center">
        <div>
          <TodoInput fetchInput={fetchTodoTitle} />
          <TodoDescription fetchTextArea={fetchTodoDescription} />
          <button
            onClick={todoButtonHandler}
            className="hover:scale-105 hover:shadow hover:shadow-teal-400 hover:shadow-x w-full mt-2 only:px-2 py-4 bg-teal-400 text-black rounded-xl"
          >
            {editingTodo ? "Update Todo" : "Add Todo"}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap w-full mt-4 px-4">
        {todoList?.map((todo) => (
          <TodoCard
            key={todo.id}
            todoObject={todo}
            handleDelete={deleteTodoHandler}
            handleEdit={editTodoHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
