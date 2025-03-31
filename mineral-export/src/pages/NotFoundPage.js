import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.description}>
        Oops! The page you’re looking for doesn’t exist.  
        Let’s get you back on track!
      </p>
      <Link to="/" style={styles.button}>Go Home</Link>
    </div>
  );
};

// ✅ 404 Page Styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    background: 'linear-gradient(to right, #1a1a1a, #333, #4d4d4d)',
    color: 'white',
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontSize: '3rem',
    color: '#ff4d4d',
  },
  description: {
    fontSize: '1.2rem',
    color: '#ccc',
    marginBottom: '20px',
  },
  button: {
    background: '#00b300',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
};

export default NotFoundPage;
