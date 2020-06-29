import React, { useState } from "react";
import "./style.css";
import headphone1 from "../../assets/images/headphone1.jpg";
import IncrementItem from "../IncrementItem";

const Item = () => {
  return (
    <div className="card">
      <img className="card-img-top" src={headphone1} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">BoAt Headphone</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <button type="button" className="btn btn-success float-right">
          ADD TO CART
        </button>
        <p className="price">₹1,799</p>
        {/* <IncrementItem /> */}
      </div>
    </div>
  );
};

export default Item;
