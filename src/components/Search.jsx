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
        <button
          //Todo order button
          onClick={props.modifiedListHandler}
          className="order-button"
          type="submit"
        >
          Order List &nbsp; <i class="fas fa-sort"></i>
        </button>
        <hr />
      </div>
    </>
  );
}
