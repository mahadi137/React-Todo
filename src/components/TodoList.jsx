import React from "react";

//CSS
import "../components/TodoList.css";

//Importing components
import TodoItem from "../components/TodoItem";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.TodoItemsArray.map((eachTodo) => (
          <TodoItem key={eachTodo.id} text={eachTodo.text} tag={eachTodo.tag} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
