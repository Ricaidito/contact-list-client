import axios from "axios";

const apiBaseUrl = `${process.env.REACT_APP_API_URL}/contacts`;

const getAllContacts = () => {
  return axios.get(apiBaseUrl);
};

const getContactById = id => {
  return axios.get(`${apiBaseUrl}/${id}`);
};

const getContactsForUser = userId => {
  return axios.get(`${apiBaseUrl}/get-contacts/${userId}`);
};

const addAContact = contact => {
  return axios.post(apiBaseUrl, contact);
};

const updateContactById = (id, contact) => {
  return axios.put(`${apiBaseUrl}/${id}`, contact);
};

const deleteContactById = id => {
  return axios.delete(`${apiBaseUrl}/${id}`);
};

const deleteAllContactsForOwner = userId => {
  return axios.delete(`${apiBaseUrl}/delete-contacts/${userId}`);
};

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
