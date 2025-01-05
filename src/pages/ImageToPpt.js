import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import PptxGenJS from "pptxgenjs";
import pdftoppt from "../asset/pdftoppt.webp";
const ImageToPpt = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => setSelectedImages(Array.from(e.target.files));

  const generatePpt = () => {
    const pptx = new PptxGenJS();
    selectedImages.forEach((image, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgData = reader.result;
        const slide = pptx.addSlide();
        slide.addImage({ data: imgData, x: 0.5, y: 0.5, w: 9, h: 6.75 });
        if (index === selectedImages.length - 1) pptx.writeFile({ fileName: "images.pptx" });
      };
      reader.readAsDataURL(image);
    });
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="mb-4">Convert Images to PPT</h1>
          <p className="mb-4">
            Transform your images into stunning PowerPoint presentations. Upload
            images and create professional slides instantly.
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
              onClick={generatePpt}
            >
              Generate PPT
            </Button>
          </Form>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={pdftoppt}
            alt="Image to PPT Illustration"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageToPpt;
