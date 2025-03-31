import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MarketplacePage = () => {
  const [modal, setModal] = useState({ open: false, type: '', details: '', message: '', sending: false, success: false });

  const handleContact = (type, details) => {
    setModal({ open: true, type, details, message: '', sending: false, success: false });
  };

  const closeModal = () => {
    setModal({ open: false, type: '', details: '', message: '', sending: false, success: false });
  };

  const handleSendMessage = () => {
    if (!modal.message.trim()) {
      alert('Please enter a message before sending.');
      return;
    }

    setModal({ ...modal, sending: true });

    setTimeout(() => {
      setModal({ ...modal, sending: false, success: true });

      setTimeout(() => {
        closeModal();
      }, 2500);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-12 overflow-auto">
        {/* Welcome Message */}
        <div className="welcome-section">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Marketplace</h1>
        </div>

        <div className="bg-gray-100 text-center p-4 shadow-md mt-4">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover a wide range of requests and offers from buyers and sellers. Whether you’re looking for specific minerals, rare metals, or seeking a supplier, our marketplace connects you with trusted partners in the industry.
          </p>
        </div>

        <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Whether you're a buyer or a seller, our platform is built to help you find the right partners quickly. Start by browsing through the active marketplace listings below, or post your own request and let the connections come to you!
        </p>

        <div className="request-card-container">
          {/* Buyer Request Card */}
          <div className="marketplace-listing bg-white p-6 rounded-lg shadow-md mb-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Example Request: High-Quality Copper</h3>
            <p className="text-lg text-gray-700 mb-4">
              Looking for a reliable supplier of high-quality copper for an upcoming project. The required amount is 100 tons, and it needs to meet international industry standards.
            </p>
            <button onClick={() => handleContact('buyer', 'High-Quality Copper')} className="contact-button gold-gradient">
              Contact Buyer
            </button>
          </div>

          {/* Seller Offer Card */}
          <div className="marketplace-listing bg-white p-6 rounded-lg shadow-md mb-16 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Example Offer: Industrial Steel</h3>
            <p className="text-lg text-gray-700 mb-4">
              Offering industrial-grade steel for construction. Available in bulk quantities, ready for immediate delivery.
            </p>
            <button onClick={() => handleContact('seller', 'Industrial Steel')} className="contact-button purple-gradient">
              Contact Seller
            </button>
          </div>
        </div>
      </main>

      {/* Footer with proper spacing */}
      <Footer />

      {/* Contact Modal */}
      {modal.open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-2xl font-bold text-gray-800">{`Contact ${modal.type === 'buyer' ? 'Buyer' : 'Seller'}`}</h2>
            <p className="text-lg text-gray-700">{modal.details}</p>

            <textarea
              className="message-box"
              placeholder="Type your message..."
              value={modal.message}
              onChange={(e) => setModal({ ...modal, message: e.target.value })}
            />

            <div className="modal-buttons">
              <button onClick={handleSendMessage} className="send-button">
                {modal.sending ? 'Sending...' : 'Send Message'}
              </button>
              <button onClick={closeModal} className="close-button">Close</button>
            </div>

            {modal.success && <p className="success-message">Message sent successfully!</p>}
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .min-h-screen { display: flex; flex-direction: column; min-height: 100vh; }

        .welcome-section {
          
          text-align: center;
          padding: 2rem 0;
          margin-bottom: 2rem;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .contact-button { display: block; width: 100%; padding: 12px; font-size: 1rem; font-weight: bold; color: white; border-radius: 6px; transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .gold-gradient { background: linear-gradient(to right, #FFD700, #FFA500); }
        .purple-gradient { background: linear-gradient(to right, #7B1FA2, #512DA8); }

        .marketplace-listing { margin-bottom: 4rem; }

        /* Modal */
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 50; }
        .modal-content { background: white; padding: 2rem; border-radius: 8px; text-align: center; width: 90%; max-width: 500px; }

        .message-box { width: 100%; height: 100px; padding: 8px; border: 1px solid #ccc; border-radius: 5px; margin-top: 10px; }

        .modal-buttons { display: flex; justify-content: space-between; margin-top: 20px; }
        .send-button { background: #28a745; color: white; padding: 10px 20px; border-radius: 5px; font-size: 1rem; cursor: pointer; flex: 1; margin-right: 10px; }
        .close-button { background: #dc3545; color: white; padding: 10px 20px; border-radius: 5px; font-size: 1rem; cursor: pointer; flex: 1; }

        .success-message { margin-top: 15px; font-size: 1rem; font-weight: bold; color: #28a745; }
      `}</style>
    </div>
  );
};

export default MarketplacePage;
