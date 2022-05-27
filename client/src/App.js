import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Row } from "react-bootstrap";
import Form from "./components/Form";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <section className="posts-creation">
        <Row>
          <Posts />
          <Form />
        </Row>
      </section>
    </div>
  );
};

export default App;
