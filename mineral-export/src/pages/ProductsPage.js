// src/pages/ProductsPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductsPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />

      {/* Main Content Section */}
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Our Products</h1>
        
        {/* Product Grid */}
        <div style={styles.productGrid}>
          <div style={styles.productCard}>
            <img
              src="/assets/product1.jpg"
              alt="Product 1"
              style={styles.productImage}
            />
            <h3 style={styles.productTitle}>Product 1</h3>
            <p style={styles.productDescription}>
              High-quality industrial metal for manufacturing processes.
            </p>
          </div>

          <div style={styles.productCard}>
            <img
              src="/assets/product2.jpg"
              alt="Product 2"
              style={styles.productImage}
            />
            <h3 style={styles.productTitle}>Product 2</h3>
            <p style={styles.productDescription}>
              Specialized industrial metal for heavy-duty equipment.
            </p>
          </div>
        </div>
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

// Styles for a polished, professional design
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures full-page height
    background: 'linear-gradient(to right, #1a1a1a, #333, #4d4d4d)', // Professional gradient background
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
  },
  mainContent: {
    flexGrow: 1, // Pushes footer to the bottom
    textAlign: 'center',
    padding: '40px 20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ff7f', // Green for professionalism
    textShadow: '2px 2px 8px rgba(0, 255, 127, 0.6)', // Subtle shadow for impact
    marginBottom: '30px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  productCard: {
    backgroundColor: '#2c2c2c',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  productCardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  },
  productImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  productTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#fff',
  },
  productDescription: {
    fontSize: '1rem',
    color: '#ccc',
    lineHeight: '1.5',
  },
};

export default ProductsPage;  // Exporting as ProductsPage
