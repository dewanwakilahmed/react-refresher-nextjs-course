import React from "react";

const Todo = (props) => {
  const handleDelete = () => {
    console.log("Delete Button Clicked!");
    console.log(props.text);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Todo;
