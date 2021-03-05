import React from "react";
import { Card, CardColumns, CardGroup, Col, Row } from "react-bootstrap";
import BookDetail from "../BookDetail/BookDetail";
import Book from "../Book/Book";

export default function BookList() {
  return (
    <>
      <Row>
        <Col xs={12} md={8}>
          {/* <h1 className="text-center text-info mb-3">Content</h1> */}
          <Row>
            <Book />
            <Book />
            <Book />
            <Book />
          </Row>
        </Col>

        <Col xs={6} md={4}>
          <BookDetail />
        </Col>
      </Row>
    </>
  );
}
