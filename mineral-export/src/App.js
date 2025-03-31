import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import UploadPage from "./pages/UploadPage";
import RequestPage from "./pages/RequestPage";
import QuotePage from "./pages/QuotePage"; // ✅ Added Quote Page
import MarketplacePage from "./pages/MarketplacePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/quote" element={<QuotePage />} />  {/* ✅ New Route */}
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
