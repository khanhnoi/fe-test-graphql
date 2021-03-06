import { gql } from "@apollo/client";

const getBooks = gql`
  query getBooksQuery {
    books {
      id
      name
    }
  }
`;

const getBookById = gql`
  query getBookQuery($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
        books {
          id
          name
        }
      }
    }
  }
`;

const getAuthors = gql`
  query getAuthorsQuery {
    authors {
      id
      name
    }
  }
`;

export { getBooks, getBookById, getAuthors };
