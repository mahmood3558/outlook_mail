import { useContext } from "react";
import axios from "axios";
import context from "../context/context";

const token =
  "EwCQA8l6BAAUwihrrCrmQ4wuIJX5mbj7rQla6TUAAS0Nb8niYULM1biM5tPuLVE1QGnPr7P24HA5sg369SEF9ru8H0ZZeafkJitWkbIXGLisdkBDBjqus5yB/seOdQDnvA1/TrtfFv9CoqCndA6VFrzcbldf8ZLUcFfGDc5RkeioO/Qf6tBWuN85qQCFABVqOjRrunlLB1ljryxNuipbWK6N4ktBawYm3vUJIskT9SPAB/LK/UAdPtibXqxb0Tkr2mTb4sH1b/Z+Ncviub6uXbvJlC/zbEp4xSgmb7d0yTS+Q5Q9ArPW/y/kNwVLE1Tk3EPPHjJHne/A4o8oMT5lNS3eciAvjA6f7LQpkMQQeVCczeCrF6oqiaqoXqbPnT8DZgAACCnrEvef5OOIYALZCHlsgP61bvPfd829otP8fkD2xHIdSPe0uE1mX1s2O82evWIW4yWjjgUCEWaZkk3UejRSm1iGAMcwZLqmv6Z2CxwDdaCzmArn+YyFv57xoAr2aNvRGQwQQBMnNxi520gvmCL/nbUAKRLBvxkLrKetZJnsasSjU89C8Mq5wZxTuqOGZKUeC1pgpzni8b/g/QBlZ5U1klCA52+WZvbWAvy6x6auBMyBZZzYlOfI2VWB51tcYlvAUlPIPztZDlixQkKrnVdN3KIUj/k2nLRugDgKLWGt+u4wuRS/lACEsc1Iwf2dNc3qHpr9jHSrtnZ2Nh8WGyJSHaeU11gMUxdyHn9wdpI8CyVdVFUQiJtBCxiAS8hShBf7BIJBuzJh87+ZcXIOWE2hsCPZzK+AgTcr7kFSJEnJ1tCuB5NEkV2IJum2H6qr2yQD6NKBuCw3ygLDuFU4GAahh/M/tVg3dnmYyUMW/ezNKxXKnkzqyfByEr1Q6PFGkKZGoZWvJldrsIscduypHU9tyFZIxjQMgyfyiVueQQWMUQEmlmbXupsCFw/sA8vU6bvSWJI5WFHvR8Taro/Mv7tf0Q8/l7xhXpYTMlVHj3xNz7DBrL3LwHQ80jBfjoItRGUBmIbsmaMPb+rY29T7QbYUpwxIreRN/15zB+IMLhgTFF586DTJ1FGkI3GB/ePmll1LzpZdPw18vDY9+d2Dyg1RzfYalgQR6lbiFBmXCuRWN3WP3WFP/l0SZhaBAUzF4Mgkzjxdvb/KT0bB3LLBA1GVfyJNDzhQJnmMOOsTgh35u52WXffnAHmzeXG0eqwC";

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
