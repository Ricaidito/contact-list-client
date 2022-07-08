import contactsService from "../services/contacts-service";
import { Card, ListGroup, Button, Alert } from "react-bootstrap";
import UpdateContact from "./UpdateContact";
import "../styles/ContactsList.css";
import { useState } from "react";

const ContactsList = ({ contacts, getContacts, userId }) => {
  const [show, setShow] = useState(false);

  let selectedContact = "";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getContactList = contacts.length ? (
    contacts.map((c, index) => (
      <Card
        key={c._id}
        style={{ width: "18rem" }}
        className="m-2 col-xs-1"
        id="item"
      >
        <Card.Body>
          <Card.Title className="text-center fw-bold">
            {index + 1}. {c.firstName} {c.lastName}
          </Card.Title>
          <ListGroup>
            <ListGroup.Item>
              <strong>Phone Number: </strong>
              {c.phoneNumber}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Email Address: </strong> {c.email}
            </ListGroup.Item>
          </ListGroup>
          <div className="d-flex justify-content-evenly mt-2">
            <Button
              variant="outline-warning"
              onClick={() => updateContact(c._id)}
            >
              Update
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => deleteContact(c._id)}
            >
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
    contactsService.deleteContactById(id).then(res => {
      console.log(res);
      getContacts();
    });
  };

  const wipeContacts = () => {
    contactsService.deleteAllContactsForOwner(userId).then(() => getContacts());
  };

  const updateContact = id => {
    selectedContact = id;
    handleShow();
  };

  return (
    <div>
      <h2>List of contacts</h2>
      <div className="row">{getContactList}</div>
      <Button variant="outline-danger" onClick={() => wipeContacts()}>
        Delete All
      </Button>

      <UpdateContact
        show={show}
        handleClose={handleClose}
        contactId={selectedContact}
      />
    </div>
  );
};

export default ContactsList;
