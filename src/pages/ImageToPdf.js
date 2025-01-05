import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { jsPDF } from "jspdf";
import pdftoimage from "../asset/pdftoimage.webp";

const ImageToPdf = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => setSelectedImages(Array.from(e.target.files));

  const generatePdf = () => {
    const doc = new jsPDF();
    selectedImages.forEach((image, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgData = reader.result;
        if (index > 0) doc.addPage();
        doc.addImage(imgData, "JPEG", 10, 10, 180, 160);
        if (index === selectedImages.length - 1) doc.save("images.pdf");
      };
      reader.readAsDataURL(image);
    });
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Functionality Section */}
        <div className="col-md-6">
          <h1 className="mb-4">Convert Images to PDF</h1>
          <p className="mb-4">
            Upload multiple images and easily convert them into a single PDF
            document. This tool is efficient, fast, and free to use for your
            everyday needs.
          </p>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Images</Form.Label>
              <Form.Control type="file" multiple onChange={handleImageChange} />
            </Form.Group>
            <Button
              variant="primary"
              className="w-100"
              disabled={selectedImages.length === 0}
              onClick={generatePdf}
            >
              Generate PDF
            </Button>
          </Form>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={pdftoimage}
            alt="Image to PDF Illustration"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Styles */}
      <style>{`
        h1 {
          font-size: 2.5rem;
          font-weight: bold;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.6;
        }
        .img-fluid {
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageToPdf;
