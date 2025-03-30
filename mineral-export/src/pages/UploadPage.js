// src/pages/UploadPage.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      alert('File uploaded successfully!');
    } else {
      alert('Please select a file.');
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.mainContent}>
        <h1 style={styles.title}>Upload Your Industrial Metal</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            <span style={styles.labelText}>Upload Image/Video</span>
            <input
              type="file"
              onChange={handleFileChange}
              style={styles.fileInput}
              required
            />
          </label>
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

// Professional, modern styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures full-page height
    background: 'linear-gradient(to right, #1a1a1a, #333, #4d4d4d)', // Professional background
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
  },
  mainContent: {
    flexGrow: 1, // Pushes footer to the bottom
    textAlign: 'center',
    padding: '40px 20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ff7f', // Green color for a professional touch
    textShadow: '2px 2px 8px rgba(0, 255, 127, 0.6)',
    marginBottom: '30px',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#2c2c2c',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    width: '100%',
    marginBottom: '20px',
  },
  labelText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '10px',
  },
  fileInput: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#444',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  submitButton: {
    backgroundColor: '#00b300',
    color: '#fff',
    padding: '12px 30px',
    borderRadius: '6px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '20px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
  },
  submitButtonHover: {
    backgroundColor: '#007f00',
  },
};

export default UploadPage;
