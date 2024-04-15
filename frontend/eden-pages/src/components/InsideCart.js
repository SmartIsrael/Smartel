// src/components/InsideCart.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../components/InsideCart.css";
import productImage from "../assets/Tomatoes.jpg";
import { Link } from "react-router-dom";

const InsideCart = () => {
  const [quantity, setQuantity] = useState(5);

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(0, quantity + amount);
    setQuantity(newQuantity);
  };

  const handleRemove = () => {
    console.log("Item removed");
  };

  return (
    <div className="cart-container">
      <h1>Cart Overview</h1>
      <h2>Selected items</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tomatoes</td>
            <td>
              <img src={productImage} alt="Tomatoes" />
            </td>
            <td>3000 Rwf</td>
            <td>
              <div className="quantity-control">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{quantity} Kg</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </td>
            <td>Remove</td>
          </tr>
          <td>Tomatoes</td>
          <td>
            <img src={productImage} alt="Tomatoes" />
          </td>
          <td>3000 Rwf</td>
          <td>
            <div className="quantity-control">
              <button
                className="quantity-button"
                onClick={() => handleQuantityChange(-1)}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span>{quantity} Kg</span>
              <button
                className="quantity-button"
                onClick={() => handleQuantityChange(1)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </td>
          <td>Remove</td>
        </tbody>
      </table>
      <Link to="/CheckoutPage" className="buttn">
        Make an order
      </Link>
    </div>
  );
};

export default InsideCart;
