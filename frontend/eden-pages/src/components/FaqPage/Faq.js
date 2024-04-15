import React from 'react';
import faq from '../../assets/faq_g.png';
import './faq.css';

const Faq = () => {
  const toggleAnswer = (event) => {
    const answer = event.target.parentElement.nextElementSibling;

    if (answer) {
      answer.classList.toggle('active');
      const toggleIcon = event.target;
      toggleIcon.textContent = answer.classList.contains('active') ? '-' : '+';
    }
  };

  return (
    <div>
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-tiles">
          <div className="ftile">
            <p className="tile_text">Have a question? Here you will find the answers to questions most valued by our clients and partners, with access to step-by-step instructions and support</p>
          </div>

          <div className="ftile">
            <img src={faq} alt="FAQ_img" />
          </div>
        </div>

        <div className="faq-item" onClick={toggleAnswer}>
          <div className="question">
            <h3 className="question">How do I place an order?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="answer">You can place an order by selecting the products you want and adding them to your cart. Then, proceed to checkout and follow the instructions to complete your purchase.</p>
        </div>

        <hr className="divider" />

        <div className="faq-item" onClick={toggleAnswer}>
          <div className="question">
            <h3 className="question">What payment methods do you accept?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="answer">At the moment we only accept Momo (See the code at checkout) and cash on delivery, other payment methods may be added in the future.</p>
        </div>

        <hr className="divider" />

        <div className="faq-item" onClick={toggleAnswer}>
          <div className="question">
            <h3 className="question">Can I modify or cancel my order?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="answer">Once an order is placed, modifications or cancellations may not be possible. Please contact our customer support for assistance.</p>
        </div>

        <hr className="divider" />

        <div className="faq-item" onClick={toggleAnswer}>
          <div className="question">
            <h3 className="question">Can I return or exchange my products?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="answer">Yes, you can return or exchange your products within 30 days of receiving them. Please contact our customer support for assistance.</p>
        </div>

        <hr className="divider" />

        <div className="faq-item" onClick={toggleAnswer}>
          <div className="question">
            <h3 className="question">How do I track my order?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="answer">You can track your order by logging into your account and navigating to the "My Orders" page. You can also contact our customer support for assistance.</p>
        </div>

        <hr className="divider" />

        <div className="faq-item" onClick={toggleAnswer}>
          <div className="question">
            <h3 className="question">How can I reach your customer support?</h3>
            <span className="toggle">+</span>
          </div>
          <p className="answer">To reach our customer support for assistance at any time on your order or other inquiries, kindly use the contact form provided on the homepage.</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
