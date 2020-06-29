import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">Men</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">Women</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link">Kids</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-light my-2 my-sm-0 mr-2"
            type="submit"
          >
            Search
          </button>
        </form>
        <button className="btn btn-success my-2 my-sm-0" type="submit">
          My Account
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
