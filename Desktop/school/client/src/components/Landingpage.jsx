import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import logoImg from './Traincape.jpg';
import demoImg from './capture.jpg';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#integration">Integration</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#demo" className="demo-btn">Book a Demo</a></li>
          <li><Link to="/login" className="demo-btn">Login</Link></li>
        </ul>
      </nav>

      <div className="demo-wrapper">
        <div className="demo-section">
          <div className="demo-image">
            <img src={demoImg} alt="Demo Visual" />
          </div>

          <div className="demo-form">
            <h3>Book a demo?</h3>
            <form>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <input type="tel" placeholder="Mobile" required />
              <input type="text" placeholder="Role" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <h2 className="feature-heading">
        Experience our software platform to automate your school management
      </h2>

      <div className="feature-boxes">
        <div className="feature-box">
          <h3>Feature 1</h3>
          <p>Description for feature 1. You can edit this text later.</p>
        </div>
        <div className="feature-box">
          <h3>Feature 2</h3>
          <p>Description for feature 2. You can edit this text later.</p>
        </div>
        <div className="feature-box">
          <h3>Feature 3</h3>
          <p>Description for feature 3. You can edit this text later.</p>
        </div>
        <div className="feature-box">
          <h3>Feature 4</h3>
          <p>Description for feature 4. You can edit this text later.</p>
        </div>
        <div className="feature-box">
          <h3>Feature 5</h3>
          <p>Description for feature 5. You can edit this text later.</p>
        </div>
        <div className="feature-box">
          <h3>Feature 6</h3>
          <p>Description for feature 6. You can edit this text later.</p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Traincape Technology</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
            <p>Email: <a href="mailto:support@myclassboard.in">support@myclassboard.in</a></p>
            <p>Phone: <a href="tel:+917353950600">(+91) 7353950600</a></p>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><a href="#">MCB ERP</a></li>
              <li><a href="#">Finance</a></li>
              <li><a href="#">Admission</a></li>
              <li><a href="#">HR</a></li>
              <li><a href="#">LMS</a></li>
              <li><a href="#">Connect</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#">Based on Curriculum</a></li>
              <li><a href="#">Safety & Security</a></li>
              <li><a href="#">Mobile Apps</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Integrations</h4>
            <ul>
              <li><a href="#">LMS Integrations</a></li>
              <li><a href="#">Admission Integrations</a></li>
              <li><a href="#">Payment Integrations</a></li>
              <li><a href="#">WhatsApp Chat</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
