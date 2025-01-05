import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-primary">Unlock the Power of PDF Tools!</h1>
        <p className="text-muted fs-5">Simplify Your Workflows with Fast, Secure, and Versatile Tools</p>
        <hr className="w-50 mx-auto" />
      </div>

      {/* Features Section */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            
            <div className="card-body">
              <h5 className="card-title text-primary">PDF to Image</h5>
              <p className="card-text text-secondary">
                Easily convert your PDFs into stunning, high-quality images perfect for presentations or sharing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
           
            <div className="card-body">
              <h5 className="card-title text-primary">PDF to PPT</h5>
              <p className="card-text text-secondary">
                Transform PDFs into fully editable PowerPoint presentations in seconds, keeping all formatting intact.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
           
            <div className="card-body">
              <h5 className="card-title text-primary">Edit PDFs</h5>
              <p className="card-text text-secondary">
                Add text, rearrange pages, highlight content, and make your PDFs truly your own with our editing tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-5 py-4 bg-light rounded">
        <h3 className="fw-bold text-center mb-4">Why Choose Us?</h3>
        <div className="row">
          <div className="col-md-4 text-center">
            <h5 className="text-success">🌟 User-friendly Interface</h5>
            <p className="text-secondary">
              Designed for ease of use, even for beginners.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="text-success">⚡ Fast and Secure</h5>
            <p className="text-secondary">
              Get results quickly without compromising on privacy.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h5 className="text-success">🎨 Stunning Results</h5>
            <p className="text-secondary">
              Professional-quality outputs every time.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold mb-3">Get Started Today!</h3>
        <p className="text-secondary fs-5">
        Enjoy fast and efficient <span className="text-success fw-bold">solutions</span> that are tailored to your needs.
        </p>
        <button className="btn btn-primary btn-lg">Share with your Friends</button>
        <p className="text-muted mt-3">
        "Save time and effort while managing your documents in style."
        </p>
      </div>
    </div>
  );
};

export default About;
