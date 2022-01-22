import React from "react";

//CSS
import "../components/TodoInput.css";

//Importing components
import TitleText from "../components/TitleText";

const TodoInput = (props) => {
  //Collect data from input field
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  //Collect data from tag field
  const tagTextHandler = (e) => {
    props.setTagText(e.target.value);
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
        <button
          //Todo Submit Button
          onClick={props.submitHandler}
          className="submit-button"
          type="submit"
        >
          <i className="fas fa-plus-circle"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
