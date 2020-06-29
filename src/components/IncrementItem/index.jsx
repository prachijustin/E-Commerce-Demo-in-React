import React from "react";
import "./style.css";

const IncrementItem = () => {
  return (
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-light">
        -
      </button>
      <button type="button" class="btn btn-light">
        1
      </button>
      <button type="button" class="btn btn-light">
        +
      </button>
    </div>
  );
};

export default IncrementItem;
