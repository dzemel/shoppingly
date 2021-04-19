function Product({ name, price, image_url, description }) {
  return (
    <div>
      <div className="container">
        <h1>
          {name} {price}
        </h1>
        <img src={image_url} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Product;
