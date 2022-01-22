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
      if (foundItem.id === props.id) {
        //Set todo text in input field
        props.setInputText(foundItem.todo);
        //Set todo tag in tag field
        props.setTagText(foundItem.tag);
        //get id
        props.setEditId(props.id);
      }
      return "";
    });
  };

  //Delete button Functionality
  const deleteHandler = (e) => {
    //e.preventDefault();
    props.setTodoData(
      props.finalData.map((item) => {
        //Target todo with matching ID
        if (item.id === props.id) {
          fetch("http://localhost:3010/posts/" + props.id, {
            method: "PATCH",
            body: JSON.stringify({
              //Only change False to True
              completed: true,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then((response) => response.json());
          props.setLatestModifiedData(!props.latestModifiedData);
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

        <div className="div-button">
          <button
            //Todo Complete Button
            onClick={todoCompleteHandler}
            className={"button-check"}
            type="submit"
          >
            <i className="fas fa-check"></i>
          </button>

          <button
            //Todo Edit Button
            onClick={todoEditHandler}
            className="button-edit"
            type="button"
          >
            <i className="far fa-edit"></i>
          </button>

          <button
            //Todo Delete Button
            onClick={deleteHandler}
            className="button-trash"
            type="button"
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
