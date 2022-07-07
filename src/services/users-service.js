import axios from "axios";

const apiBaseUrl = `${process.env.REACT_APP_API_URL}/users`;

const createAccount = account => {
  return axios.post(apiBaseUrl, account);
};

const doLogIn = account => {
  return axios.post(`${apiBaseUrl}/login`, account);
};

const userService = { createAccount, doLogIn };

export default userService;
