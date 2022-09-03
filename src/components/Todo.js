import React, { useState } from "react";

// Components
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>

      {isModalOpen && (
        <Modal onConfirm={handleCloseModal} onCancel={handleCloseModal} />
      )}
      {isModalOpen && <Backdrop onCancel={handleCloseModal} />}
    </div>
  );
};

export default Todo;
