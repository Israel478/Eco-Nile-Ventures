import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'animate.css';

const HomePage = () => {
  const navigate = useNavigate();

  // Function to navigate with animation effect
  const handleExploreClick = () => {
    document.body.classList.add("animate__fadeOut"); // Apply fade-out before navigation
    setTimeout(() => {
      navigate("/about");
    }, 500); // Delay to match animation timing
  };

  return (
    <div style={styles.container} className="animate__animated animate__fadeIn">
      <Navbar />

      {/* Main Content Section */}
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Welcome to Eco-Nile Ventures</h1>
        <p style={styles.subtitle}>Your trusted partner for industrial metals exports.</p>
        <p style={styles.description}>
          We specialize in exporting high-quality industrial metals to meet your manufacturing needs.
        </p>

        {/* ✅ Image and Button Container for Proper Alignment */}
        <div style={styles.imageContainer}>
          <img 
            src="/assets/images/eco-nile-ventures-logo.png" 
            alt="Industrial Metals"
            style={styles.image}
            className="animate__animated animate__fadeInUp"
          />
          <button onClick={handleExploreClick} style={styles.button} className="explore-button">
            Explore More
          </button>
        </div>
      </div>

      <Footer />

      {/* Button Hover & Animation Effects */}
      <style>
        {`
          .explore-button:hover {
            background: #009900;
            box-shadow: 0px 6px 12px rgba(0, 255, 127, 0.6);
            transform: scale(1.05);
          }
          
          .animate__fadeOut {
            animation: fadeOut 0.5s forwards;
          }
        `}
      </style>
    </div>
  );
};

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
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#ccc',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#ccc',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column', // Ensures vertical alignment
    alignItems: 'center', // Centers content
    justifyContent: 'center',
    marginBottom: '30px',
  },
  image: {
    width: '60%', // Adjusts to screen size
    maxWidth: '300px', // Reduced size for better responsiveness
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(255, 255, 255, 0.2)',
    marginBottom: '20px', // Space between image and button
  },
  button: {
    background: '#00b300',
    color: 'white',
    fontSize: '1.2rem',
    padding: '12px 30px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'none',
    boxShadow: '0px 4px 10px rgba(0, 255, 127, 0.4)',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    marginTop: '10px', // Ensures spacing below the image
  },
};

export default HomePage;
