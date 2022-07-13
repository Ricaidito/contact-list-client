import { useState } from "react";
import contactsService from "../services/contacts-service";
import { Form, Button } from "react-bootstrap";

const AddContact = ({ userId, getContacts }) => {
  const [newContact, setNewContact] = useState({
    userId: userId,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const addContact = e => {
    e.preventDefault();
    clearFields();
    contactsService.addAContact(newContact).then(() => {
      getContacts();
    });
  };

  const clearFields = () => {
    setNewContact({
      ...newContact,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  };

  return (
    <div className="m-2 col" style={{ width: "25%" }}>
      <h2>Add contact</h2>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3">
          <Form.Label>First name:</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="First name..."
            onChange={e =>
              setNewContact({ ...newContact, firstName: e.target.value })
            }
            value={newContact.firstName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name:</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Last name..."
            onChange={e =>
              setNewContact({ ...newContact, lastName: e.target.value })
            }
            value={newContact.lastName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Email..."
            onChange={e =>
              setNewContact({ ...newContact, email: e.target.value })
            }
            value={newContact.email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone number:</Form.Label>
          <Form.Control
            type="tel"
            required
            placeholder="Phone..."
            onChange={e =>
              setNewContact({ ...newContact, phoneNumber: e.target.value })
            }
            value={newContact.phoneNumber}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
