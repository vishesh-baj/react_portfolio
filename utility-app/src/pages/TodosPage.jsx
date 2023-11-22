import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoSchema } from "../schema";

const TodosPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(todoSchema) });

  const onSubmit = (data) => console.log(data);

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
        <h1 className="text-center">Nothing to show here</h1>
      </div>
    </div>
  );
};

export default TodosPage;
