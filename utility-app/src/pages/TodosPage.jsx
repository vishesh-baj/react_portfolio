const TodosPage = () => {
  return (
    <div className="p-4 grid grid-cols-4 gap-4">
      <div className="bg-base-200 p-4 rounded-xl col-span-4">
        <form className="form-control">
          <label className="label" htmlFor="todo_input">
            <span className="label-text">Enter a todo</span>
          </label>
          <div className="flex gap-4">
            <input
              className="input input-bordered bg-base-200 flex-1"
              type="text"
              name=""
              id="todo_input"
            />
            <button className="btn btn-ghost">Add</button>
          </div>
        </form>
      </div>

      <div className="p-4 bg-base-200 col-span-4 rounded-xl">
        <h1 className="text-center">Nothing to show here</h1>
      </div>
    </div>
  );
};

export default TodosPage;
