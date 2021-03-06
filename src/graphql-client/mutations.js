import { gql } from "@apollo/client";

const createBook = gql`
  mutation CreateBookMutation($name: String, $genre: String, $authorId: ID!) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
      genre
    }
  }
`;

const createAuthor = gql`
  mutation CreateAuthorMutation($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;

export { createBook, createAuthor };
