import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="pill-nav-container">
      <Link to="/" className="brand-pill">
        <i className="fa-solid fa-chart-line"></i>
        Learnspace <span>Digital</span>
      </Link>
      
      <nav className="pill-nav">
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </li>
          <li className="dropdown">
            <Link to="/services" className={`dropbtn ${location.pathname.startsWith('/services') ? 'active' : ''}`}>
              Services <i className="fa-solid fa-chevron-down" style={{ fontSize: '0.8em', marginLeft: '5px' }}></i>
            </Link>
            <div className="dropdown-content">
              <Link to="/services/seo-optimization">SEO Optimization</Link>
              <Link to="/services/social-media-marketing">Social Media</Link>
              <Link to="/services/ppc-advertising">PPC Advertising</Link>
              <Link to="/services/content-marketing">Content Marketing</Link>
              <Link to="/services/email-marketing">Email Marketing</Link>
              <Link to="/services/web-design">Web Design</Link>
            </div>
          </li>
          <li>
            <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <Link to="/contact" className="cta-pill">Get Started</Link>
    </div>
  );
};

export default Navbar;
