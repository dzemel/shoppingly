import React, { useContext } from "react";
import PC from "./ProductContext";
import dc from "./DispatchContext";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const state = useContext(PC);
  const { image_url, name, price, description } = state.products[id];

  const dispatch = useContext(dc);

  function add() {
    dispatch({ type: "addItem", id });
  }

  function remove() {
    dispatch({ type: "removeItem", id });
  }

  return (
    <div>
      <div className="container">
        <h1>
          {name} {price}
        </h1>
        <img src={image_url} alt="" />
        <p>{description}</p>
      </div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

export default ProductDetails;
