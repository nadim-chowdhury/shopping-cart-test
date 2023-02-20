import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <nav>
      <h1>Cart</h1>

      <div>
        <Link to="/">Home</Link>
        <Link className="cart" to="/cart">
          <FaShoppingCart />
          <p>{0}</p>
        </Link>
      </div>
    </nav>
  );
}
