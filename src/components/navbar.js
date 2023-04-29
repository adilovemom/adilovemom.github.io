import "../App.css";
import { useState } from "react";
function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [small, setsmall] = useState("");
  return (
    <div className="navbar" id="nav-menu">
      <div className="logo">
        <img
          src="https://c2.staticflickr.com/6/5284/5303788657_2c2ba48ed8_b.jpg"
          width="50px"
          height="50px"
          alt=""
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div
        className="menu_toggle"
        onClick={() => {
          settoggle(!toggle);
          setsmall("small");
        }}
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-2/128/menu-512.png"
          width="50px"
          height="50px"
          alt=""
        />
      </div>
      <div
        className={
          toggle && small === "small" ? "small_nav right--nav" : "right--nav"
        }
      >
        <div
          className="active"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#top">Home</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#about">About</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#tech">Tech stack</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#projects">Project</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#contact">Contact Me</a>
        </div>
        <div className="cv">
          <a
            href="https://drive.google.com/file/d/12aJ2uOc_6oE3zJAi8xt8G-21J8fHVUMb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000" }}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
