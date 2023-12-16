import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";

const TodoPage = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      const updatedTodos = [...allTodos];
      updatedTodos[editIndex] = todo;
      setAllTodos(updatedTodos);
      setEditMode(false);
    } else {
      setAllTodos((prevTodos) => [...prevTodos, todo]);
    }
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (selectedTodo) => {
    const filteredArr = allTodos.filter((todo) => todo !== selectedTodo);
    setAllTodos(filteredArr);
  };

  const handleEdit = (editTodo, index) => {
    setTodo(editTodo);
    setEditIndex(index);
    setEditMode(true);
  };

  return (
    <div className="w-screen h-screen">
      <main className="p-8 justify-center flex">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <div className="form-control">
            <input
              onChange={handleChange}
              className="input input-accent"
              type="text"
              value={todo}
              name=""
              id=""
            />
          </div>
          <button type="submit" className="btn btn-accent">
            {editMode ? "EDIT" : "ADD"}
          </button>
        </form>
      </main>
      <section className="w-3/4 flex flex-col items-center gap-4 justify-center mx-auto mt-4">
        {allTodos.map((todo, index) => (
          <div
            className=" w-1/2 flex items-center justify-between bg-base-200 p-4 rounded-xl"
            key={index}
          >
            <h1>{todo}</h1>
            <div>
              <button
                onClick={() => handleDelete(todo)}
                className="btn btn-circle "
              >
                <AiOutlineDelete className="text-2xl" />
              </button>
              <button
                onClick={() => handleEdit(todo, index)}
                className="btn btn-circle"
              >
                <MdModeEdit className="text-2xl" />
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TodoPage;
