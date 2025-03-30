import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.content} className="animate__animated animate__fadeIn">
        <h1 style={styles.title}>About Eco-Nile Ventures</h1>
        <p style={styles.description}>
          Eco-Nile Ventures is a trusted exporter of industrial metals, prioritizing sustainability and quality.
          We provide premium-grade metals to industries worldwide, ensuring top-tier production standards and eco-conscious sourcing.
        </p>

        {/* Animated Icon */}
        <div>
          <i className="fas fa-recycle" style={styles.icon}></i>
        </div>

        <p style={styles.description}>
          Our sustainable approach integrates energy-efficient processes, reducing environmental impact while maintaining high-quality standards.
        </p>

        {/* Replaced 'Learn More' with 'Request a Quote' */}
        <button style={styles.button}>Request a Quote</button>
      </main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

// ✅ Modern, Minimalist Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures full-page height
    background: 'linear-gradient(to right, #1a1a1a, #333, #4d4d4d)',
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
  },
  content: {
    flexGrow: 1, // Pushes footer down
    maxWidth: '800px',
    margin: 'auto', // Centers content vertically
    textAlign: 'center',
    padding: '40px 20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ff7f',
    textShadow: '2px 2px 8px rgba(0, 255, 127, 0.6)',
    marginBottom: '15px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#ccc',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  icon: {
    fontSize: '4rem',
    color: '#00ff7f',
    margin: '20px 0',
    animation: 'bounce 1.5s infinite',
  },
  button: {
    background: '#00b300',
    color: 'white',
    fontSize: '1.1rem',
    padding: '12px 25px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    boxShadow: '0px 4px 10px rgba(0, 255, 127, 0.4)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    marginTop: '20px',
  },
};

export default AboutPage;
