import axios from "axios";

const apiBaseUrl = `${process.env.REACT_APP_API_URL}/contacts`;

const getAllContacts = () => axios.get(apiBaseUrl);

const getContactById = id => axios.get(`${apiBaseUrl}/${id}`);

const getContactsForUser = userId =>
  axios.get(`${apiBaseUrl}/get-contacts/${userId}`);

const addAContact = contact => axios.post(apiBaseUrl, contact);

const updateContactById = (id, contact) =>
  axios.put(`${apiBaseUrl}/${id}`, contact);

const deleteContactById = id => axios.delete(`${apiBaseUrl}/${id}`);

const deleteAllContactsForOwner = userId =>
  axios.delete(`${apiBaseUrl}/delete-contacts/${userId}`);

const contactsService = {
  getAllContacts,
  getContactById,
  getContactsForUser,
  addAContact,
  updateContactById,
  deleteContactById,
  deleteAllContactsForOwner,
};

export default contactsService;
