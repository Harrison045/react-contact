import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [
        {
          name: "Harrison",
          phonenumber: "0504050021",
          location: "Fadama",
          id: "hdbjhsijbdb93839uhbu3",
        },
        {
          name: "Prince",
          phonenumber: "0592309059",
          location: "Darkuman",
          id: "dhddhddbd3636362ijjksb",
        },
      ],
    };
  }
  addNewUser = (user) => {
    this.setState({
      contact: [...this.state.contact, user],
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md="4">
              <ContactsForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <Contacts
                userData={this.state.contact}
                deleteUser={this.deleteUser}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
