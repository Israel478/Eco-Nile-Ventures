import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company Info */}
        <p style={styles.text}>
          &copy; {new Date().getFullYear()} <strong>Eco-Nile Ventures</strong>. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:contact@eco-nile.com" style={styles.icon}>
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* Privacy Policy & Terms */}
        <div style={styles.links}>
          <a href="/privacy-policy" style={styles.link}>Privacy Policy</a>
          <span style={styles.divider}>|</span>
          <a href="/terms" style={styles.link}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// ✅ Updated Inline Styles for Thin Design
const styles = {
  footer: {
    background: "linear-gradient(to right, #004d00, #008000)", // Green Gradient for Pro Vibe
    color: "white",
    textAlign: "center",
    padding: "15px 0", // Reduced padding for thinner footer
    position: "relative", // Ensures footer stays at the bottom if content is short
    width: "100%",
    boxShadow: "0px -2px 6px rgba(0, 0, 0, 0.1)", // Lighter shadow for thinner look
  },
  container: {
    maxWidth: "1200px", // Width adjustment for a more compact footer
    margin: "0 auto",
    padding: "0 20px",
  },
  text: {
    fontSize: "1rem", // Reduced font size for thinner appearance
    marginBottom: "10px", // Reduced bottom margin
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px", // Reduced gap for a more compact look
    marginBottom: "10px", // Reduced space below icons
  },
  icon: {
    fontSize: "1.4rem", // Slightly smaller icons for thinner design
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s, transform 0.3s", // Added scale transition on hover
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "12px", // Reduced gap between links
    fontSize: "0.9rem", // Reduced font size for thinner design
    marginTop: "5px", // Reduced space above links
  },
  link: {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s, text-decoration 0.3s", // Transition effect for smooth hover
    fontWeight: "500", // Slightly bold for emphasis
  },
  divider: {
    color: "#ddd",
  },
};

export default Footer;
