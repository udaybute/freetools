import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import pdftoppt from "../asset/pdftoppt.webp";
import pdftoimage1 from "../asset/pdftoimage1.webp";
import pdftoimage from "../asset/pdftoimage.webp";
import pdfeditor from "../asset/pdfeditor.webp";
import freetools1 from "../asset/freetools.jpg";
import poster2 from "../asset/poster2.png";
import poster1 from "../asset/poster1.png";

const Home = () => {
  useEffect(() => {
    const bootstrap = require("bootstrap");
    new bootstrap.Carousel(document.getElementById("carouselExampleIndicators"));
  }, []);

  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={freetools1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={poster2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={poster1} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      {/* Heading Section */}
      <div className="container mt-4">
        <h2 className="text-center">Our Tools</h2>
        <p className="text-center">Discover a variety of file conversion and editing tools that make your work easier!</p>
      </div>

      {/* Tools Section */}
      <div className="container mt-4">
        <div className="row">
          {/* Tool Cards with Routes */}
          <div className="col-md-3 mb-4">
            <div className="card hover-card">
              <img src={pdftoimage1} className="card-img-top card-image" alt="PDF to Image" />
              <div className="card-body">
                <h5 className="card-title">PDF to Image</h5>
                <p className="card-text">Convert your PDFs into high-quality images.</p>
                <Link to="/pdf-to-image" className="btn btn-primary">Try Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card hover-card">
              <img src={pdftoimage} className="card-img-top card-image" alt="Image to PDF" />
              <div className="card-body">
                <h5 className="card-title">Image to PDF</h5>
                <p className="card-text">Easily convert images into a PDF file.</p>
                <Link to="/image-to-pdf" className="btn btn-primary">Try Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card hover-card">
              <img src={pdfeditor} className="card-img-top card-image" alt="PDF Editor" />
              <div className="card-body">
                <h5 className="card-title">PDF Editor</h5>
                <p className="card-text">Edit and annotate PDF files efficiently.</p>
                <Link to="/pdf-editor" className="btn btn-primary">Try Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card hover-card">
              <img src={pdftoppt} className="card-img-top card-image" alt="PDF to PPT" />
              <div className="card-body">
                <h5 className="card-title">PDF to PPT</h5>
                <p className="card-text">Transform your PDFs into PowerPoint slides.</p>
                <Link to="/image-to-ppt" className="btn btn-primary">Try Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: scale(1.05);
          box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
        }
        .card-image {
          transition: transform 0.3s ease;
        }
        .hover-card:hover .card-image {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Home;
