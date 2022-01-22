import React from "react";

//Importing components
import TodoItem from "../components/TodoItem";

//CSS
import "../components/TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.finalData
          //Search Functionality
          .filter((e) => {
            //if Search is blank
            if (props.searchTearm === "") {
              return e;
              //search with only tag
            } else if (e.tag.includes(props.searchTearm.toLowerCase())) {
              return e;
              //search with only todo text
            } else if (e.todo.includes(props.searchTearm.toLowerCase())) {
              return e;
            }
            return "";
          })
          .map((eachTodo, index) => {
            //Show data which todos are not deleted
            if (eachTodo.completed === false) {
              return (
                <div key={index}>
                  <TodoItem
                    key={eachTodo.id}
                    text={eachTodo.todo}
                    tag={eachTodo.tag}
                    id={eachTodo.id}
                    setInputText={props.setInputText}
                    setTagText={props.setTagText}
                    setTodoData={props.setTodoData}
                    finalData={props.finalData}
                    setEditId={props.setEditId}
                    todoData={props.todoData}
                    setLatestModifiedData={props.setLatestModifiedData}
                    latestModifiedData={props.latestModifiedData}
                  />
                </div>
              );
            }
            return "";
          })}
      </ul>
    </div>
  );
};

export default TodoList;
