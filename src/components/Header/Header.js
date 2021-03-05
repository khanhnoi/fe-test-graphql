import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Row>
        <Col>
          <h1 className="text-center text-white mb-3 text-uppercase">
            Sách Hay
          </h1>
        </Col>
      </Row>
    </>
  );
}
