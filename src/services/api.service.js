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

const fetchAllUserAPI = (currentPage, pageSize) => {
  const URL_BACKEND = `/users?page=${currentPage}&size=${pageSize}`;
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

const handleUploadFile = (file) => {
  const URL_BACKEND = `/upload`;
  let config = {
    header: {
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  return axios.post(URL_BACKEND, bodyFormData, config);
};

const updateUserAvatarAPI = (id, avatar) => {
  const URL_BACKEND = "/users";
  const data = {
    id: id,
    avatar: avatar,
  };
  return axios.put(URL_BACKEND, data);
};

const registerUserAPI = (fullName, password, email, phone) => {
  const URL_BACKEND = "/users/register";
  const data = {
    fullName: fullName,
    password: password,
    email: email,
    phone: phone,
  };
  return axios.post(URL_BACKEND, data);
};

const loginUserAPI = (email, password) => {
  const URL_BACKEND = "/auth/login";
  const data = {
    email: email,
    password: password,
  };
  return axios.post(URL_BACKEND, data);
};

export {
  createUserAPI,
  updateUserAPI,
  fetchAllUserAPI,
  fetchUserAPI,
  deleteUserAPI,
  handleUploadFile,
  updateUserAvatarAPI,
  registerUserAPI,
  loginUserAPI,
};
