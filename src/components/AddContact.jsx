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
    contactsService.addAContact(newContact).then(contact => {
      console.log(contact.data);
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
      <h2>Add Contact</h2>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter First Name"
            onChange={e =>
              setNewContact({ ...newContact, firstName: e.target.value })
            }
            value={newContact.firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Last Name"
            onChange={e =>
              setNewContact({ ...newContact, lastName: e.target.value })
            }
            value={newContact.lastName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter email"
            onChange={e =>
              setNewContact({ ...newContact, email: e.target.value })
            }
            value={newContact.email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            required
            placeholder="Enter Phone Number"
            onChange={e =>
              setNewContact({ ...newContact, phoneNumber: e.target.value })
            }
            value={newContact.phoneNumber}
          />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
