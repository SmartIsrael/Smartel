import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/Marketplace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Update this line
import {
  faChevronDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Marketplace = () => {
  const [details, setDetails] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchProducts();
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(Number(storedCartCount));
    }
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/product/create/list/"
      );
      setDetails(response.data);
    } catch (error) {
      console.error("Error while fetching products:", error);
    }
  };

  const addToCart = (productId) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    if (!storedCart.includes(productId)) {
      // Increment cart count and update local storage
      const newCartCount = cartCount + 1;
      setCartCount(newCartCount);
      localStorage.setItem("cartCount", newCartCount.toString());

      // Add the product ID to the cart
      const newCart = [...storedCart, productId];
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      alert("This product is already in the cart!");
    }
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="city-input" placeholder="Search..." />
        <div className="search_icon">
          <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
        </div>
        <Link to="/InsideCartPage" className="logo">
          <div className="cart" onClick={() => addToCart(-1)}>
            <FontAwesomeIcon icon={faCartShopping} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </Link>
      </div>

      <div className="marketplace">
        <div className="cats">
          <h1>Categories</h1>
          <div>
            <a href="#">
              All categories{" "}
              <FontAwesomeIcon
                className="categs"
                style={{ paddingLeft: "7px" }}
                icon={faChevronRight}
              />
            </a>
            <a href="#">
              Fruits (3){" "}
              <FontAwesomeIcon
                className="categs"
                style={{ paddingLeft: "7px" }}
                icon={faChevronRight}
              />
            </a>
            <a href="#">
              Vegetables (3){" "}
              <FontAwesomeIcon
                className="categs"
                style={{ paddingLeft: "7px" }}
                icon={faChevronRight}
              />
            </a>
            <a href="#">
              All categories{" "}
              <FontAwesomeIcon
                className="categs"
                style={{ paddingLeft: "7px" }}
                icon={faChevronRight}
              />
            </a>
            <a href="#">
              Meat (1){" "}
              <FontAwesomeIcon
                className="categs"
                style={{ paddingLeft: "7px" }}
                icon={faChevronRight}
              />
            </a>
            <a href="#">
              Dairy products (2){" "}
              <FontAwesomeIcon
                className="categs"
                style={{ paddingLeft: "7px" }}
                icon={faChevronRight}
              />
            </a>
          </div>
        </div>
        <div className="product-list">
          {details.map((output, id) => (
            <div className="product-card" key={id}>
              <img src={output.image} alt="product" />
              <div className="product-details">
                <p>{output.title}</p>
                <p>{output.price}</p>
                <span
                  className="add-to-cart-button"
                  onClick={() => addToCart(output.id)}
                >
                  Add to Cart
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
