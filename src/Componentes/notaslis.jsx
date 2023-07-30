import { useState } from "react";

const Notaslis = ({ item, onUpdate, onComplete, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item.title ?? "");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleUpdate() {
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  function handleCheckboxChange(e) {
    onComplete(item.id, e.target.checked);
  }

  return (
    <div className="notaslis border border-gray-400 p-4 rounded-lg mb-2">
      {isEdit ? (
        <form className="notaslisUpdateForm mt-3" onSubmit={handleSubmit}>
          <input
            className="border notaslisinput border-orange-500 rounded p-1 w-full bg-gray-100 text-black text-sm"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button
            className="button mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-base"
            onClick={handleUpdate}
          >
            Update
          </button>
        </form>
      ) : (
        <div className="notaslisInfo flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 h-5 w-5"
              onChange={handleCheckboxChange}
              checked={item.complete}
            />
            <span
              className={`notaslisTitle ${
                item.complete ? "line-through text-gray-400" : ""
              } text-base`}
            >
              {item.title}
            </span>
          </div>
          <div>
            <button
              className="button bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-base mr-2"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
            <button
              className="button bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-base"
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notaslis;


