import { useEffect, useState } from "react";
import ContactsList from "../components/ContactsList";
import AddContact from "../components/AddContact";
import contactsService from "../services/contacts-service";

const Agenda = () => {
  const userId = "62c76a40ffcacc1914a8cbbb";
  const [contacts, setContacts] = useState([]);

  const getContacts = () => {
    contactsService
      .getContactsForUser(userId)
      .then(contacts => setContacts(contacts.data));
  };

  const wipeContacts = () => {
    contactsService.deleteAllContactsForOwner(userId).then(() => getContacts());
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <h1>Contact Agenda</h1>
      <ContactsList contacts={contacts} getContacts={getContacts} />
      <AddContact userId={userId} getContacts={getContacts} />
      <hr />
      <button onClick={() => wipeContacts()}>Delete all</button>
    </div>
  );
};

export default Agenda;
