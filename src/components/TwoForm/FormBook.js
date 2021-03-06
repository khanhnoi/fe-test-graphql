import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getAuthors, getBooks } from "../../graphql-client/queries";
import { createBook, createAuthor } from "../../graphql-client/mutations";

const FormBook = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  //graphql operations
  const { loading, error, data } = useQuery(getAuthors);
  const authors = data?.authors;

  const [addAuthor, dataMutation2] = useMutation(createAuthor);

  const [addBook, dataMutation] = useMutation(createBook);
  // console.log(dataMutation);

  const onInputChangeBook = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmitBook = (e) => {
    e.preventDefault();
    console.log(newBook);
    addBook({
      variables: {
        name: newBook.name,
        genre: newBook.genre,
        authorId: newBook.authorId,
      },
      refetchQueries: [{ query: getBooks }],
    });
    setNewBook({
      name: "",
      genre: "",
      authorId: "",
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmitBook}>
        <Form.Group controlId="formBasicNameBook">
          <Form.Label className="text-white">Tên Sách</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Nhập tên sách"
            value={newBook.name}
            onChange={onInputChangeBook}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicGenre">
          <Form.Label className="text-white">Thể Loại</Form.Label>
          <Form.Control
            name="genre"
            type="text"
            placeholder="Nhập thể loại"
            value={newBook.genre}
            onChange={onInputChangeBook}
            required
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label className="text-white">Tác Giả</Form.Label>
          <Form.Control
            as="select"
            name="authorId"
            onChange={onInputChangeBook}
            required
            value={newBook.authorId}
          >
            <option disabled value="">
              Chọn tác giả
            </option>
            {authors?.map((author) => (
              <option
                key={author.id}
                value={newBook.authorId}
                value={author.id}
              >
                {author.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <div className="d-flex">
          <Button
            variant="primary"
            type="submit"
            className="ml-auto"
            // onClick={handleSubmitBook}
          >
            Thêm Sách
          </Button>
        </div>
      </Form>
    </>
  );
};

export default FormBook;
