const TodoCard = ({ todoObject, handleDelete, handleEdit }) => {
  return (
    <div className="border border-teal-400 rounded-xl  p-4" key={todoObject.id}>
      <h2 className="text-4xl">{todoObject.title}</h2>
      <br />
      <p className="text-sm">{todoObject.description}</p>
      <hr />
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => handleDelete(todoObject)}
          className="border p-2 border-teal-400 rounded-xl"
        >
          Delete
        </button>
        <button
          onClick={() => handleEdit(todoObject)}
          className="border p-2 border-teal-400 rounded-xl"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
