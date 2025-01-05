import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const Upload = ({ onUpload }) => {
  const [files, setFiles] = useState([]);
  
  const onDrop = acceptedFiles => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onUpload(response.data); // Handle the response from the backend
    } catch (error) {
      alert("Error uploading file.");
    }
  };

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop files here, or click to select files</p>
      </div>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
