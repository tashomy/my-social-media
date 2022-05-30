import React from "react";
import { Col } from "react-bootstrap";
const Form = () => {
  const user = true;
  return (
    <Col xs={12} md={4} className="form-wrap">
      {user ? (
        <form className="create-form">
          <h3>Creating a post</h3>
          <section className="form-section">
            <label htmlFor="creator">Creator</label>
            <input type="text" id="creator" name="creator" />
          </section>
          <section className="form-section">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </section>
          <section className="form-section">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </section>
          <section className="form-section">
            <label htmlFor="tags">Tags</label>
            <textarea id="tags" name="tags" />
          </section>
          <section className="form-section">
            <input type="file" className="" />
          </section>
          <button className="basic-btn button-5">Submit</button>
          <button className="basic-btn button-5">Clear</button>
        </form>
      ) : (
        <p className="create-form">Please sign in to create a post.</p>
      )}
    </Col>
  );
};

export default Form;
