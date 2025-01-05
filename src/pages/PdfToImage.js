import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import pdftoimage from "../asset/pdftoimage.webp";
const PdfToImage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file.");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("/api/convert/pdf-to-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      alert("PDF converted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="mb-4">Convert PDF to Images</h1>
          <p className="mb-4">
            Easily convert your PDF documents into high-quality images. Simply
            upload your file and start the conversion process.
          </p>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload PDF</Form.Label>
              <Form.Control type="file" accept="application/pdf" onChange={handleFileChange} />
            </Form.Group>
            <Button
              variant="primary"
              className="w-100"
              disabled={!file}
              onClick={handleUpload}
            >
              Convert to Images
            </Button>
          </Form>
        </div>
        <div className="col-md-6 text-center">
          <img
             src={pdftoimage}
            alt="PDF to Image Illustration"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PdfToImage;
