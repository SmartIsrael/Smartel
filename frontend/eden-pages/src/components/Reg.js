import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Reg.css";

const Reg = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
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
      // Check if document.cookie is defined

	  
    //   if (document.cookie) {
    //     const csrftoken = document.cookie
    //       .split("; ")
    //       .find((row) => row.startsWith("csrftoken="))
    //       ?.split("=")[1];

    //     const response = await axios.post(
    //       "http://127.0.0.1:8000/api/auth/api/signup/",
    //       formData,
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           "X-CSRFToken": csrftoken,
    //         },
    //       }
    //     );

    //     if (response && response.data) {
    //       console.log(response.data);

    //       setSuccessMessage("Registration successful. Redirecting...");
    //       setTimeout(() => {
    //         setSuccessMessage("");
    //         history("/LoginPage");
    //       }, 2000);
    //     } else {
    //       console.error("Registration failed: Response data is undefined");
    //       setErrorMessage("Registration failed. Please try again.");
    //     }
    //   } else {
    //     console.error("document.cookie is undefined or empty");
    //     setErrorMessage("Registration failed. Please try again.");
    //   }
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data?.error || error.message
      );
      setErrorMessage(
        "Registration failed. Please check your input and try again."
      );
    }
  };

  return (
    <div className="bob3">
      <h1 className="bob">
        <span>Sign</span>up
      </h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control form-control-lg"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control form-control-lg"
              placeholder="Email"
              value={formData.email}
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
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              className="form-control form-control-lg"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Sign up
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <div className="Register">
          <p>You already have an account?</p>
          <Link to="/LoginPage" className="options">
            Log in
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

export default Reg;
