import React from "react";
import { useParams } from "react-router-dom";
import Product from '../style/all.css'
function ProductPage({ data }) {
  const { productId } = useParams();

  const product = data.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    
    <div className="container">

      <h1>{product.name}</h1>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={product.image_url}
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            Price: {product.price} {product.currency}
          </p>
          <p className="card-text">Stock: {product.stock}</p>
        </div>
        
      </div>
      <br />
      <br />
    
      <dev class="custom-line"></dev>
        <p>© 2024 Company, Inc</p>
    </div>
    
    
  );
}

export default ProductPage;
