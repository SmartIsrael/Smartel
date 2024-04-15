import React from "react";
import Navibar from "../components/Navbar";
import Banner from "../components/HomePage/Banner";
import About from "../components/HomePage/About";
import Services from "../components/HomePage/Services";
import Blogs from "../components/HomePage/Blogs";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div>
      <Navibar />
      <Banner />
      <About />
      <Services />
      <Blogs />
      <Footer />
    </div>
  );
};

export default HomePage;
