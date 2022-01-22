import React from "react";

//importing images
import img1 from "../pages/image/menubutton.png";
import img2 from "../pages/image/homepage.png";
import img3 from "../pages/image/archivepage.png";
import img4 from "../pages/image/kuvaus.png";
import img5 from "../pages/image/mobile_view.png";

//CSS
import "./info.css";

export default function Info() {
  return (
    <div className="info">
      <h1>
        <img className="kuvaus" src={img4} alt="hamburgericon"></img>
        <br />
        Hi! <br /> I'm <em>"Sayad Mohammad Mahadi Hassan"</em>
      </h1>
      <h4>About My Todo App</h4>
      <p>
        My app has three page. Home is for main page with all the input field
        and show casing the todo list. Info is for general guideline and author
        info. Archive is for all the deleted todos. User also can undo todo from
        Archive page. <br />
        <span className="span">
          <em>All these pictures guide are created by me.</em>
        </span>
      </p>
      <h4>General Guideline</h4>
      <p>
        To get menu and close menu, click the hamburger menu Icon
        <img className="hamburgericon" src={img1} alt="hamburgericon"></img>
      </p>
      <h4>Home page guide:</h4>
      <img
        className="homeandarchive"
        src={img2}
        alt="Home page guide pic"
      ></img>

      <h4>Archive page guide:</h4>
      <img
        className="homeandarchive"
        src={img3}
        alt="Archive page guide pic"
      ></img>
      <div className="mobileview">
        <h4>Mobile View:</h4>
        <img src={img5} alt="mobile view"></img>
      </div>
    </div>
  );
}
