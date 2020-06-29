import React from "react";

function CategoriesNavbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">Clothes</a>
          </li>
          <li className="nav-item active">
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
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CategoriesNavbar;
