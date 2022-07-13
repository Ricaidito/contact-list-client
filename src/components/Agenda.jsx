import { useEffect, useState, useCallback } from "react";
import { Button } from "react-bootstrap";
import ContactsList from "../components/ContactsList";
import AddContact from "../components/AddContact";
import contactsService from "../services/contacts-service";
import UpdateContact from "./UpdateContact";

const Agenda = ({ userId, logOut }) => {
  const [contacts, setContacts] = useState([]);

  const getContacts = useCallback(
    () =>
      contactsService
        .getContactsForUser(userId)
        .then(contacts => setContacts(contacts.data)),
    [userId]
  );

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  return (
    <div className="m-2">
      <h1 className="text-center">Contact Agenda</h1>
      <Button variant="danger" onClick={() => logOut()}>
        Logout
      </Button>
      <hr />
      <div className="row">
        <AddContact userId={userId} getContacts={getContacts} />
        <UpdateContact userId={userId} getContacts={getContacts} />
      </div>
      <ContactsList
        contacts={contacts}
        getContacts={getContacts}
        userId={userId}
      />
    </div>
  );
};

export default Agenda;
