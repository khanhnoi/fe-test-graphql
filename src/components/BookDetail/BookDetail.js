import React from "react";
import { Card } from "react-bootstrap";

export default function BookDetail() {
  return (
    <>
      {/* <h1>BookDetail</h1> */}
      <Card
        border="light"
        text="white"
        bg="secondary"
        className="text-center shadow"
      >
        <Card.Body>
          <Card.Title>Ten Sach</Card.Title>
          <Card.Subtitle className="mb-2">Ten Tac gia</Card.Subtitle>
          <Card.Text>The Loai</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
