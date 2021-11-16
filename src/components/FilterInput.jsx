import React from "react";

//CSS
import "../components/FilterInput.css";

//Importing components
import TitleText from "../components/TitleText";

const FilterInput = () => {
  return (
    <div className="select-option">
      <TitleText className="select-title" title="Filter" />
      <select name="todo-status" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default FilterInput;
