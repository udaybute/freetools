import React from 'react';
import { Link } from 'react-router-dom';  // Use Link to enable navigation

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">My Tools</Link> {/* Link to Home */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/pdf-to-image">PDF to Image</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/image-to-pdf">Image to PDF</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pdf-editor">PDF Editor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/image-to-ppt">Image to PPT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ToolsPage">ToolsPage</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
