import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Shield } from "lucide-react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <Shield className="footer-logo-icon" />
            <h3 className="footer-title">AI Shield</h3>
          </div>
          <p className="footer-description">
            Stay ahead of the curve with our AI-powered detection tools for fake news and deepfakes. Empower yourself with the truth.
          </p>
        </div>

        <div className="footer-middle">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 AI Shield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;


