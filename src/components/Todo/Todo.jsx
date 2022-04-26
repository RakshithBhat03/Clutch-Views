import { useState } from "react";
import "./Todo.css";
import "./TodoModal";
import { TodoModal } from "./TodoModal";
function Todo() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <TodoModal setShowModal={setShowModal} />}
      <div
        onClick={() => setShowModal((showModal) => !showModal)}
        className="position-absolute todo txt-white mb-9 mr-9 ">
        Todo
      </div>
    </>
  );
}

export { Todo };
