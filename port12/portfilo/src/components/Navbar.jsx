import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>My Portfolio</h2>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div></div><div></div><div></div>
      </div>
      <div className={`nav-links ${open ? "active" : ""}`}>
        <div className="nav-row">
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </div>
        <div className="nav-row">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
