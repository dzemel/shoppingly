import React,{useContext} from "react";
import dc from "./DispatchContext"

function Product({ id, name, price, image_url, description }) {
  const dispatch = useContext(dc);
  
  function add() {
    dispatch({type:"addItem", id})
  }

  function remove() {
    dispatch({type:"removeItem", id})
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

export default Product;
