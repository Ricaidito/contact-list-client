import axios from "axios";

const apiBaseUrl = `${process.env.REACT_APP_API_URL}/users`;

const createAccount = account => axios.post(apiBaseUrl, account);

const doLogIn = account => axios.post(`${apiBaseUrl}/login`, account);

const userService = { createAccount, doLogIn };

export default userService;
