import { useEffect, useReducer } from "react";
import { todoReducer } from "../../reducers/todoReducer";
import "./TodoModal.css";
function TodoModal({ setShowModal }) {
  const [todolist, dispatch] = useReducer(todoReducer, []);
  useEffect(() => {
    dispatch({ type: "GET_TODO" });
  }, []);
  return (
    <div className="todo-modal position-absolute mr-9 mb-9 txt-white p-9 display-flex flex-col gap-1">
      <p className="txt-md">Today</p>
      <div className="todo-list display-flex flex-col gap-1 pr-6">
        {todolist.length !== 0 ? (
          <ul>
            {todolist.map(({ id, isChecked, content }) => (
              <li
                key={id}
                className="display-flex align-items-center todo-item">
                {" "}
                <label className="display-flex align-items-center gap-1 py-5">
                  <input
                    type="checkbox"
                    onChange={() =>
                      dispatch({ type: "TOGGLE_CHECKED", payload: id })
                    }
                    checked={isChecked}
                    className="todo-checkbox"
                  />
                  <p
                    className={`todo-content pb-2 ${
                      isChecked ? `slashed` : ""
                    }`}>
                    {content}
                  </p>
                </label>
                <button
                  className="todo-delete txt-white ml-auto"
                  onClick={() => {
                    dispatch({ type: "DELETE_TODO", payload: id });
                  }}>
                  <i className="fas fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="todo-empty display-flex justify-content-center align-items-center">
            <p className="todo-empty-text">Add a todo to get started</p>
          </div>
        )}
      </div>
      <button
        className="modal-close-btn mr-9 mt-9"
        onClick={() => setShowModal((state) => !state)}>
        <i className="fas fa-times"></i>
      </button>
      <input
        type="text"
        className="todo-input pb-2"
        placeholder="New Todo"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.target.value !== "") {
              dispatch({ type: "ADD_TODO", payload: e.target.value });
              e.target.value = "";
            }
          }
        }}
      />
    </div>
  );
}

export { TodoModal };
