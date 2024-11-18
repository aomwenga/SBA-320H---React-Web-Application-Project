import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>G.O.A.T Kobe Bryant Shoes</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/products">Shop</Link>
    </nav>
  </header>
);

export default Header;
