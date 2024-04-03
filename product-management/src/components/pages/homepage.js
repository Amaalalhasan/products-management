import React from "react";
import Card from "../Card";
import { useNavigate } from "react-router-dom";
import Product from '../style/all.css'
function HomePage({ data }) {
  const navigate = useNavigate();

  return (
    <div className="container">
      
        
      <header class="d-flex justify-content-center py-3 sticky-top">
    <ul class="nav nav-pills">
        <li class="nav-item"><a href="#H1" class="nav-link active" aria-current="page">About us</a></li>
        <li class="nav-item"><a href="#H2" class="nav-link">Products</a></li>
    </ul>
</header>
      <br />
      <br />
      <br />
      <dev className="Aboutus">
        <h1 className="text-center" id="H1">Awesome Products Store</h1>
        <br />
        <br />
        <p>We are a specialized store dedicated to providing a wide range of fantastic products that meet your needs. We take pride in offering a diverse selection of high-quality products distinguished by unique design and excellent performance. Whether you're looking for a special gift or want to purchase your essentials, we offer you a distinctive range of products that will meet your expectations. We also guarantee our customers an enjoyable and convenient shopping experience by providing excellent customer service and ensuring the quality of the products we offer. Discover the awesomeness in shopping experience with us!</p>
        </dev>
        
        <div className="d-flex justify-content-between align-items-center" id="H2">
      </div>
      <div className="row">
        {data?.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <Card
              name={product.name}
              image_url={product.image_url}
              id={product.id}
            />
          </div>
        ))}
        <dev>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            navigate("/product-management");
          }}
        >
          Add product
        </button>
        </dev>
        <br />
        <br />
        <br />

        
        <dev class="custom-line"></dev>
        <p>© 2024 Company, Inc</p>
      </div>
    </div>
  );
}

export default HomePage;
