import { useQuery } from "@apollo/client";
import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { getBookById } from "../../graphql-client/queries";

export default function BookDetail(props) {
  const { bookSelectedId, setBookSelectedId } = props;
  // console.log(bookSelectedId);

  const { loading, error, data } = useQuery(getBookById, {
    variables: {
      id: bookSelectedId,
    },
    skip: bookSelectedId === null,
  });
  if (loading)
    return (
      <Card
        border="light"
        text="white"
        bg="light"
        className="shadow"
        style={{ minHeight: "300px" }}
      >
        <Spinner
          animation="border"
          variant="dark"
          role="status"
          className="mx-auto mt-3"
        >
          <span className="sr-only">
            <p> Chi tiết về Sách đang chạy.....</p>;
          </span>
        </Spinner>
      </Card>
    );

  if (error)
    return (
      <Card
        border="light"
        bg="light"
        className="shadow"
        style={{ minHeight: "300px" }}
      >
        <span className=" mx-auto mt-3">
          <p>Hiện tại ko xem dc chi tiết sách </p>
        </span>
      </Card>
    );
  // console.log("dâdadadad");
  // console.log(data.book);
  const book = data?.book;

  return (
    <>
      {/* <h1>BookDetail</h1> */}
      <Card border="light" text="white" bg="light" className="shadow">
        <Card.Body>
          <Card.Title className="text-dark">Tên : {book?.name}</Card.Title>
          <Card.Subtitle className="mb-3 text-dark">
            Thể loại: {book?.genre}
          </Card.Subtitle>
          <Card.Title className="text-dark">
            Tác giả: {book?.author?.name}
          </Card.Title>
          <Card.Text className="text-dark">Một số sách cùng tác giả:</Card.Text>
          <ul>
            {book?.author?.books?.map((book) => (
              <li
                className="text-dark bookMenu"
                key={book.id}
                onClick={() => setBookSelectedId(book.id)}
              >
                {book?.name}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
}
