import React from "react";

//CSS
import "../components/TitleText.css";

const TitleText = (props) => {
  return (
    <div className="title-text">
      <h3>{props.title}</h3>
    </div>
  );
};

export default TitleText;
