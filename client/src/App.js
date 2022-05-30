import React, { useEffect, useState } from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Row } from "react-bootstrap";
import Form from "./components/Form";
import Posts from "./components/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currId, setCurrId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    console.log(currId);
  }, [currId, dispatch]);
  return (
    <div className="main-container">
      <Navbar />
      <section className="posts-creation">
        <Row>
          <Posts setCurrId={setCurrId} />
          <Form currId={currId} setCurrId={setCurrId} />
        </Row>
      </section>
    </div>
  );
};

export default App;
