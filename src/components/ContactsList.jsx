import contactsService from "../services/contacts-service";
import { Card, ListGroup, Button, Alert, Form } from "react-bootstrap";
import "../styles/ContactsList.css";

const ContactsList = ({ contacts, getContacts, userId }) => {
  const getContactList = contacts.length ? (
    contacts.map((c, index) => (
      <Card
        key={c._id}
        style={{ width: "19rem" }}
        className="m-2 col-xs-1"
        id="contact"
      >
        <Card.Body>
          <Card.Title className="text-center fw-bold">
            {index + 1}. {c.firstName} {c.lastName}
          </Card.Title>
          <ListGroup id="card-fields">
            <ListGroup.Item>
              <strong>Contact ID: </strong> {c._id}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Phone Number: </strong>
              {c.phoneNumber}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Email Address: </strong> {c.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Message:</strong>
              <Form.Control type="text" required className="mb-1" />
              <Button variant="success" onClick={() => sendAlert()}>
                Send
              </Button>
            </ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-evenly mt-2">
            <Button variant="danger" onClick={() => deleteContact(c._id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    ))
  ) : (
    <Alert variant="warning" style={{ width: "25%" }}>
      No contacts found!
    </Alert>
  );

  const deleteContact = id => {
    contactsService.deleteContactById(id).then(() => {
      getContacts();
    });
  };

  const sendAlert = () => {
    alert("Message succesfully send!!");
  };

  const wipeContacts = () => {
    contactsService.deleteAllContactsForOwner(userId).then(() => getContacts());
  };

  return (
    <div>
      <h2>List of contacts</h2>
      <div className="row">{getContactList}</div>
      <Button variant="danger m-3" onClick={() => wipeContacts()}>
        Delete All
      </Button>
    </div>
  );
};

export default ContactsList;
