import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//Importing components
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import Info from "./components/pages/Info";
import Archive from "./components/pages/Archive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
