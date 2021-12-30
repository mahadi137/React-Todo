import React from "react";

//Importing components
import TodoItem from "../components/TodoItem";

//CSS
import "../components/TodoList.css";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todoData
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
          .map((eachTodo) => {
            //Show data which todos are not deleted
            if (eachTodo.completed === false) {
              return (
                <div>
                  <TodoItem
                    key={eachTodo.id}
                    text={eachTodo.todo}
                    tag={eachTodo.tag}
                    eachTodo={eachTodo}
                    setInputText={props.setInputText}
                    setTagText={props.setTagText}
                    setTodoData={props.setTodoData}
                    todoData={props.todoData}
                    setEditId={props.setEditId}
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
