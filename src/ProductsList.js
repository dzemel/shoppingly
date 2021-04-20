import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "./ProductContext";
import "./product.css";

function ProductsList() {
  const { products } = useContext(ProductContext);

  let items = [];
  for (let product in products) {
    items.push({ ...products[product], id: product });
  }

  return (
    <div>
      {items.map((i) => (
        <Product
          id={i}
          name={i.name}
          price={i.price}
          image_url={i.image_url}
          description={i.description}
        />
      ))}
    </div>
  );
}

export default ProductsList;
