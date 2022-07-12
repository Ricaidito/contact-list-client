import { Form, Button } from "react-bootstrap";
import contactsService from "../services/contacts-service";
import { useState } from "react";

const UpdateContact = ({ userId, getContacts }) => {
  const [contactToModify, setContact] = useState({
    _id: "",
    userId: userId,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const modifyContact = e => {
    e.preventDefault();
    clearFields();
    contactsService
      .updateContactById(contactToModify._id, contactToModify)
      .then(contact => {
        console.log(contact.data);
        getContacts();
      });
  };

  const clearFields = () => {
    setContact({
      ...contactToModify,
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
  };
  return (
    <div className="m-2 col" style={{ width: "25%" }}>
      <h2>Update Contact</h2>
      <Form onSubmit={modifyContact}>
        <Form.Group className="mb-3">
          <Form.Label>Contact ID:</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Contact ID"
            onChange={e =>
              setContact({ ...contactToModify, _id: e.target.value })
            }
            value={contactToModify._id}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter First Name"
            onChange={e =>
              setContact({ ...contactToModify, firstName: e.target.value })
            }
            value={contactToModify.firstName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter Last Name"
            onChange={e =>
              setContact({ ...contactToModify, lastName: e.target.value })
            }
            value={contactToModify.lastName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Enter email"
            onChange={e =>
              setContact({ ...contactToModify, email: e.target.value })
            }
            value={contactToModify.email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            required
            placeholder="Enter Phone Number"
            onChange={e =>
              setContact({ ...contactToModify, phoneNumber: e.target.value })
            }
            value={contactToModify.phoneNumber}
          />
        </Form.Group>
        <Button variant="outline-warning" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateContact;
