import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getAuthors } from "../../graphql-client/queries";
import { createAuthor } from "../../graphql-client/mutations";

const FormAuthor = () => {
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    age: "",
  });
  //graphql operations

  const [addAuthor, dataMutation] = useMutation(createAuthor);

  // console.log(dataMutation);

  const onInputChangeAuthor = (event) => {
    setNewAuthor({ ...newAuthor, [event.target.name]: event.target.value });
  };

  const handleSubmitAuthor = (e) => {
    e.preventDefault();
    console.log(newAuthor);
    addAuthor({
      variables: {
        name: newAuthor.name,
        age: Number(newAuthor.age),
      },
      refetchQueries: [{ query: getAuthors }],
    });
    setNewAuthor({
      name: "",
      age: "",
    });
  };
  return (
    <>
      <Form onSubmit={handleSubmitAuthor}>
        <Form.Group controlId="formBasicAuthor">
          <Form.Label className="text-white">Tên Tác Giả</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên tác giả"
            name="name"
            value={newAuthor.name}
            onChange={onInputChangeAuthor}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicAge">
          <Form.Label className="text-white">Tuổi</Form.Label>
          <Form.Control
            type="number"
            placeholder="Nhập tuổi"
            value={newAuthor.age}
            name="age"
            required
            onChange={onInputChangeAuthor}
          />
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
    </>
  );
};

export default FormAuthor;
