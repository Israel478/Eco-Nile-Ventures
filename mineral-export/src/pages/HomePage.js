// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';  // Correct import
import Footer from '../components/Footer';  // Correct import

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      
      {/* Main Content Section */}
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Welcome to Eco-Nile Ventures</h1>
        <p style={styles.subtitle}>Your trusted partner for industrial metals exports.</p>
        <p style={styles.description}>
          We specialize in exporting high-quality industrial metals to meet your manufacturing needs.
        </p>
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures full-page height
    background: 'linear-gradient(to right, #1a1a1a, #333, #4d4d4d)', // Modern gradient background
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
  },
  mainContent: {
    flexGrow: 1, // Pushes footer down to the bottom
    textAlign: 'center',
    padding: '40px 20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ff7f', // Professional green shade
    textShadow: '2px 2px 8px rgba(0, 255, 127, 0.6)', // Subtle text shadow for effect
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#ccc', // Light gray for contrast
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#ccc', // Light gray text
    lineHeight: '1.6',
  },
};

export default HomePage;  // Correct default export
