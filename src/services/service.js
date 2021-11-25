import http from "./httpService";
import { api } from "./Config";
// import hash from "./setToken/hash";

export const userDate = () => {
  return http.get(`${api}/me`);
};

export const userImg = () => {
  return http.get(`${api}/me/photo/$value`);
};
