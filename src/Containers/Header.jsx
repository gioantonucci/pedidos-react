import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav className="nav">
      <Link to={'/'}>
        <h1>La fábrica</h1>
      </Link>
    </nav>
  );
};

export default Header;
