import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoriesNavbar from "./components/CategoriesNavbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CategoriesNavbar />
      <Home />
    </React.Fragment>
  );
}

export default App;
