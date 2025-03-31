import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: 'Tantalum Ore',
      image: '/assets/images/tantalum-ore.jpg',
      description:
        'Tantalum ore is a rare, highly corrosion-resistant mineral used in high-performance electronics, aerospace engineering, and medical devices. Its excellent conductivity and resistance to extreme temperatures make it a crucial component in capacitors, jet engine parts, and surgical implants.',
    },
    {
      id: 2,
      title: 'Tungsten Ore',
      image: '/assets/images/tungsten-ore.jpg',
      description:
        'Tungsten ore is a dense and durable metal known for its high melting point and exceptional strength. It is widely used in the production of cutting tools, industrial machinery, electrical contacts, and military-grade armor-piercing ammunition.',
    },
  ];

  return (
    <div style={styles.container}>
      <Navbar />

      {/* If a product is selected, show it full-screen (Horizontally) */}
      {selectedProduct ? (
        <div style={styles.fullScreenProduct}>
          <img src={selectedProduct.image} alt={selectedProduct.title} style={styles.fullScreenImage} />
          <div style={styles.fullScreenText}>
            <h2 style={styles.fullScreenTitle}>{selectedProduct.title}</h2>
            <p style={styles.fullScreenDescription}>{selectedProduct.description}</p>
            <button style={styles.closeButton} onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      ) : (
        // Default Vertical List View
        <div style={styles.mainContent}>
          <h1 style={styles.title}>Our Products</h1>
          <div style={styles.productList}>
            {products.map((product) => (
              <div
                key={product.id}
                style={styles.productCard}
                onClick={() => setSelectedProduct(product)}
              >
                <img src={product.image} alt={product.title} style={styles.productImage} />
                <h3 style={styles.productTitle}>{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #1a1a1a, #333, #4d4d4d)',
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
  },
  mainContent: {
    flexGrow: 1,
    textAlign: 'center',
    padding: '40px 20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ff7f',
    textShadow: '2px 2px 8px rgba(0, 255, 127, 0.6)',
    marginBottom: '30px',
  },
  productList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  productCard: {
    display: 'flex',
    flexDirection: 'column', // Ensure vertical layout
    alignItems: 'center',
    backgroundColor: '#2c2c2c',
    borderRadius: '8px',
    padding: '20px',
    width: '90%',
    maxWidth: '600px',
    cursor: 'pointer',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  productImage: {
    width: '200px', // Bigger image for better visibility
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px', // Space between image and text
  },
  productTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#00ff7f',
  },
  // Full-Screen Product View (Horizontal)
  fullScreenProduct: {
    display: 'flex',
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#222',
    padding: '40px',
  },
  fullScreenImage: {
    width: '50%',
    height: '90%',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  fullScreenText: {
    width: '50%',
    paddingLeft: '40px',
    textAlign: 'left',
  },
  fullScreenTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ff7f',
  },
  fullScreenDescription: {
    fontSize: '1.2rem',
    color: '#ccc',
    lineHeight: '1.5',
    marginTop: '10px',
  },
  closeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    background: '#00ff7f',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductsPage;
