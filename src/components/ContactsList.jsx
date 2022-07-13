import contactsService from "../services/contacts-service";
import { Button, Alert } from "react-bootstrap";
import Contact from "./Contact";

const ContactsList = ({ contacts, getContacts, userId }) => {
  const deleteContact = id =>
    contactsService.deleteContactById(id).then(() => getContacts());

  const sendAlert = () => alert("Message successfully send!");

  const wipeContacts = () => {
    contactsService.deleteAllContactsForOwner(userId).then(() => getContacts());
  };

  const contactsList = contacts.length ? (
    contacts.map((c, index) => (
      <Contact
        key={c._id}
        contact={c}
        number={index + 1}
        deleteContact={deleteContact}
        sendAlert={sendAlert}
      />
    ))
  ) : (
    <Alert variant="secondary" style={{ width: "25%" }}>
      No contacts found...
    </Alert>
  );

  return (
    <div>
      <h2>List of contacts</h2>
      <div className="row">{contactsList}</div>
      <Button className="m-3" variant="dark" onClick={() => wipeContacts()}>
        Delete All
      </Button>
    </div>
  );
};

export default ContactsList;
