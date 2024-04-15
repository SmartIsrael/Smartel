import React from "react";
import Navibar from "../components/Navbar";
import Marketplace from "../components/Marketplace";
import Footer from "../components/Footer";
import Blogs from "../components/HomePage/Blogs";

const MarketPage = () => {
  return (
    <div>
      <Navibar />
      <Marketplace/>
      <Blogs />
      <Footer />
    </div>
  );
};

export default MarketPage;
