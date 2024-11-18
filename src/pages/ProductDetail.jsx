import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product Details for {id}</h2>
      <p>Details coming soon...</p>
    </div>
  );
};

export default ProductDetail;
