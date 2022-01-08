import React, { useState, useEffect } from "react";

//Importing components
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import Search from "../../components/Search";
import Data from "../../components/fetch";

//CSS
import "../../App.css";

function Home() {
  //State management
  //For user defined input text and tag
  const [InputText, setInputText] = useState("");
  const [TagText, setTagText] = useState("");
  //For user defined search terms
  //Letting user search and find info with any further click
  const [searchTearm, setSearchTearm] = useState("");
  //To get info form our database
  const [todoData, setTodoData] = useState([]);
  //For edit funtionality
  const [editId, setEditId] = useState("");

  //For loading data from database
  useEffect(() => {
    async function getData() {
      const data = await Data();
      setTodoData(data);
    }
    getData();
    //load data once there is a change in database
  }, [todoData]);

  //Submit button functionality
  function submitHandler() {
    if (!InputText) {
      //if user forget to input todo text
      //only tag is not enough
      alert("Please Fill Data First!");
    } else if (editId) {
      //if user click on edit button
      //only for purticular id
      setTodoData(
        todoData.map((e) => {
          if (e.id === editId) {
            //only for purticular id
            fetch("http://localhost:3010/posts/" + editId, {
              method: "PATCH",
              body: JSON.stringify({
                ...e,
                tag: TagText.toLowerCase(),
                todo: InputText.toLowerCase(),
                //False will let update info on not completed list
                completed: false,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then((response) => response.json());
            //After click submit button fields will be empty
            setInputText("");
            setTagText("");
          }
          return "";
        })
      );
    } else {
      //For normal input fuctonality handle
      fetch("http://localhost:3010/posts/", {
        method: "POST",
        body: JSON.stringify({
          //All info convert to lowercase
          tag: TagText.toLowerCase(),
          todo: InputText.toLowerCase(),
          completed: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then((response) => response.json());
      //After click submit button fields will be empty
      setInputText("");
      setTagText("");
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
        <hr />
      </header>

      <TodoInput
        InputText={InputText}
        setInputText={setInputText}
        TagText={TagText}
        setTagText={setTagText}
        //passing Submit Handler function
        submitHandler={submitHandler}
      />

      <Search searchTearm={searchTearm} setSearchTearm={setSearchTearm} />
      <TodoList
        searchTearm={searchTearm}
        setInputText={setInputText}
        setTagText={setTagText}
        todoData={todoData}
        setTodoData={setTodoData}
        setEditId={setEditId}
      />
    </div>
  );
}

export default Home;