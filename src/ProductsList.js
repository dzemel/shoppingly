import React, { useContext } from "react";
import Product from "./Product";
import ProductContext from "./ProductContext";

function ProductsList() {
  const { products } = useContext(ProductContext);
  console.log("products", products);
  let items = [];
  for (let product in products) {
    console.log("product", product);

    items.push({ product: products[product] });
  }
  console.log("items", items);

  return (
    <div>
      {items.map((i) => (
        <Product
          name={i.product.name}
          price={i.product.price}
          image_url={i.product.image_url}
          description={i.product.description}
        />
      ))}
    </div>
  );
}

export default ProductsList;
