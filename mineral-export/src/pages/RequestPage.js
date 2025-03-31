import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'animate.css';

const RequestPage = () => {
  const [request, setRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setRequest('');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header Section */}
      <div className="messages-container">
        <h1 className="text-4xl font-extrabold text-center text-gold mb-6 animate__animated animate__fadeInDown">
          Request Your Custom Mineral Export
        </h1>

        <p className="text-lg text-center text-gray-dark mb-4 max-w-2xl mx-auto animate__animated animate__fadeIn">
          We specialize in delivering high-quality minerals for export.  
          Submit your request, and our team will tailor a solution for you.
        </p>
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="request-card-container animate__animated animate__zoomIn">
          <form onSubmit={handleSubmit} className="request-form">
            <h2 className="form-title">Submit Your Request</h2>
            <p className="form-subtitle">Provide details about the mineral type, grade, and quantity.</p>
            
            <textarea
              value={request}
              onChange={handleChange}
              className="request-input"
              placeholder="Describe the mineral type, grade, and quantity you need."
              rows="5"
              required
            />
            
            <div className="button-container">
              <button
                type="submit"
                className="request-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="success-overlay">
            <div className="success-modal animate__animated animate__fadeInUp">
              <h2 className="success-title">✅ Request Submitted!</h2>
              <p className="success-message">
                Our team will review your request and get in touch shortly.
              </p>
              <button
                className="close-button"
                onClick={() => setIsSuccess(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Add space between form and footer */}
      <div className="space-between-footer"></div>

      <Footer />

      <style jsx>{`
        /* 🎨 Color Theme */
        :root {
          --forest-green: #2E7D32;
          --olive-green: #3E8E41;
          --gold: #D4AF37;
          --gray-dark: #4A5568;
          --white: #F7FAFC;
          --background-gray: #F4F4F4;
        }

        .min-h-screen {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background-color: var(--background-gray);
        }

        /* Header Styling */
        .messages-container {
          text-align: center;
          padding: 1.5rem 1rem;
          color: var(--black);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem;
        }

        .text-gold {
          color: var(--gold);
        }

        /* Request Form */
        .request-card-container {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .request-form {
          background-color: var(--white);
          padding: 4rem;
          width: 60%;
          max-width: 450px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
          text-align: center;
        }

        .form-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--forest-green);
          margin-bottom: 0.5rem;
        }

        .form-subtitle {
          font-size: 1rem;
          color: var(--gray-dark);
          margin-bottom: 1rem;
        }

        .request-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid var(--gray-dark);
          border-radius: 10px;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          transition: border-color 0.3s ease;
        }

        .request-input:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.5);
        }

        /* Centered Button */
        .button-container {
          display: flex;
          justify-content: center;
        }

        .request-button {
          padding: 1rem 2rem;
          background-color: var(--olive-green);
          color: var(--white);
          border: none;
          border-radius: 10px;
          font-size: 1.125rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .request-button:hover {
          background-color: #2d6a2a;
        }

        .request-button:disabled {
          background-color: #a0aec0;
          cursor: not-allowed;
        }

        /* Success Message */
        .success-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .success-modal {
          background: var(--white);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--gold);
        }

        .success-message {
          font-size: 1.1rem;
          color: var(--gray-dark);
          margin-top: 0.5rem;
        }

        .close-button {
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          background: var(--gold);
          color: var(--forest-green);
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .close-button:hover {
          background: #b69530;
        }

        /* Sticky Footer */
        footer {
          margin-top: auto;
          background: var(--forest-green);
          color: var(--white);
          text-align: center;
          padding: 1rem 0;
          font-size: 0.875rem;
        }

        /* Space between the form and footer */
        .space-between-footer {
          margin-bottom: 2rem; /* Adjust the spacing as needed */
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .request-form {
            padding: 2rem;
            width: 90%;
          }

          .request-input {
            padding: 0.75rem;
          }

          .request-button {
            padding: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RequestPage;
