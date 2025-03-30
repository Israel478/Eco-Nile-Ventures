import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MarketplacePage = () => {
  const handleContactBuyer = () => {
    alert('Contacting the buyer...');
  };

  const handleContactSeller = () => {
    alert('Contacting the seller...');
  };

  return (
    <div className="min-h-[135vh] flex flex-col">
      <Navbar />

      <main className="flex-grow p-12 overflow-auto">
        {/* h1 Message Inside Main */}
        <div className="bg-gray-100 text-center p-6 mt-16 shadow-md">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to the Marketplace
          </h1>
        </div>

        {/* p1 Message Inside Main */}
        <div className="bg-gray-100 text-center p-4 shadow-md mt-4">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover a wide range of requests and offers from buyers and sellers. Whether you’re looking for specific minerals, rare metals, or seeking a supplier, our marketplace connects you with trusted partners in the industry.
          </p>
        </div>

        <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Whether you're a buyer or a seller, our platform is built to help you find the right partners quickly. Start by browsing through the active marketplace listings below, or post your own request and let the connections come to you!
        </p>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our platform allows buyers and sellers to post requests or offers. Once your request is posted, our team reviews it, and we connect you with suitable partners for your needs. Whether you're a buyer looking for materials or a seller offering minerals, we ensure a seamless experience for all parties involved.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Steps to Get Started:</h3>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Sign up to create your account</li>
            <li>Post your request or offer with clear specifications</li>
            <li>Connect with verified buyers or sellers</li>
            <li>Close the deal and manage your transactions</li>
          </ul>
        </div>

        <div className="request-card-container">
          <div className="marketplace-listing bg-white p-6 rounded-lg shadow-md mb-4 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Example Request: High-Quality Copper</h3>
            <p className="text-lg text-gray-700 mb-4">
              Looking for a reliable supplier of high-quality copper for an upcoming project. The required amount is 100 tons, and it needs to meet international industry standards.
            </p>
            <button
              onClick={handleContactBuyer}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
              Contact Buyer
            </button>
          </div>

          <div className="marketplace-listing bg-white p-6 rounded-lg shadow-md mb-4 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Example Offer: Industrial Steel</h3>
            <p className="text-lg text-gray-700 mb-4">
              Offering industrial-grade steel for construction. Available in bulk quantities, ready for immediate delivery.
            </p>
            <button
              onClick={handleContactSeller}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Contact Seller
            </button>
          </div>
        </div>

        <div className="mb-8"></div>
      </main>

      <Footer />

      <style jsx>{`
        .min-h-[135vh] {
          display: flex;
          flex-direction: column;
          min-height: 135vh;
        }

        main {
          flex-grow: 1;
          overflow-y: auto;
          padding-bottom: 2rem;
          padding-top: 4rem;
        }

        .request-card-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }

        .marketplace-listing {
          transition: transform 0.3s ease-in-out;
        }

        .marketplace-listing:hover {
          transform: translateY(-5px);
        }

        footer {
          padding: 0.25rem 0;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .request-card-container {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MarketplacePage;
