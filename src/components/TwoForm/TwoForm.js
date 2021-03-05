import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const TwoForm = () => {
  return (
    <>
      <Row className="mb-5">
        <Col xs="12" md="6">
          <Form>
            <Form.Group controlId="formBasicNameBook">
              <Form.Label className="text-white">Tên Sách</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên sách" />
            </Form.Group>

            <Form.Group controlId="formBasicGenre">
              <Form.Label className="text-white">Thể Loại</Form.Label>
              <Form.Control type="text" placeholder="Nhập thể loại" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label className="text-white">Tác Giả</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <div className="d-flex">
              <Button variant="primary" type="submit" className="ml-auto">
                Thêm Sách
              </Button>
            </div>
          </Form>
        </Col>
        <Col xs="12" md="6">
          <Form>
            <Form.Group controlId="formBasicAuthor">
              <Form.Label className="text-white">Tên Tác Giả</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên sách" />
            </Form.Group>

            <Form.Group controlId="formBasicAge">
              <Form.Label className="text-white">Tuổi</Form.Label>
              <Form.Control type="text" placeholder="Nhập tuổi" />
            </Form.Group>

            <Form.Group style={{ opacity: 0, pointerEvents: "none" }}>
              <Form.Label>Not Thing</Form.Label>
              <Form.Control type="text" placeholder="Not Thing" />
            </Form.Group>
            <div className="d-flex">
              <Button variant="primary" type="submit" className="ml-auto">
                Thêm Tác Giả
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default TwoForm;
