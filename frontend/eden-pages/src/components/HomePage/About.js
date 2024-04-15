import React from 'react';
import rice from '../../assets/rice.jpg'
import "./about.css"
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="About">
      <section id="about">
      <div class="about-content">
      <div class="about-img">
        <img
          src={rice}
          alt="food"
        />
      </div>

      <div class="about-text">
        <h1 class="heading">About us</h1>
          <h2>"Empowering Agriculture, Enriching Lives"</h2>
          <h3>Welcome to Eden,</h3>
        <p>
          where innovation meets agriculture to create a
          sustainable and prosperous future for smallholder farmers around the
          globe. Founded with a deep-rooted commitment to advancing agricultural
          practices and empowering communities, Eden is a beacon of positive
          change in the agri-tech landscape.
        </p>
        <Link to="/AboutPage" class="btn">Read more</Link>
      </div>
    </div>
    </section>
    </div>
  );
}

export default About;
