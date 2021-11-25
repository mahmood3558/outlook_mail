import { useContext } from "react";
import axios from "axios";
import context from "../context/context";

// const Context = useContext(context);
// console.log(Context.token);
const token =
  "EwCAA8l6BAAUwihrrCrmQ4wuIJX5mbj7rQla6TUAAc63Nbeak5YMV317HKxnh7ZZY21TdhWHlErMcrXgXW3uMQzJeDvCLWvTm6EcWxKPW+g/5CMQuDdlIB6TeZj6DpHvMx1MfAzuYzmKSe/Ef/dn4bHFFYkFyfZBO7gFJFa+RfEM4It4TIXR8uUfOH3CTEt8p8Xp685vsFw9azHSXfQ1S6L8YC7mmBr3FocONVeCOWPQo34Btzpn7OAZwq/bXoR+SDc7dSiD1sJwP4ODaEMTIcuJpe5ciYfECTKnm3gWLyCBTOiF5zjiVgZ4pK6DqZ7lQA+I426dIiOWQUXIaMJ2aAfiFeeVtSHrBMQbDXUlUxQ+DZLYLaKj473Qdgr8SE4DZgAACFPs8rQmFS7VUAJcHZvOlMplbOi8glGHmmRhgzqLCvMGtU4xXFVkS5OIjpqW+d4Hem+6wNHw1Slx73gT2IGwW16sVnN++wkUrVtilJcHVT3UI9Rq4C/fxPX1MBHIq5kEq+oJgrhXwMrRL/WqbUIQK9IrPcV1IIoQKhEFhkc8yDMOtTW0pM6/dyuRejQW4CFJM0+ZuWiIq0oad+WX/SkNQzgdRQWZuISNWbow00Z0DvMAUdy+IZu7ZJTZgQZ2lNGREJ9d3sj4sIpvwx2po6C+aDbuhQDUbY4aKT7vC1v5ufP8VP5maQ/iRXdQJONIIr2GRvwDEuGcjCS4MM5VHZhRM1PDN8hv0gEXaJZ7ywr/dGKnyXbUsln56fVN5V60Ut5JjhEp5ysc6Qc8nl02gHr82Lv0CUFdO3E9MbwpT19Yi67DOrLqii+CNx0f7gVhnRyqbVIl54mYk7+lIOWc8yheS++E/8rRU7adXrp1KLHrmrUfAxbt6cGVtSLLL5iZKqasoYyKLGkHCV1i2p8vK7qopqEGkkCGPXAsrF1rJtQK2wB2tuiq83Fdr4UJzwPsZGRVI75Y8m9BvJA28wS74qfFtNg50hZKfoW+RmOvQk6YpPjUBbIO686wztzil7xnsJ0+583yzcF5Os7+6Hm8TnkMaMYxCsiRzqFPpAVRvQe7ZuzIzt5+qiWEiUdfQeZecLMjv6TfACAPpZt9dUjF28pclm9U+BAHxagrhtzuBPYz6SqTQTIjaOlZCRCAbw1lQ3seSTUNKVNYclOopPGkNlmfuOMt5QfQKGY67dtjnAI=";

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
