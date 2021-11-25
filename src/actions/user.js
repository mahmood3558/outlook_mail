import { userDate, userImg } from "../services/service";

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
