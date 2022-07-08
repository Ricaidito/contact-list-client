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

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      <h1>Contact Agenda</h1>
      <AddContact userId={userId} getContacts={getContacts} />
      <ContactsList
        contacts={contacts}
        getContacts={getContacts}
        userId={userId}
      />
    </div>
  );
};

export default Agenda;
