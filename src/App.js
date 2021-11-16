import React, { useState } from "react";

//CSS
import "./App.css";

//Importing components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [InputText, setInputText] = useState("");
  const [TagText, setTagText] = useState("");
  const [TodoItemsArray, setTodoItemsArray] = useState([]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
        <hr />
      </header>
      <TodoInput
        //Todo Input
        InputText={InputText}
        setInputText={setInputText}
        TodoItemsArray={TodoItemsArray}
        setTodoItemsArray={setTodoItemsArray}
        //Tag Input
        TagText={TagText}
        setTagText={setTagText}
      />

      <TodoList TodoItemsArray={TodoItemsArray} />
    </div>
  );
}

export default App;
