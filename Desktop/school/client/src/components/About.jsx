import React from 'react';
import { Link } from 'react-router-dom';    // import Link
import logoImg from './Traincape.jpg';  // import your logo image, adjust path accordingly
import '../app.css';

const About = () => {
  return (
    <>
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

      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to our School Management System – a platform built to digitize and simplify school operations.
          Whether you're an administrator, teacher, student, or parent, this system helps you stay connected and informed.
        </p>
        <p>
          Our system is designed to manage student records, attendance, grades, schedules, and communication between all stakeholders.
          It enhances the transparency and efficiency of academic processes in real-time.
        </p>
        <h1 className="features-heading">Core Features</h1>
        <div className="features">
          <div className="feat">Student & Teacher Management</div>
          <div className="feat">Attendance Tracking</div>
          <div className="feat">Exams & Results</div>
          <div className="feat">Timetable Scheduling</div>
          <div className="feat">Parent Communication Portal</div>
          <div className="feat">Another Feature</div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
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
    </>
  );
};

export default About;
