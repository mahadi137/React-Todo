import React from "react";

//CSS
import "../components/TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="todo">
      <li className="todo-item">{props.text}</li>
      <button className="button-check" type="submit">
        <i class="fas fa-check"></i>
      </button>
      <button className="button-edit" type="submit">
        <i class="far fa-edit"></i>
      </button>
      <button className="button-trash" type="submit">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default TodoItem;
