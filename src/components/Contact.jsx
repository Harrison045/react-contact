import Card from "react-bootstrap/Card";
import React from "react";
import { Col, Button } from "react-bootstrap";

const Contact = (props) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Codetrain User
          </Card.Subtitle>
          <Card.Title>{props.userInfo.name}</Card.Title>
          <Card.Text>
            <p>Phone Number:{props.userInfo.phonenumber}</p>
            <p>Location: {props.userInfo.location}</p>
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">
            <Button variant="danger" size="sm">
              Delete
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Contact;
