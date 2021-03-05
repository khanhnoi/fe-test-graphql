import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header/Header";
import BookList from "./components/BookList/BookList";
import TwoForm from "./components/TwoForm/TwoForm";

function App() {
  return (
    <>
      <Container className="mt-3">
        <Header />
        <TwoForm />
        <BookList />
      </Container>
    </>
  );
}

export default App;
