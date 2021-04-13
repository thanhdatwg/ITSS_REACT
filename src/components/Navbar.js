import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cocktail db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/about">約</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
