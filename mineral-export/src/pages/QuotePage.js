import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // ✅ Form Validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Invalid email format';
    if (!formData.details.trim()) tempErrors.details = 'Please describe your requirements';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.spacer}></div> {/* ✅ Added Space Below Navbar */}
      
      <main style={styles.content} className="animate__animated animate__fadeIn">
        {!submitted ? (
          <div style={styles.card}>
            <h1 style={styles.title}>Request a Quote</h1>
            <p style={styles.description}>
              Get a personalized quote for high-quality industrial metals.  
              Fill out the form below, and our team will contact you shortly!
            </p>

            {/* ✅ Quote Form */}
            <form style={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.name && <span style={styles.error}>{errors.name}</span>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
              />
              {errors.email && <span style={styles.error}>{errors.email}</span>}

              <input
                type="text"
                name="company"
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={handleChange}
                style={styles.input}
              />

              <textarea
                name="details"
                placeholder="Describe your requirements..."
                value={formData.details}
                onChange={handleChange}
                style={styles.textarea}
              ></textarea>
              {errors.details && <span style={styles.error}>{errors.details}</span>}

              <div style={styles.buttonContainer}>
                <button type="submit" style={styles.button}>Submit Request</button>
              </div>
            </form>
          </div>
        ) : (
          <div className="animate__animated animate__fadeInUp" style={styles.card}>
            <h2 style={styles.successTitle}>✅ Quote Request Sent!</h2>
            <p style={styles.successMessage}>
              Thank you, {formData.name}! We have received your request and will get back to you shortly.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

// ✅ Enhanced Styles with Navbar Spacing
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #1a1a1a, #333, #4d4d4d)',
    fontFamily: "'Poppins', sans-serif",
    color: 'white',
  },
  spacer: {
    height: '80px', // ✅ Added space between Navbar and Form
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '30px',
    width: '90%',
    maxWidth: '500px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#00ff7f',
    textShadow: '2px 2px 8px rgba(0, 255, 127, 0.6)',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    color: '#ccc',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    outline: 'none',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    height: '100px',
    outline: 'none',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '10px',
  },
  button: {
    background: '#00b300',
    color: 'white',
    fontSize: '1rem',
    padding: '12px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    width: '100%',
  },
  successTitle: {
    fontSize: '1.8rem',
    color: '#00ff7f',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0, 255, 127, 0.6)',
  },
  successMessage: {
    fontSize: '1rem',
    color: '#ccc',
    marginTop: '10px',
  },
  error: {
    color: '#ff4d4d',
    fontSize: '0.85rem',
  },
};

export default QuotePage;
