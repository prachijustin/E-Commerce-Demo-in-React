import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import CategoriesNavbar from "./components/CategoriesNavbar";
import Item from "./components/Item";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <CategoriesNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/men-section" component={Men} />
          <Route path="/women-section" component={Women} />
          <Route path="/kids-section" component={Kids} />
        </Switch>
        <Item />
      </Router>
    </React.Fragment>
  );
}

export default App;
