import React from "react";
import { Col, Row } from "react-bootstrap";
import Post from "./Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <Col xs={12} md={8} className="align-loader">
      <CircularProgress color="primary" size={70} />
    </Col>
  ) : (
    <Col xs={12} md={7}>
      <Row>
        {posts.map((post) => (
          <Post key={post._id} post={post} setCurrId={setCurrId} />
        ))}
      </Row>
    </Col>
  );
};

export default Posts;
