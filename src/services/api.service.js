import axios from "./axios.customize";

const createUserAPI = (fullName, password, email, phone) => {
  const URL_BACKEND = "/users";
  const data = {
    fullName: fullName,
    password: password,
    email: email,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data);
};

const updateUserAPI = () => {};

const fetchAllUserAPI = () => {
  const URL_BACKEND = "/users";
  return axios.get(URL_BACKEND);
}

export { createUserAPI, updateUserAPI, fetchAllUserAPI };
