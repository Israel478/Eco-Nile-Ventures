import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'animate.css';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <main style={styles.content} className="animate__animated animate__fadeIn">
        <h1 style={styles.title}>About Eco-Nile Ventures</h1>
        
        <p style={styles.description}>
          At <strong>Eco-Nile Ventures</strong>, we are committed to excellence in the export of high-quality industrial metals.
          With a focus on sustainability, we ensure that our products meet the highest industry standards while minimizing environmental impact.
        </p>

        <p style={styles.description}>
          Our mission is to provide premium-grade metals for industries worldwide, utilizing energy-efficient processes and responsible sourcing.
          We take pride in being a trusted partner for manufacturers, delivering top-tier materials with precision and reliability.
        </p>

        {/* 🌍 Sustainability & Quality Assurance Section */}
        <div style={styles.infoContainer}>
          <div style={styles.infoBox} className="animate__animated animate__fadeInUp">
            <i className="fas fa-leaf" style={styles.icon}></i>
            <h3 style={styles.infoTitle}>Sustainability</h3>
            <p style={styles.infoText}>Eco-friendly production & ethical sourcing to protect our planet.</p>
          </div>

          <div style={styles.infoBox} className="animate__animated animate__fadeInUp animate__delay-1s">
            <i className="fas fa-certificate" style={styles.icon}></i>
            <h3 style={styles.infoTitle}>Certified Quality</h3>
            <p style={styles.infoText}>We meet the highest industry standards for durability and performance.</p>
          </div>

          <div style={styles.infoBox} className="animate__animated animate__fadeInUp animate__delay-2s">
            <i className="fas fa-globe" style={styles.icon}></i>
            <h3 style={styles.infoTitle}>Global Reach</h3>
            <p style={styles.infoText}>Delivering industrial metals to industries worldwide with efficiency.</p>
          </div>
        </div>

        {/* ✅ Call-to-Action */}
        <a href="/quote" style={styles.button} className="quote-button">Request a Quote</a>
      </main>

      <Footer />

      {/* ✅ Button Hover & Animation Effects */}
      <style>
        {`
          .quote-button:hover {
            background: #009900;
            box-shadow: 0px 6px 12px rgba(0, 255, 127, 0.6);
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

// ✅ Updated Styles for a Professional Look
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #3a3a3a)',
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
  },
  content: {
    flexGrow: 1,
    maxWidth: '900px',
    margin: 'auto',
    textAlign: 'center',
    padding: '50px 20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ff7f',
    textShadow: '2px 2px 8px rgba(0, 255, 127, 0.6)',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.3rem',
    color: '#ccc',
    lineHeight: '1.7',
    marginBottom: '30px',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '40px',
  },
  infoBox: {
    flex: '1',
    minWidth: '250px',
    background: '#222',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  infoBoxHover: {
    transform: 'scale(1.05)',
  },
  icon: {
    fontSize: '3rem',
    color: '#00ff7f',
    marginBottom: '10px',
  },
  infoTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '10px',
  },
  infoText: {
    fontSize: '1.1rem',
    color: '#ccc',
  },
  button: {
    display: 'inline-block',
    background: '#00b300',
    color: 'white',
    fontSize: '1.2rem',
    padding: '14px 30px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'none',
    boxShadow: '0px 4px 10px rgba(0, 255, 127, 0.4)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    marginTop: '30px',
  },
};

export default AboutPage;
