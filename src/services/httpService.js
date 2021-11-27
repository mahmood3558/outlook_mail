import { useContext } from "react";
import axios from "axios";
import context from "../context/context";

const token = localStorage.getItem("token");

axios.defaults.headers.get["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.get["content-type"] = `image/jpeg`;
axios.defaults.headers.delete["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.put["Authorization"] = `Bearer ${token}`;

// ['Accept'] = "application/json"["Content-Type"]="Content-Type"

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    console.log(error);
  }

  return Promise.reject(error);
});

const axiosRequest = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default axiosRequest;
