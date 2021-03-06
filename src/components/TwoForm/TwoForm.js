import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getAuthors, getBooks } from "../../graphql-client/queries";
import { createBook, createAuthor } from "../../graphql-client/mutations";
import FormBook from "./FormBook";
import FormAuthor from "./FormAuthor";

const TwoForm = () => {
  return (
    <>
      <Row className="mb-5">
        <Col xs="12" md="6">
          <FormBook />
        </Col>
        <Col xs="12" md="6">
          <FormAuthor />
        </Col>
      </Row>
    </>
  );
};

export default TwoForm;
