import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce((prev,curr) => prev + curr.quantity , 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
