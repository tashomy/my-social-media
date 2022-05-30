import React from "react";
import { Col, Card } from "react-bootstrap";
import { BsHandThumbsUp } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import icon from "../../../images/logo.png";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, getPosts, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrId }) => {
  const dispatch = useDispatch();
  const user = true;

  return (
    <Col xs={12} md={6}>
      <Card>
        <Card.Img variant="top" src={post.selectedFile} />
        <Card.Body>
          <p>{moment(post.createdAt).fromNow()}</p>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle>{post.creator}</Card.Subtitle>
          <Card.Text>{post.message}</Card.Text>
          <section>
            {user && (
              <button
                className="transparent-btn hover"
                onClick={() => {
                  setCurrId(post._id);
                }}
              >
                <AiOutlineEdit />
                &nbsp; Edit
              </button>
            )}
            <p className="tags">{post.tags.map((tag) => `#${tag} `)}</p>
          </section>
          <section>
            <button
              type="button"
              className="transparent-btn hover"
              onClick={() => {
                dispatch(deletePost(post._id));
                dispatch(getPosts());
              }}
            >
              <AiOutlineDelete />
              &nbsp; Delete
            </button>
            {user ? (
              <button
                className="transparent-btn hover"
                onClick={() => dispatch(likePost(post._id))}
              >
                <BsHandThumbsUp />
                &nbsp; Like {post.likeCount}
              </button>
            ) : (
              <button disabled className="transparent-btn crossed">
                <BsHandThumbsUp />
                &nbsp; Like {post.likeCount}
              </button>
            )}
          </section>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
