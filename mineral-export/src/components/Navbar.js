import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          Eco-Nile Ventures
        </Link>

        {/* Navigation Links Dropdown */}
        <div style={styles.dropdownContainer}>
          <i 
            className="bi bi-list" 
            style={styles.dropdownIcon} 
            onClick={toggleDropdown}
          ></i>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div style={styles.dropdownMenu}>
              <Link to="/" style={styles.dropdownLink}>Home</Link>
              <Link to="/about" style={styles.dropdownLink}>About</Link>
              <Link to="/products" style={styles.dropdownLink}>Products</Link>
              <Link to="/upload" style={styles.dropdownLink}>Upload</Link>
              <Link to="/contact" style={styles.dropdownLink}>Contact</Link>
              <Link to="/request" style={styles.dropdownLink}>Request</Link>
              <Link to="/marketplace" style={styles.dropdownLink}>Marketplace</Link>
            </div>
          )}
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
  dropdownContainer: {
    position: "relative",
    cursor: "pointer",
  },
  dropdownIcon: {
    fontSize: "1.8rem", // Larger icon for better visibility
    color: "white",
    cursor: "pointer",
    transition: "color 0.3s",
  },
  dropdownMenu: {
    position: "absolute",
    top: "40px",
    right: "0",
    backgroundColor: "#333",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    padding: "10px 0",
  },
  dropdownLink: {
    color: "white",
    textDecoration: "none",
    padding: "8px 20px",
    fontSize: "1rem",
    transition: "background 0.3s, color 0.3s",
    borderRadius: "5px",
  },
};

export default Navbar;
