import React, { useState } from "react";

//CSS
import "../components/TodoItem.css";

const TodoItem = (props) => {
  //State
  const [completeTodoClassName, setCompleteTodoClassName] = useState(false);

  //Toggle Class name for todo done functionality
  const todoCompleteHandler = () => {
    setCompleteTodoClassName(!completeTodoClassName);
  };

  //Edit button Functionality
  const todoEditHandler = () => {
    props.todoData.find((foundItem) => {
      //Target todo with matching ID
      if (foundItem.id === props.eachTodo.id) {
        //Set todo text in input field
        props.setInputText(foundItem.todo);
        //Set todo tag in tag field
        props.setTagText(foundItem.tag);
        //get id
        props.setEditId(props.eachTodo.id);
      }
      return "";
    });
  };

  //Delete button Functionality
  const deleteHandler = () => {
    props.setTodoData(
      props.todoData.map((item) => {
        //Target todo with matching ID
        if (item.id === props.eachTodo.id) {
          fetch("http://localhost:3010/posts/" + props.eachTodo.id, {
            method: "PATCH",
            body: JSON.stringify({
              //Only change False to True or vise versa
              completed: !item.completed,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then((response) => response.json());
        }
        return item;
      })
    );
  };

  return (
    <div className="full-todo-item">
      <p className="todo-item-tag">{props.tag}</p>
      <div className="todo">
        <li
          //Class name toggle
          //Will show text in gey color with line through
          className={
            completeTodoClassName ? "todo-item completedStyle" : "todo-item"
          }
        >
          {props.text}
        </li>

        <button
          //Todo Complete Button
          onClick={todoCompleteHandler}
          className={"button-check"}
          type="submit"
        >
          <i class="fas fa-check"></i>
        </button>

        <button
          //Todo Edit Button
          onClick={todoEditHandler}
          className="button-edit"
          type="submit"
        >
          <i class="far fa-edit"></i>
        </button>

        <button
          //Todo Delete Button
          onClick={deleteHandler}
          className="button-trash"
          type="submit"
        >
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
