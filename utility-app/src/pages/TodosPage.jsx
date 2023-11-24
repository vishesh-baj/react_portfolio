import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchema } from "../schema";
import { useState } from "react";
import { nanoid } from "nanoid";
import TodoItem from "../components/TodoItem";

const TodosPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(todoSchema) });

  const [todos, setTodos] = useState([]);
  const [todoToBeEdited, setTodoToBeEdited] = useState("");
  const [editedTodo, seteditedTodo] = useState("");

  const onSubmit = (data) => {
    setTodos((prevState) => [
      ...prevState,
      { id: nanoid(), todoItem: data.todoItem },
    ]);
    reset();
  };

  const handleDelete = (todoItem) => {
    console.log("TODO TO BE DELETED: ", todoItem);
    const filteredTodos = todos.filter((todo) => todo !== todoItem);
    setTodos(filteredTodos);
  };

  const handleEdit = (todo) => {
    setTodoToBeEdited(todo);
    seteditedTodo(todo.todoItem);
    document.getElementById("todo_edit_modal").showModal();
  };

  const handleSaveTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo === todoToBeEdited ? { ...todo, todoItem: editedTodo } : todo
    );
    setTodos(updatedTodos);
    setTodoToBeEdited("");
    document.getElementById("todo_edit_modal").close();
  };

  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      <div className="bg-base-200 p-4 rounded-xl col-span-4">
        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
          <label className="label" htmlFor="todo_input">
            <span className="label-text">Enter a todo</span>
          </label>
          <div className="flex gap-4">
            <input
              {...register("todoItem")}
              className="input input-bordered bg-base-200 flex-1"
              type="text"
              name="todoItem"
              id="todo_input"
            />
            <button className="btn btn-ghost">ADD</button>
          </div>
          <p className="text-rose-400 mt-4">{errors.todoItem?.message}</p>
        </form>
      </div>

      <div className="p-4 bg-base-200 col-span-4 rounded-xl">
        {todos.length === 0 ? (
          <h1 className="text-center">Nothing to show here</h1>
        ) : (
          <ul className="grid gap-4">
            {todos.map((todo) => (
              <TodoItem
                key={nanoid()}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                todo={todo}
              />
            ))}
          </ul>
        )}
      </div>

      {/* edit modal */}

      <dialog
        id="todo_edit_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Todo</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="form-control">
            <label className="label" htmlFor="editedTodo">
              <span className="label-text">Edit Todo</span>
            </label>
            <input
              className="input input-borered"
              value={editedTodo}
              onChange={(e) => seteditedTodo(e.target.value)}
              type="text"
              id="editedTodo"
            />
          </div>
          <div className="modal-action">
            <form className="flex gap-4" method="dialog">
              <button onClick={handleSaveTodo} className="btn btn-primary">
                Save
              </button>
              <button
                onClick={() =>
                  document.getElementById("todo_edit_modal").close()
                }
                className="btn"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default TodosPage;
