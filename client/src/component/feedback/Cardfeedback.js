import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Cardfeedback({ title, description, image }) {
  return (
    <>
        <Card
    style={{ width: "20rem", margin: "2rem", height: "300px" }}
    className="p-0 card-zoom"
  >
    <Card.Img
      variant="top"
      src={image}
      alt={title}
      style={{ width: "100%", height: "50%" }}
    />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
    </>
  )
}

export default Cardfeedback