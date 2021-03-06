import React, { useState } from "react";
import { Card, CardColumns, CardGroup, Col, Row } from "react-bootstrap";
import BookDetail from "../BookDetail/BookDetail";
import Book from "../Book/Book";

import { useQuery } from "@apollo/client";
import { getBooks } from "../../graphql-client/queries";

const BookList = () => {
  const [bookSelectedId, setBookSelectedId] = useState(null);

  const { loading, error, data } = useQuery(getBooks);
  if (loading) return <p className="text-white">Đang Tìm Sách....</p>;
  if (error)
    return (
      <p className="text-white">Có lỗi gì đó !! Không thể hiện thị Sách</p>
    );
  // console.log(data);
  const { books } = data;
  return (
    <>
      <Row>
        <Col xs={12} md={8}>
          {/* <h1 className="text-center text-info mb-3">Content</h1> */}
          <Row>
            {books.map((book) => (
              <Book
                key={book.id}
                name={book.name}
                id={book.id}
                setBookSelectedId={setBookSelectedId}
              />
            ))}
          </Row>
        </Col>

        <Col xs={12} md={4}>
          <BookDetail
            bookSelectedId={bookSelectedId}
            setBookSelectedId={setBookSelectedId}
          />
        </Col>
      </Row>
    </>
  );
};

export default React.memo(BookList);
