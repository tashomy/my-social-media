import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, getPosts, likePost } from "../../../actions/posts";
import moment from "moment";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsHandThumbsUp } from "react-icons/bs";

const CardComponent = ({ post, setCurrId }) => {
  const dispatch = useDispatch();
  return (
    <div className="card-component">
      <img src={post.selectedFile} alt="" />
      <div className="card-content">
        <h2 className="card-title">{post.title}</h2>
        <p id="post-message" className="card-body">
          {post.message}
        </p>
        <p id="post-creator" className="card-body">
          {post.creator}
        </p>
        <p id="post-moment" className="card-body">
          {moment(post.createdAt).fromNow()}
        </p>
        <section>
          <button
            id="like-btn"
            className="transparent-btn hover"
            onClick={() => dispatch(likePost(post._id))}
          >
            <BsHandThumbsUp />
            &nbsp; Like {post.likeCount}
          </button>
          <div>
            <button
              className="transparent-btn hover"
              onClick={() => {
                setCurrId(post._id);
              }}
            >
              <AiOutlineEdit />
              &nbsp; Edit
            </button>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardComponent;
