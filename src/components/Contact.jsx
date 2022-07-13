import { Card, ListGroup, Button, Form } from "react-bootstrap";
import "../styles/Contact.css";

const Contact = ({ contact, number, deleteContact, sendAlert }) => {
  return (
    <>
      <Card style={{ width: "19rem" }} className="m-2 col-xs-1" id="contact">
        <Card.Body>
          <Card.Title className="text-center fw-bold">
            {number}. {contact.firstName} {contact.lastName}
          </Card.Title>
          <ListGroup id="card-fields">
            <ListGroup.Item>
              <strong>Contact ID: </strong> {contact._id}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Phone Number: </strong>
              {contact.phoneNumber}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Email Address: </strong> {contact.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Message:</strong>
              <Form.Control as="textarea" placeholder="Message..." />
            </ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-evenly mt-2">
            <Button variant="danger" onClick={() => deleteContact(contact._id)}>
              Delete
            </Button>
            <Button variant="primary" onClick={() => sendAlert()}>
              Send a message
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Contact;
