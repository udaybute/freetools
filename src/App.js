import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navbar for navigation across pages
import Footer from "./components/Footer"; // Footer displayed on every page
import Home from "./components/Home"; // Home page component
import About from "./components/About"; // About section component

// Page components for different tools
import PdfToImage from "./pages/PdfToImage";
import ImageToPdf from "./pages/ImageToPdf";
import PdfEditor from "./pages/PdfEditor";
import ImageToPpt from "./pages/ImageToPpt";

// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
import ToolsPage from "./pages/ToolsPage";
import ToolCard from "./pages/ToolCard";

function App() {
  return (
    <Router>
      {/* Navbar is always displayed at the top */}
      <Navbar />

      {/* Main content section with routing */}
      <main className="py-4">
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/pdf-to-image" element={<PdfToImage />} /> {/* PDF to Image Converter */}
          <Route path="/image-to-pdf" element={<ImageToPdf />} /> {/* Image to PDF Converter */}
          <Route path="/pdf-editor" element={<PdfEditor />} /> {/* PDF Editor */}
          <Route path="/image-to-ppt" element={<ImageToPpt />} /> {/* Image to PPT Converter */}
          <Route path="/ToolsPage" element={<ToolsPage />} /> {/* Image to PPT Converter */}
        </Routes>
      </main>

      {/* About section and Footer are displayed on every page */}
      <About />
      <Footer />
    </Router>
  );
}

export default App;
