import React from "react";

//CSS
import "../components/TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="div-todo-li">
      <li>
        <p>{props.text}</p>
        <div className="li-button">
          <button className="submit-button check" type="submit">
            <i class="fas fa-check"></i>
          </button>
          <button className="submit-button edit" type="submit">
            <i class="far fa-edit"></i>
          </button>
          <button className="submit-button trash" type="submit">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
