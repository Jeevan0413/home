import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>LearnSpace Digital</h3>
            <p>Premium digital marketing solutions for forward-thinking brands. We build strategies that last.</p>
            <div className="social-icons" style={{ marginTop: '20px' }}>
              <a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/seo-optimization">SEO Optimization</Link></li>
              <li><Link to="/services/social-media-marketing">Social Media</Link></li>
              <li><Link to="/services/ppc-advertising">PPC Advertising</Link></li>
              <li><Link to="/services/content-marketing">Content Marketing</Link></li>
              <li><Link to="/services/email-marketing">Email Marketing</Link></li>
              <li><Link to="/services/web-design">Web Design</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2026 LearnSpace Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
