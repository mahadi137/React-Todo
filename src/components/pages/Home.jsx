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
  //Toggle the database
  const [toggleModifiedData, setToggleModifiedData] = useState(false);
  //useEffect use after delete button click
  const [latestModifiedData, setLatestModifiedData] = useState(false);

  //For loading data from database
  useEffect(() => {
    async function getData() {
      const data = await Data();
      setTodoData(data);
    }
    getData();
    //load data once there is a change in database
  }, [latestModifiedData]);

  //Submit button functionality
  function submitHandler(e) {
    // e.preventDefault();
    if (!InputText || !TagText) {
      //if user forget to input todo text or tag
      //only tag is not enough
      alert("Please Fill Both Section!");
    } else if (editId) {
      //e.preventDefault();
      //if user click on edit button
      //only for purticular id
      setTodoData(
        todoData.map((e) => {
          if (e.id === editId) {
            //only for purticular id
            fetch("http://localhost:3010/posts/" + editId, {
              method: "PATCH",
              body: JSON.stringify({
                tag: TagText.toLowerCase(),
                todo: InputText.toLowerCase(),
                time: new Date().getTime(),
                completed: false,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then((response) => response.json());
            setLatestModifiedData(!latestModifiedData);
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
          time: new Date().getTime(),
          completed: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }).then((response) => response.json());
      setLatestModifiedData(!latestModifiedData);

      //After click submit button fields will be empty
      setInputText("");
      setTagText("");
    }
  }

  //To order the list according to latest modification time
  //Todo list order button Handler
  function modifiedListHandler() {
    //Change or toggle the previous boolean state
    setToggleModifiedData(!toggleModifiedData);
  }

  //Toggle database and send specific database for render
  const finalData = toggleModifiedData
    ? todoData.sort((a, b) => b.time - a.time)
    : todoData.sort((a, b) => a.time - b.time);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>

      <TodoInput
        InputText={InputText}
        setInputText={setInputText}
        TagText={TagText}
        setTagText={setTagText}
        //passing Submit Handler function
        submitHandler={submitHandler}
      />

      <Search
        searchTearm={searchTearm}
        setSearchTearm={setSearchTearm}
        modifiedListHandler={modifiedListHandler}
      />

      <TodoList
        key={Math.floor(Math.random() * 1005 + 205)}
        searchTearm={searchTearm}
        setInputText={setInputText}
        setTagText={setTagText}
        finalData={finalData}
        setTodoData={setTodoData}
        setEditId={setEditId}
        todoData={todoData}
        setLatestModifiedData={setLatestModifiedData}
        latestModifiedData={latestModifiedData}
      />
    </div>
  );
}

export default Home;
