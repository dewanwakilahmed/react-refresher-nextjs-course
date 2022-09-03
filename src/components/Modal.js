import React from "react";

const Modal = (props) => {
  const handleConfirm = () => {
    props.onConfirm();
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={handleConfirm}>
        Confirm
      </button>
      <button className="btn" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default Modal;
