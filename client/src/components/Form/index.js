import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currId, setCurrId }) => {
  const dispatch = useDispatch();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currId ? state.posts.find((p) => p._id === currId) : null
  );

  const user = true;

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currId) {
      dispatch(updatePost(currId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Col xs={12} md={4} className="form-wrap">
      <form className="create-form" onSubmit={handleSubmit}>
        <h3>{currId ? "Editing" : "Creating"} a post</h3>
        <section className="form-section">
          <label htmlFor="creator">Creator</label>
          <input
            type="text"
            id="creator"
            name="creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </section>
        <section className="form-section">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </section>
        <section className="form-section">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </section>
        <section className="form-section">
          <label htmlFor="tags">Tags</label>
          <textarea
            id="tags"
            name="tags"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
        </section>
        <section className="form-section">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </section>
        <button className="basic-btn button-5" type="submit">
          Submit
        </button>
        <button type="button" className="basic-btn button-5" onClick={clear}>
          Clear form
        </button>
      </form>

      {/* <p className="create-form">Please sign in to create a post.</p> */}
    </Col>
  );
};

export default Form;
