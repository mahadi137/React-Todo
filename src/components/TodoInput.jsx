import React from "react";

//CSS
import "../components/TodoInput.css";

//Importing components
import TitleText from "../components/TitleText";
import FilterInput from "../components/FilterInput";

const TodoInput = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const tagTextHandler = (e) => {
    props.setTagText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodoItemsArray([
      ...props.TodoItemsArray,
      {
        id: Math.random() * 101,
        tag: props.TagText,
        text: props.InputText,
        completed: false,
      },
    ]);
    props.setInputText("");
    props.setTagText("");
  };

  return (
    <div className="div-form">
      <form className="input-section">
        <div className="div-todo">
          <TitleText title="Todo" />
          <input
            onChange={inputTextHandler}
            value={props.InputText}
            type="text"
            className="todo-input"
          />
        </div>
        <div className="div-tag">
          <TitleText title="Tag" />
          <input
            onChange={tagTextHandler}
            value={props.TagText}
            type="text"
            className="tag-input"
          />
        </div>
        <button onClick={submitHandler} className="submit-button" type="submit">
          <i class="fas fa-plus-circle"></i>
        </button>
      </form>

      <FilterInput />
    </div>
  );
};

export default TodoInput;
