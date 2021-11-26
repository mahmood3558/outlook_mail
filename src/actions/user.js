import {
  userDate,
  userImg,
  mailFolders,
  messagesFolder,
} from "../services/service";

export const getUser = () => {
  return async (dispatch) => {
    const { data } = await userDate();
    await dispatch({ type: "SET_USER", payload: data });
  };
};

export const getUserImg = () => {
  return async (dispatch) => {
    const { data } = await userImg();
    await dispatch({ type: "SET_USER_IMG", payload: data });
  };
};

export const getMailFolders = () => {
  return async (dispatch) => {
    const { data } = await mailFolders();
    await dispatch({ type: "SET_MAIL_FOLDERS", payload: data });
  };
};

export const getMessagesFolder = (folderId) => {
  return async (dispatch) => {
    const { data } = await messagesFolder(folderId);
    await dispatch({ type: "SET_MESSAGES_FOLDER", payload: data });
  };
};
