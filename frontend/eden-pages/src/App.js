import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./routes/AboutPage.js";
import FaqPage from "./routes/FaqPage.js";
import HomePage from "./routes/HomePage.js";
import MarketPage from "./routes/MarketPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InsideCartPage from "./routes/InsideCartPage.js";
import CheckoutPage from "./routes/CheckoutPage.js";
import LoginPage from "./routes/LoginPage.js";
import RegPage from "./routes/RegPage.js";
import ProductFormPage from "./routes/ProductFormPage.js";
import Contact from "./routes/ContactPage.js";
import FarmReg from "./routes/FarmReg.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MarketPage" element={<MarketPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/FaqPage" element={<FaqPage />} />
        <Route path="/RegPage" element={<RegPage />} />
        <Route path="/InsideCartPage" element={<InsideCartPage />} />
        <Route path="/ProductFormPage" element={<ProductFormPage />} />
        <Route path="/FarmReg" element={<FarmReg />} />
        <Route path="/ContactPage" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
