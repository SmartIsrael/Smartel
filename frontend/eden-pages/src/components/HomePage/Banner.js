import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="ban">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/food1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>TOP DAILY DEAL</h3>
            <p>Attention, <span>Food Enthusiasts!</span>Exclusive Offer Just for <span>You!</span></p>
            <h3>Enjoy<span>10%</span>Off Your First Purchase at</h3>
            <Link to='/MarketPage' className='button'>Shop Now<FontAwesomeIcon icon={faChevronRight} style={{ paddingLeft: '10px', fontWeight: 'bold' }} /></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/food1.png"
            alt="Second slide"
          />
          <Carousel.Caption>
          <h3>TOP DAILY DEAL</h3>
            <p>Attention, <span>Food Enthusiasts!</span>Exclusive Offer Just for <span>You!</span></p>
            <h3>Enjoy<span>10%</span>Off Your First Purchase at</h3>
            <Link to='/MarketPage' className='button'>Shop Now<FontAwesomeIcon icon={faChevronRight} style={{ paddingLeft: '10px', fontWeight: 'bold' }} /></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/food1.png"
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3>TOP DAILY DEAL</h3>
            <p>Attention, <span>Food Enthusiasts!</span>Exclusive Offer Just for <span>You!</span></p>
            <h3>Enjoy<span>10%</span>Off Your First Purchase at Eden</h3>
            <Link to='MarketPage' className='button'>Shop Now<FontAwesomeIcon icon={faChevronRight} style={{ paddingLeft: '10px', fontWeight: 'bold' }} /></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
