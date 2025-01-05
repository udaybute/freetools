import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { jsPDF } from "jspdf";
import PptxGenJS from "pptxgenjs";
import { PDFDocument, rgb } from "pdf-lib";
import pdftoppt from "../asset/pdftoppt.webp";
import pdftoimage1 from "../asset/pdftoimage1.webp";
import pdftoimage from "../asset/pdftoimage.webp";
import pdfeditor from "../asset/pdfeditor.webp";

const ToolsPage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [textToAdd, setTextToAdd] = useState("");

  // Common Handlers
  const handleImageChange = (e) => setSelectedImages(Array.from(e.target.files));
  const handlePdfChange = (e) => setPdfFile(e.target.files[0]);

  // Convert Images to PDF
  const generatePdf = () => {
    const doc = new jsPDF();
    selectedImages.forEach((image, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imgData = reader.result;
        if (index > 0) doc.addPage();
        doc.addImage(imgData, "JPEG", 10, 10, 180, 160);
        if (index === selectedImages.length - 1) {
          doc.save("images.pdf");
        }
      };
      reader.readAsDataURL(image);
    });
  };

  // Convert Images to PPT
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

  // Edit PDF
  const editPdf = async () => {
    if (!pdfFile) return alert("Please select a PDF file first.");
    const reader = new FileReader();
    reader.onload = async () => {
      const pdfBytes = new Uint8Array(reader.result);
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const page = pdfDoc.getPages()[0];
      page.drawText(textToAdd, { x: 50, y: 700, size: 30, color: rgb(0, 0, 0) });
      const pdfData = await pdfDoc.save();
      const blob = new Blob([pdfData], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "edited.pdf";
      link.click();
    };
    reader.readAsArrayBuffer(pdfFile);
  };

  return (
    <Container className="mt-5">
      <Row>
        <h1 className="text-center mb-4">File Conversion Tools</h1>
        {/** Image to PDF Tool */}
        <Col md={4} className="mb-4">
          <Card className="shadow-lg h-100 hover-card">
            <Card.Img variant="top" src={pdftoimage} alt="Image to PDF" />
            <Card.Body>
              <Card.Title>Image to PDF</Card.Title>
              <Card.Text>Convert images to PDF seamlessly and efficiently.</Card.Text>
              <Form>
                <Form.Control type="file" multiple onChange={handleImageChange} />
                <Button
                  variant="primary"
                  className="mt-3 w-100"
                  disabled={selectedImages.length === 0}
                  onClick={generatePdf}
                >
                  Generate PDF
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/** Image to PPT Tool */}
        <Col md={4} className="mb-4">
          <Card className="shadow-lg h-100 hover-card">
            <Card.Img variant="top" src={pdftoppt} alt="Image to PPT" />
            <Card.Body>
              <Card.Title>Image to PPT</Card.Title>
              <Card.Text>Transform your images into stunning PowerPoint slides.</Card.Text>
              <Form>
                <Form.Control type="file" multiple onChange={handleImageChange} />
                <Button
                  variant="primary"
                  className="mt-3 w-100"
                  disabled={selectedImages.length === 0}
                  onClick={generatePpt}
                >
                  Generate PPT
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/** PDF Editor Tool */}
        <Col md={4} className="mb-4">
          <Card className="shadow-lg h-100 hover-card">
            <Card.Img variant="top" src={pdfeditor} alt="PDF Editor" />
            <Card.Body>
              <Card.Title>PDF Editor</Card.Title>
              <Card.Text>Edit your PDF files and add text effortlessly.</Card.Text>
              <Form>
                <Form.Control type="file" accept="application/pdf" onChange={handlePdfChange} />
                <Form.Control
                  type="text"
                  placeholder="Enter text to add"
                  className="mt-3"
                  value={textToAdd}
                  onChange={(e) => setTextToAdd(e.target.value)}
                />
                <Button
                  variant="primary"
                  className="mt-3 w-100"
                  disabled={!pdfFile || !textToAdd}
                  onClick={editPdf}
                >
                  Edit PDF
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <style>{`
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </Container>
  );
};

export default ToolsPage;
