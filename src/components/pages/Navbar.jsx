import React, { useState } from "react";
import { Link } from "react-router-dom";
//Icon
import { FaBars } from "react-icons/fa";

//CSS
import "../pages/Navbar.css";

export default function Navbar() {
  //Toggle the sidebar screen functionality
  const [sidebar, setSidebar] = useState(false);
  const sidebarHandler = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={sidebarHandler} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="/" className="nav-menu-li" onClick={sidebarHandler}>
              Home
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link to="/info" className="nav-menu-li" onClick={sidebarHandler}>
              Info
            </Link>
          </li>
          <li className="navbar-toggle">
            <Link
              to="/archive"
              className="nav-menu-li"
              onClick={sidebarHandler}
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
