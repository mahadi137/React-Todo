import React from "react";

//CSS
import "./Search.css";

//Search form
export default function Search(props) {
  return (
    <>
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="Search by todo text or tag"
            onChange={(e) => {
              props.setSearchTearm(e.target.value);
            }}
          />
        </form>
        <hr />
      </div>
    </>
  );
}
