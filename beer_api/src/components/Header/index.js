// React imports
import React from "react";

// General imports
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";

function Header() {
  return (
    <header>
      <div className="title">Beans Love Beers</div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
