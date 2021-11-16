import React from "react";

//Importing components
import TodoItem from "../components/TodoItem";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.TodoItemsArray.map((eachTodo) => (
          <TodoItem key={eachTodo.id} text={eachTodo.text} tag={eachTodo.tag} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
