import React from "react";
import { Col, Row } from "react-bootstrap";
import Post from "./Post";

const Posts = () => {
  return (
    <Col xs={12} md={8}>
      <Row>
        <Post />
        <Post />
        <Post />
      </Row>
    </Col>
  );
};

export default Posts;
