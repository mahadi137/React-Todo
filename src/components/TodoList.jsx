import React from "react";

//CSS
import "../components/TodoList.css";

//Importing components
import TodoItem from "../components/TodoItem";

const TodoList = (props) => {
  return (
    <div className="div-todo-ul">
      <h3>TAG</h3>
      <ul className="todo-ul">
        {props.TodoItemsArray.map((eachTodo) => (
          <TodoItem key={eachTodo.id} text={eachTodo.text} tag={eachTodo.tag} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
