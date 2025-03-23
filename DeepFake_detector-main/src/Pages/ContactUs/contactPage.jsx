import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Navbar from "../../Components/navbar";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <section className="feature-section contact-page">
      <Navbar />

      <div className="container">
        <header className="feature-header">
          <h2 className="feature-title">Contact Our Team</h2>
          <p className="feature-subtitle">
            We're here to help and answer any questions you might have. Reach
            out to us and we'll respond as soon as possible.
          </p>
        </header>

        <div className="contact-info-grid">
          {[
            {
              icon: MapPin,
              title: "Address",
              content: "123 Main Street, City, Country",
              color: "blue",
            },
            {
              icon: Phone,
              title: "Phone",
              content: "+1 234 567 890",
              color: "teal",
            },
            {
              icon: Mail,
              title: "Email",
              content: "contact@example.com",
              color: "purple",
            },
          ].map((item, index) => (
            <div key={index} className="feature-card contact-info-card">
              <div className={`feature-icon-wrapper ${item.color}`}>
                <item.icon />
              </div>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p className="feature-description">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="feature-card contact-form-card">
          <div className="feature-icon-wrapper teal">
            <Send />
          </div>
          <div className="feature-content">
            <h2 className="contact-form-title">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="feature-link teal">
                Send Message <ArrowRight className="arrow-icon" />
              </button>
            </form>
          </div>
        </div>

        <div className="contact-social-section">
          <h2 className="feature-title">Connect With Us</h2>
          <div className="social-icons">
            {[
              { icon: Facebook, link: "https://facebook.com", color: "blue" },
              { icon: Twitter, link: "https://twitter.com", color: "teal" },
              { icon: Linkedin, link: "https://linkedin.com", color: "purple" },
              { icon: Instagram, link: "https://instagram.com", color: "blue" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon ${social.color}`}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      
        <div className="contact-map-section">
          <h2 className="feature-title">Our Location</h2>
          <div className="feature-card contact-map-card">
            <div className="feature-icon-wrapper purple">
              <MapPin />
            </div>
            <div className="feature-content">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086748476555!2d-122.40641748468137!3d37.78583427975768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6f8b1c57%3A0x9e6a9283a5ed9b0!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1597522409687!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{
                    border: 0,
                    borderRadius: "1rem",
                    filter: "grayscale(50%) brightness(80%)",
                  }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Our Location"
                ></iframe>
              </div>
              <div className="map-details">
                <p className="feature-description">
                  Find us at the heart of the city. Our office is conveniently
                  located and easily accessible.
                </p>
                <a
                  href="https://goo.gl/maps/your-location-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-link purple"
                >
                  Get Directions <ArrowRight className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-faq-section">
          <h2 className="feature-title">Frequently Asked Questions</h2>
          {[
            {
              question: "How can I contact support?",
              answer: "Email us at contact@example.com or call +1 234 567 890.",
            },
            {
              question: "What are your working hours?",
              answer:
                "Our support is available 9am to 6pm, Monday through Friday.",
            },
            {
              question: "Where are you located?",
              answer: "Our main office is at 123 Main Street, City, Country.",
            },
          ].map((faq, index) => (
            <div key={index} className="feature-card faq-item">
              <div className="feature-icon-wrapper blue">
                <HelpCircle />
              </div>
              <div className="feature-content">
                <h3>{faq.question}</h3>
                <p className="feature-description">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactPage;


