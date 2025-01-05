import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { PDFDocument, rgb } from "pdf-lib";
import pdfeditor from "../asset/pdfeditor.webp";
const PdfEditor = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [textToAdd, setTextToAdd] = useState("");

  const handlePdfChange = (e) => setPdfFile(e.target.files[0]);

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
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="mb-4">Edit Your PDF</h1>
          <p className="mb-4">
            Add text to your PDF files easily. Upload a PDF, type your text, and
            download the updated version in seconds.
          </p>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload PDF</Form.Label>
              <Form.Control type="file" accept="application/pdf" onChange={handlePdfChange} />
            </Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter text to add"
              className="mb-3"
              value={textToAdd}
              onChange={(e) => setTextToAdd(e.target.value)}
            />
            <Button
              variant="primary"
              className="w-100"
              disabled={!pdfFile || !textToAdd}
              onClick={editPdf}
            >
              Edit PDF
            </Button>
          </Form>
        </div>
        <div className="col-md-6 text-center">
          <img
           src={pdfeditor}
            alt="PDF Editor Illustration"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PdfEditor;
