import contactsService from "../services/contacts-service";

const ContactsList = ({ contacts, getContacts }) => {
  const getContactList = () => {
    return contacts.length ? (
      contacts.map(c => (
        <div key={c._id}>
          <strong>
            <p>
              {c.firstName} {c.lastName}
            </p>
          </strong>
          <p>Email: {c.email}</p>
          <p>Phone number: {c.phoneNumber}</p>
          <button>Update</button>
          <button onClick={() => deleteContact(c._id)}>Delete</button>
        </div>
      ))
    ) : (
      <p>No contacts found!</p>
    );
  };

  const deleteContact = id => {
    contactsService.deleteContactById(id).then(res => {
      console.log(res);
      getContacts();
    });
  };

  return (
    <div>
      <h2>List of contacts</h2>
      {getContactList()}
    </div>
  );
};

export default ContactsList;
