import { useState } from "react";
import contactsService from "../services/contacts-service";

const AddContact = ({ userId, getContacts }) => {
  const [newContact, setNewContact] = useState({
    userId: userId,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const addContact = () => {
    contactsService.addAContact(newContact).then(contact => {
      console.log(contact.data);
      getContacts();
    });
  };

  return (
    <div>
      <h2>Add a contact</h2>
      <div>
        <label>First name: </label>
        <input
          type="text"
          onChange={e =>
            setNewContact({ ...newContact, firstName: e.target.value })
          }
        />
      </div>
      <div>
        <label>Last name: </label>
        <input
          type="text"
          onChange={e =>
            setNewContact({ ...newContact, lastName: e.target.value })
          }
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          onChange={e =>
            setNewContact({ ...newContact, email: e.target.value })
          }
        />
      </div>
      <div>
        <label>Phone number: </label>
        <input
          type="text"
          onChange={e =>
            setNewContact({ ...newContact, phoneNumber: e.target.value })
          }
        />
      </div>
      <button onClick={() => addContact()}>Add</button>
    </div>
  );
};

export default AddContact;
