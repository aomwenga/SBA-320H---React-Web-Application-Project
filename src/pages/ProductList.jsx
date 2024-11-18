import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from Fake Store API
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data); // Log the full data to inspect the categories
        // Filter for clothing categories
        const clothingProducts = data.filter((product) =>
          product.category.toLowerCase().includes("clothing")
        );
        console.log(clothingProducts); // Log the filtered products to verify
        setProducts(clothingProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No clothing items found.</p>;
  }

  return (
    <div>
      <h2>Available Clothing Items</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
