import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function CategoriesNavbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/men-section">
              <a className="nav-link">Men</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/women-section">
              <a className="nav-link">Women</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/kids-section">
              <a className="nav-link">Kids</a>
            </Link>
          </li>
          {/* <li className="nav-item active">
            <a className="nav-link">Accessories</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">Shoes</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">Electronics</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">Grocery</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default CategoriesNavbar;
