// Login.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const csrftoken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("csrftoken="))
        ?.split("=")[1];

      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/login/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
          },
        }
      );

      console.log(response.data);
      console.log("Login successful. Redirecting...");
      // Handle successful login
      // Redirect to the marketplace or any desired page
      history("/MarketPage.js");
    } catch (error) {
      if (error.response) {
        console.error("Login failed:", error.response.data.error);
        setErrorMessage(
          "Login failed. Please check your credentials and try again."
        );
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server.");
        setErrorMessage("Login failed. No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
        setErrorMessage("Login failed. Please try again later.");
      }

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <div className="bob3">
      <h1 className="bob">
        <span>Log</span>in
      </h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control form-control-lg"
              placeholder="Email/Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="Register">
          <p>Don't you have an account?</p>
          <Link to="/RegPage" className="options">
            Register an account
          </Link>
        </div>
        <div className="Log2">
          <p>Are you a farmer?</p>
          <Link to="/FarmReg" className="farmerl">
            Register as a farmer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
