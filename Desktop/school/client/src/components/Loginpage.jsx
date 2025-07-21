import React, { useState } from 'react';
import logoImg from './Traincape.jpg';
import captureImg from './top.jpg'; // Update this path if necessary

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#integration">Integration</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#demo" className="demo-btn">Book a Demo</a></li>
          <li><a href="#login" className="demo-btn">Login</a></li>
        </ul>
      </nav>

      {/* Main Login Section */}
      <div className="container">
        <div className="bigges">
          <div className="image-container">
            <img src={captureImg} alt="Login Illustration" className="login-image" />
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>

            {/* Username */}
            <div className="form">
              <label htmlFor="username">Username</label>
              <div className="input-with-icon">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Enter your username"
                />
                <i className="fa-solid fa-user input-icon-right"></i>
              </div>
            </div>

            {/* Password */}
            <div className="form" style={{ position: 'relative', width: '100%' }}>
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  style={{ paddingRight: '45px' }}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: '#999',
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      togglePasswordVisibility();
                    }
                  }}
                >
                  {showPassword ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

      {/* Footer */}
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
              <li><a href="#">About</a></li>
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

export default Loginpage;
