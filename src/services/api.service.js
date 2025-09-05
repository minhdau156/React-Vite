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

const updateUserAPI = (id, fullName, phone) => {
  const URL_BACKEND = "/users";
  const data = {
    id: id,
    fullName: fullName,
    phone: phone,
  };
  return axios.put(URL_BACKEND, data);
};

const fetchAllUserAPI = () => {
  const URL_BACKEND = "/users";
  return axios.get(URL_BACKEND);
};

const fetchUserAPI = (id) => {
  const URL_BACKEND = `/users/${id}`;
  return axios.get(URL_BACKEND);
};

const deleteUserAPI = (id) => {
  const URL_BACKEND = `/users/${id}`;
  return axios.delete(URL_BACKEND);
};

export { createUserAPI, updateUserAPI, fetchAllUserAPI, fetchUserAPI, deleteUserAPI };
