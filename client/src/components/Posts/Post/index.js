import React from "react";
import { Col, Card } from "react-bootstrap";
import { BsHandThumbsUp } from "react-icons/bs";
import icon from "../../../images/logo.png";

const Post = () => {
  const user = true;
  return (
    <Col xs={12} md={6}>
      <Card>
        <Card.Img variant="top" src={icon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle>Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <section>
            {user && <button className="small-btn button-5">Edit</button>}
            <p className="tags">tags</p>
          </section>
          <section>
            {user ? (
              <button className="transparent-btn hover">
                <BsHandThumbsUp />
                &nbsp; Like 6
              </button>
            ) : (
              <button disabled className="transparent-btn crossed">
                <BsHandThumbsUp />
                &nbsp; Like 6
              </button>
            )}
          </section>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
