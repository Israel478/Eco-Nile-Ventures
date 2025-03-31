import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <style>{`
        /* Page Layout */
        .contact-page {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: linear-gradient(to right, #0f0f0f, #1a1a1a);
          color: white;
          font-family: 'Poppins', sans-serif;
        }

        /* Navbar Styling */
        .navbar-container {
          margin-bottom: 20px;
        }

        /* Main Content */
        .content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px;
        }

        /* Contact Form Card */
        .contact-form-container {
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 255, 127, 0.3);
          max-width: 500px;
          width: 100%;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-align: center;
          animation: fadeIn 1s ease-in-out;
        }

        /* Input Fields */
        .form-input {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          margin-bottom: 15px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          outline: none;
          transition: all 0.3s ease-in-out;
        }

        .form-input::placeholder {
          color: #ccc;
        }

        .form-input:focus {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 8px rgba(0, 255, 127, 0.5);
        }

        /* Submit Button */
        .submit-button {
          display: block;
          width: 80%;
          padding: 12px;
          margin: 0 auto;
          background: #00ff7f;
          color: black;
          font-size: 18px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          box-shadow: 0 6px 12px rgba(0, 255, 127, 0.4);
        }

        .submit-button:hover {
          background: #00cc66;
          transform: scale(1.05);
        }

        /* Success Message */
        .success-container {
          text-align: center;
          padding: 50px;
          max-width: 500px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          backdrop-filter: blur(8px);
          box-shadow: 0 6px 12px rgba(0, 255, 127, 0.3);
          animation: fadeIn 1s ease-in-out;
        }

        .success-icon {
          font-size: 50px;
          color: #00ff7f;
          margin-bottom: 20px;
        }

        .success-message {
          font-size: 20px;
          font-weight: bold;
          color: white;
          margin-bottom: 15px;
        }

        .back-home {
          display: inline-block;
          background: #007bff;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 16px;
          font-weight: bold;
          transition: background 0.3s ease;
        }

        .back-home:hover {
          background: #0056b3;
        }

        /* Footer */
        .footer {
          background: #2f855a;
          color: white;
          text-align: center;
          padding: 15px 0;
          width: 100%;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="navbar-container">
        <Navbar />
      </div>

      <div className="content">
        {submitted ? (
          <div className="success-container">
            <div className="success-icon">✅</div>
            <div className="success-message">Message sent successfully!</div>
            <p>We'll get back to you shortly.</p>
            <Link to="/" className="back-home">Return to Home</Link>
          </div>
        ) : (
          <div className="contact-form-container">
            <h2>Contact Us</h2>
            <p>We're here to help. Send us a message.</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="form-input"
              ></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
