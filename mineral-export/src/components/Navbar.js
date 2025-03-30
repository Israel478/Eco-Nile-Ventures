import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          Eco-Nile Ventures
        </Link>

        {/* Navigation Links */}
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/upload" style={styles.link}>Upload</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          {/* Added new links */}
          <Link to="/request" style={styles.link}>Request</Link>
          <Link to="/marketplace" style={styles.link}>Marketplace</Link>
        </div>
      </div>
    </nav>
  );
};

// Inline Styles for Thin Design
const styles = {
  navbar: {
    background: "linear-gradient(to right, #006400, #00a650)", // Dark to Light Green
    color: "white",
    padding: "10px 0", // Reduced padding for a thinner look
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)", // Lighter shadow for a more minimalistic design
    position: "fixed", // Fixes it at the top
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  logo: {
    fontSize: "1.6rem", // Slightly smaller logo font size
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
    transition: "color 0.3s",
  },
  navLinks: {
    display: "flex",
    gap: "15px", // Reduced gap for a more compact look
  },
  link: {
    fontSize: "1rem", // Smaller font size for thinner design
    color: "white",
    textDecoration: "none",
    padding: "8px 12px", // Reduced padding for smaller buttons
    borderRadius: "5px",
    transition: "background 0.3s, color 0.3s",
  },
};

export default Navbar;
