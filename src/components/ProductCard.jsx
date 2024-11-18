import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div
    className="product-card"
    style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}
  >
    <img
      src={product.image}
      alt={product.title}
      style={{ width: "150px", height: "150px", objectFit: "cover" }}
    />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <Link to={`/products/${product.id}`}>
      <button style={{ padding: "5px 10px", cursor: "pointer" }}>
        View Details
      </button>
    </Link>
  </div>
);

export default ProductCard;
