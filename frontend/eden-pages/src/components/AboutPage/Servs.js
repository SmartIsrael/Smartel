import React from "react";
import "./Servs.css";
import blog from "../../assets/blog.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import cropcare from "../../assets/cropcare.jpg";
import insights from "../../assets/insights.jpg";
import market from "../../assets/marketplace.jpg";
const Servs = () => {
  return (
    <div className="sect2">
      <h1 className="Stitle">Services</h1>
      <div className="pg">
        <p>
          At Eden, we offer you a range of unique functionalities and services
          among which are:
        </p>
      </div>
      <div className="Services-sect">
        <div className="service-box">
          <div className="simage-cont">
            <img src={market} />
          </div>
          <div className="sbox-txt">
            <h2 className="sub-title">Marketplace</h2>
            <p>
              Connect with the heart of agriculture in Eden's marketplace. Buy
              and sell fresh farm produce directly, ensuring fair prices for
              farmers and reducing food waste. Join us in supporting sustainable
              agriculture and relish the goodness of locally sourced delights.
            </p>
            <a href="#" className="access">
              {" "}
              Check the marketplace
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ paddingLeft: "10px", fontWeight: "bold" }}
              />
            </a>
          </div>
        </div>
        <div className="service-box">
          <div className="simage-cont">
            <img src={insights} />
          </div>
          <div className="sbox-txt" id="marki">
            <h2 className="sub-title">Market Insights</h2>
            <p>
              Stay ahead with Eden's Market Insights—access real-time
              information on market trends, prices, and demand. Our
              comprehensive market analysis equips farmers, buyers, and
              stakeholders with the knowledge to make informed decisions.
              Navigate the agricultural marketplace confidently with Eden's
              Market Insights.
            </p>
            <a href="/MarketPage" className="access">
              {" "}
              Check our Market Insights
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ paddingLeft: "10px", fontWeight: "bold" }}
              />
            </a>
          </div>
        </div>
        <div className="service-box">
          <div className="simage-cont">
            <img src={cropcare} />
          </div>
          <div className="sbox-txt" id="cropc">
            <h2 className="sub-title">SmartCropCare</h2>
            <p>
              Empower farmers with SmartCropCare, a revolutionary feature for
              precise crop care. Capture, diagnose, and treat with intelligence.
              Our system analyses crop images, identifies issues, and recommends
              personalised treatments. SmartCropCare is your guide to precision
              agriculture, minimising environmental impact, and maximising
              yield.
            </p>
            <a href="#" className="access">
              {" "}
              Check our crop care services
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ paddingLeft: "10px", fontWeight: "bold" }}
              />
            </a>
          </div>
        </div>
        <div className="service-box">
          <div className="simage-cont">
            <img src={blog} />
          </div>
          <div className="sbox-txt" id="for">
            <h2 className="sub-title">Conversation Forum</h2>
            <p>
              Cultivate knowledge in Eden's conversation forum, a community hub
              where farmers share insights and techniques for sustainable
              agriculture. Engage in meaningful discussions, connect with fellow
              farmers, and unlock shared experiences, fostering a resilient
              farming community.
            </p>
            <a href="#" className="access">
              {" "}
              Check the Forum
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ paddingLeft: "10px", fontWeight: "bold" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servs;
