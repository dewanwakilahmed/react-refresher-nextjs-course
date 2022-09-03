import React, { useState } from "react";

// Components
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>

      {isModalOpen && <Modal />}
      {isModalOpen && <Backdrop />}
    </div>
  );
};

export default Todo;
