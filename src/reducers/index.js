import { combineReducers } from "redux";
import { userReducer } from "./user";
import { userImgReducer } from "./userImg";

export const redusers = combineReducers({
  user: userReducer,
  userImg: userImgReducer,
});
