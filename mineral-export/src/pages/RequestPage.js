import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RequestPage = () => {
  const [request, setRequest] = useState("");

  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request submitted: ${request}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow p-8 pt-24 overflow-y-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Request Your Custom Industrial Metal</h1>
        
        <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Our team is here to fulfill your industrial metal requirements with precision and quality. Please provide detailed information about the materials you're looking for, and we’ll get back to you with a solution tailored to your needs.
        </p>

        <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          <strong>Your Request Matters:</strong> By providing us with clear and specific information about the type of industrial metal, its dimensions, quantity, and any other special requirements, we can ensure that we deliver exactly what you need, when you need it. Our dedicated team will review your request thoroughly and will be in touch with you shortly to discuss the next steps. Whether you need metals for construction, manufacturing, or any other industrial purpose, we're here to help you every step of the way.
        </p>
        
        <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          <strong>What Happens After You Submit Your Request?</strong> Once you submit your request, it will be reviewed by one of our specialists. They will analyze your needs and determine the best solution based on your specifications. We’ll then reach out to you to confirm the details and provide you with a quote. If there are any customizations or special requirements, we'll ensure that all your needs are addressed before proceeding. Our goal is to offer a seamless and efficient experience from start to finish.
        </p>
        
        <div className="request-card-container">
          <form onSubmit={handleSubmit} className="request-form">
            <textarea
              value={request}
              onChange={handleChange}
              className="request-input"
              placeholder="Describe the industrial metal you're looking for. Include details like size, type, and quantity."
              rows="4" // Reduced the height of the textarea to make the card smaller
              required
            />
            <button 
              type="submit" 
              className="request-button">
              Submit Request
            </button>
          </form>
        </div>

        {/* Add extra space before the footer */}
        <div className="footer-space"></div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .min-h-screen {
          display: flex;
          flex-direction: column;
        }

        .request-card-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .request-form {
          background-color: #fff;
          padding: 3rem; /* Reduced padding for a smaller card */
          width: 60%; /* Reduced width for the form card */
          max-width: 400px; /* Set a maximum width for the card */
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .request-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          transition: border-color 0.3s ease;
        }

        .request-input:focus {
          outline: none;
          border-color: #38a169;
          box-shadow: 0 0 0 2px rgba(72, 161, 105, 0.5);
        }

        .request-button {
          width: 100%;
          padding: 1rem;
          background-color: #38a169;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 1.125rem;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }

        .request-button:hover {
          background-color: #2f855a;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .request-form {
            padding: 1.5rem;
            width: 80%;
          }
          
          .request-input {
            padding: 0.75rem;
            margin-bottom: 1.25rem;
          }

          .request-button {
            padding: 0.75rem;
          }
        }

        /* Minimizing Footer Space */
        footer {
          padding: 0.5rem 0; /* Reduced footer padding */
          font-size: 0.875rem; /* Smaller font size */
        }

        /* Ensures the footer stays at the bottom */
        .min-h-screen {
          display: flex;
          flex-direction: column;
        }

        main {
          flex-grow: 1;
          margin-top: 2rem; /* Keeps the text visible and pushes it down slightly */
          overflow-y: auto; /* Allows scrolling if content overflows */
        }

        /* Add space between form and footer */
        .footer-space {
          margin-bottom: 3rem; /* Adjust this value to control space between form and footer */
        }
      `}</style>
    </div>
  );
};

export default RequestPage;
