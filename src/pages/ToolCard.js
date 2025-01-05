import React from "react";
import { Card } from "react-bootstrap";

const ToolCard = ({ title, description, image, link }) => {
  return (
    <div className="col-md-3 mb-4">
      <Card className="shadow-sm hover-card" style={{ transition: "transform 0.3s ease" }}>
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ objectFit: "cover", height: "180px" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a href={link} className="btn btn-primary">
            Try Now
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ToolCard;
