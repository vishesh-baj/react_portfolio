import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchema } from "../schema";
import { useState } from "react";
import { nanoid } from "nanoid";
const TodosPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(todoSchema) });

  const [todos, setTodos] = useState([]);

  const onSubmit = (data) => {
    setTodos((prevState) => [...prevState, data.todoItem]);
  };

  const handleDelete = (todoItem) => {
    console.log("TODO TO BE DELETED: ", todoItem);
    const filteredTodos = todos.filter((todo) => todo !== todoItem);
    setTodos(filteredTodos);
  };

  const handleEdit = (todoItem) => {
    console.log("TODO TO BE EDITED: ", todoItem);
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
            <button className="btn btn-ghost">Add</button>
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
              <li key={nanoid()} className="collapse bg-base-200">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-base-300 peer-checked:text-base-content">
                  {todo}
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-300 peer-checked:text-secondary-content">
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleDelete(todo)}
                      className="btn btn-error btn-outline"
                    >
                      delete
                    </button>
                    <button
                      onClick={() => handleEdit(todo)}
                      className="btn btn-primary btn-outline"
                    >
                      edit
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodosPage;
