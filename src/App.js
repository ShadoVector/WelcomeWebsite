import React from 'react';
import './App.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo" />
        <nav className="menu">
          <a href="#about-us">About Us</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="banner">
        <h1>Welcome to ShadoVector</h1>
      </div>
      <section className="about-us">
      <div className="about-us-card">
        <h2>About Us</h2>
      </div>
      <div className="about-us-content">
      <p>ShadoVector is a leading technology company that offers innovative solutions for education and finance. Our products, ShadoSkiller and ShadoPay, are designed to enhance the learning experience and make mobile payments easier and more secure. With a focus on innovation and customer satisfaction, ShadoVector is dedicated to improving the world one solution at a time.</p>
      </div>
    </section>
      <section className="products" id="products">
        <div className="card-container">
          <div className="card">
            <h2>ShadoPay</h2>
            <img src={require('./shadopay_place.jpg')} alt="ShadoPay" />
            <p>A fintech platform that offers a secure and convenient mobile payment solution.</p>
            <ul className='features'>
              <li>NFC-based payment system</li>
              <li>Offline transactions</li>
              <li>Secure biometric NFC registration</li>
              <li>Tap-and-pay (phone-to-phone or phone-to-POS)</li>
              <li>Merchant POS app</li>
              <li>Lost phone/card protection</li>
            </ul>
          </div>
          <div className="card">
            <h2>ShadoSkiller</h2>
            <img src={require('./shadoskiller.jpg')} alt="ShadoSkiller" />
            <p>An EdTech platform that takes learning to the next level with gamification and personalized mentorship.</p>
            <ul className='features'>
              <li>Gamification teaching</li>
              <li>One-on-one student mentorship</li>
              <li>Projects based on industry standards</li>
              <li>Code review and testing</li>
              <li>Code in the blanks and much more</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
      <div className="contact-card">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope />
          <p>Email: shadovector@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaPhone />
          <p>Phone: 6361626707 / 9482127568</p>
        </div>
      </div>
    </section>
      <footer>
        <p>Copyright ShadoVector 2023</p>
      </footer>
    </div>
  );
}

export default App;
