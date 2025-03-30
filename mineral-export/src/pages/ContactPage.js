import React, { useState } from 'react';
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
    <div className="contact-page-container">
      <style>{`
        /* General Body Styles */
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f7fafc;
          color: #4a5568;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Contact Page Container */
        .contact-page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f7fafc;
        }

        /* Navbar Styles */
        .navbar {
          background-color: #2f855a;
          color: #fff;
          padding: 15px 0;
          text-align: center;
          font-size: 1.25rem;
          font-weight: bold;
        }

        /* Footer Styles */
        .footer {
          background-color: #2f855a;
          color: #fff;
          text-align: center;
          padding: 10px 0;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        /* Heading Styles */
        .contact-heading {
          font-size: 2rem;
          color: #2f855a;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1rem;
        }

        /* Subheading for contact form */
        .contact-subheading {
          font-size: 1.125rem;
          color: #4a5568;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        /* Form Container */
        .contact-form-container {
          display: flex;
          justify-content: center;
          margin: 0 auto;
          padding: 1rem;
        }

        /* Form Style (Compact version) */
        .contact-form {
          background-color: white;
          border-radius: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 2.5rem;
          max-width: 400px; /* Reduced width */
          width: 100%;
        }

        /* Input Fields */
        .form-input {
          width: 100%;
          padding: 0.75rem; /* Reduced padding */
          border-radius: 0.5rem;
          border: 2px solid #e2e8f0;
          font-size: 1rem;
          margin-bottom: 1rem; /* Reduced bottom margin */
          transition: border-color 0.3s ease;
        }

        /* Focus Styles for Inputs */
        .form-input:focus {
          outline: none;
          border-color: #38a169;
          box-shadow: 0 0 0 2px rgba(72, 161, 105, 0.5);
        }

        /* Submit Button Styles */
        .submit-button {
          width: 100%;
          padding: 0.75rem; /* Reduced padding */
          background-color: #38a169;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1.125rem;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #2f855a;
        }

        /* Success Message */
        .success-message {
          text-align: center;
          color: #38a169;
          font-size: 1.25rem;
          margin-top: 1.5rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .contact-form-container {
            padding: 1.5rem;
          }

          .contact-form {
            padding: 1.25rem; /* Reduced padding */
          }

          .form-input {
            padding: 0.75rem;
            margin-bottom: 1.25rem;
          }

          .submit-button {
            padding: 0.75rem;
          }
        }
      `}</style>
      
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-subheading">
          We’re here to help. Reach out to us for any inquiries or support.
        </p>

        {submitted ? (
          <p className="success-message">
            Thank you for your message! We will get back to you soon.
          </p>
        ) : (
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-800 mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-800 mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="mb-6">
                <label className="block text-lg font-medium text-gray-800 mb-2">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" /* Reduced number of rows */
                  className="form-input"
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
