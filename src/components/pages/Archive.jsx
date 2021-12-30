import React, { useState, useEffect } from "react";

//Fetching data from database
import Data from "../../components/fetch";

//CSS
import "./pagesStyle.css";

export default function Archive() {
  const [archiveDataTodoData, setArchiveDataTodoData] = useState([]);

  //For loading data from database
  useEffect(() => {
    async function getData() {
      const archiveData = await Data();
      setArchiveDataTodoData(archiveData);
    }
    getData();
  }, [archiveDataTodoData]);

  return (
    <div className="archive">
      <h1 className="heading">Hi! This is Your Todo List Archive Page</h1>
      {archiveDataTodoData.map((eachArchiveTodo) => {
        //Show data which todo is deleted
        if (eachArchiveTodo.completed === true) {
          return (
            <div className="full-todo-itemm">
              <p className="todo-item-tagg">{eachArchiveTodo.tag}</p>
              <div className="todos">
                <li className={"todo-itemm"}>{eachArchiveTodo.todo}</li>

                <button
                  //Undo button Hnadle functionality
                  onClick={() => {
                    setArchiveDataTodoData(
                      archiveDataTodoData.map((item) => {
                        if (item.id === eachArchiveTodo.id) {
                          fetch(
                            "http://localhost:3010/posts/" + eachArchiveTodo.id,
                            {
                              method: "PATCH",
                              body: JSON.stringify({
                                completed: !item.completed,
                              }),
                              headers: {
                                "Content-type": "application/json",
                              },
                            }
                          ).then((response) => response.json());
                        }
                        return "";
                      })
                    );
                  }}
                  className="button-undo"
                  type="submit"
                >
                  <i class="fas fa-undo"></i>
                </button>
              </div>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
}
