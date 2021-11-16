import React from "react";

//Importing components

const TodoItem = (props) => {
  return (
    <div>
      <li>
        <h3>{props.tag}</h3>
        <p>{props.text}</p>
        <button className="submit-button" type="submit">
          <i class="fas fa-check"></i>
        </button>
        <button className="submit-button" type="submit">
          <i class="far fa-edit"></i>
        </button>
        <button className="submit-button" type="submit">
          <i class="far fa-trash-alt"></i>
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
