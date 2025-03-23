import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, LogIn, Shield, X } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-logo">
         <Shield className="logo-icon" />
         <h1 className="logo-text">AI Shield</h1>
        </div>

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/deepfake">Deepfake</Link></li>
          <li><Link to="/fakenews">Fake News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="navbar-right">
          <div className={`search-wrapper ${isSearchFocused ? 'focused' : ''}`}>
            <Search className="search-icon" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>

          <Link to="/login" className="navbar-login">
            <LogIn className="login-icon" />
            <span>Login</span>
          </Link>

          <button
            className="navbar-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/deepfake">Deepfake</Link>
          <Link to="/fakenews">Fake News</Link>
          <Link to="/contact">Contact</Link>
          <div className="mobile-search">
            <Search className="mobile-search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <Link to="/login" className="mobile-login">
            <LogIn className="mobile-login-icon" />
            <span>Login</span>
          </Link>
        </div>
      )}
    </nav>
  );
}