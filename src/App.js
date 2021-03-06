import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import TwoForm from "./components/TwoForm/TwoForm";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Container className="mt-3">
          <Header />
          <TwoForm />
          <BookList />
        </Container>
      </ApolloProvider>
    </>
  );
}

export default App;
