import { combineReducers } from "redux";
import { mailFoldersReducer } from "./mailFolders";
import { messagesFolderReducer } from "./messagesFolder";
import { userReducer } from "./user";
import { userImgReducer } from "./userImg";

export const redusers = combineReducers({
  user: userReducer,
  userImg: userImgReducer,
  mailFolders: mailFoldersReducer,
  messagesFolder: messagesFolderReducer,
});
