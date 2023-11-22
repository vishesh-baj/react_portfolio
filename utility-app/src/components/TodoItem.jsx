import { nanoid } from "nanoid";

const TodoItem = ({ handleDelete, handleEdit, todo }) => {
  return (
    <div>
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
    </div>
  );
};

export default TodoItem;
