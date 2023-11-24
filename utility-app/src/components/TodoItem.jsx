const TodoItem = ({ handleDelete, handleEdit, todo }) => {
  return (
    <div>
      {" "}
      <li key={todo.id} className="collapse bg-base-200">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-accent text-primary-content peer-checked:bg-base-300 peer-checked:text-base-content">
          {todo.todoItem}
        </div>
        <div className="collapse-content bg-accent text-primary-content peer-checked:bg-base-300 peer-checked:text-secondary-content">
          <div className="flex gap-4">
            <button
              onClick={() => handleDelete(todo)}
              className="btn btn-error btn-outline"
            >
              delete
            </button>
            <button
              onClick={() => {
                handleEdit(todo);
                document.getElementById("todo_edit_modal").showModal();
              }}
              className="btn btn-primary btn-outline"
            >
              edit
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
