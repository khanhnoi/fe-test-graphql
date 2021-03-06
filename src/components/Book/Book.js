import React from "react";
import { Card, Col } from "react-bootstrap";

export default function Book(props) {
  const { name, id, setBookSelectedId } = props;
  const handleSelectedBook = (id) => {
    // console.log(id);
    setBookSelectedId(id);
  };
  return (
    <>
      <Col xs="6" md="4" className="mb-3">
        <Card
          border="info"
          text="info"
          className="text-center shadow bookCard"
          onClick={() => handleSelectedBook(id)}
        >
          <Card.Body>{name}</Card.Body>
        </Card>
      </Col>
    </>
  );
}
