import http from "./httpService";
import { api } from "./Config";

export const userDate = () => {
  return http.get(`${api}/me`);
};

export const userImg = () => {
  return http.get(`${api}/me/photo/$value`);
};

export const mailFolders = () => {
  return http.get(`${api}/me/mailFolders`);
};

export const messagesFolder = (folderId) => {
  console.log("folderId");
  console.log(folderId);
  console.log("folderId");
  return http.get(`${api}/me/mailFolders/${folderId}/messages`);
};
