import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand ml-5">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <form className="form-inline ml-5 ">
              <input
                className="form-control mr-2"
                id="search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </ul>
          <button className="btn btn-success my-2 my-sm-0 mr-4" type="submit">
            My Account
          </button>
          <i className="fa fa-shopping-cart mr-2"> Cart</i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
