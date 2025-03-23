import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import Navbar from "../../Components/navbar";
import { toast } from "react-hot-toast";
import "./Auth.css";
import axios from "axios";

export default function AuthCard() {
  
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    navigate(isFlipped ? "/login" : "/register"); 
  };

  const nameChange = (event) => setName(event.target.value);
  const emailChange = (event) => setEmail(event.target.value);
  const passwordChange = (event) => setPassword(event.target.value);

  // ✅ Separate Register Handler
  const registerHandler = async (event) => {
    event.preventDefault();
    console.log("Register clicked");
    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Register Response:", response.data);
      toast.success(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Register Error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Registration failed.");
    }
  };

  // ✅ Separate Login Handler
  const loginHandler = async (event) => {
    event.preventDefault();
    console.log("Login clicked"); 

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Login Response:", response.data); 
      toast.success("Login successful!");
      navigate("/"); 
    } catch (error) {
      console.error("Login Error:", error.response?.data || error);
      toast.error(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="feature-section">
      <Navbar />
      <div className="auth-page">
        <div className="auth-container">
          <div className={`auth-card ${isFlipped ? "flipped" : ""}`}>

            {/* LOGIN FORM */}
            <div className="auth-front">
              <div className="feature-icon-wrapper blue">
                <Shield />
              </div>
              <div className="auth-content">
                <h2 className="feature-title">Welcome Back</h2>
                <p className="feature-subtitle">Login to access your dashboard</p>

                <form onSubmit={loginHandler} className="auth-form">
                  <div className="form-group">
                    <input onChange={emailChange} type="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <input onChange={passwordChange} type="password" placeholder="Password" required />
                  </div>
                  <button type="submit" className="feature-link blue">Login</button>
                </form>

                <div className="auth-divider"><span>Or continue with</span></div>
                <div className="social-login-group">
                  <a href="https://facebook.com" className="social-icon blue"><FaFacebook /></a>
                  <a href="https://twitter.com" className="social-icon teal"><FaTwitter /></a>
                  <a href="https://google.com" className="social-icon purple"><FaGoogle /></a>
                </div>

                <div className="auth-footer">
                  <p>Don't have an account? <span onClick={handleFlip} className="toggle-link">Register</span></p>
                </div>
              </div>
            </div>

            {/* REGISTER FORM */}
            <div className="auth-back">
              <div className="feature-icon-wrapper teal">
                <Shield />
              </div>
              <div className="auth-content">
                <h2 className="feature-title">Create Account</h2>
                <p className="feature-subtitle">Register to get started</p>

                <form onSubmit={registerHandler} className="auth-form">
                  <div className="form-group">
                    <input onChange={nameChange} type="text" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <input onChange={emailChange} type="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <input onChange={passwordChange} type="password" placeholder="Create Password" required />
                  </div>
                  <button type="submit" className="feature-link teal">Register</button>
                </form>

                <div className="auth-divider"><span>Or continue with</span></div>
                <div className="social-login-group">
                  <a href="https://facebook.com" className="social-icon blue"><FaFacebook /></a>
                  <a href="https://twitter.com" className="social-icon teal"><FaTwitter /></a>
                  <a href="https://google.com" className="social-icon purple"><FaGoogle /></a>
                </div>

                <div className="auth-footer">
                  <p>Already have an account? <span onClick={handleFlip} className="toggle-link">Login</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
