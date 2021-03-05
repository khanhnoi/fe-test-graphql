import React from "react";
import { Card, Col } from "react-bootstrap";

export default function Book() {
  return (
    <>
      <Col xs="6" md="4" className="mb-3">
        <Card border="info" text="info" className="text-center shadow">
          <Card.Body>Ten Sach 1</Card.Body>
        </Card>
      </Col>
    </>
  );
}
