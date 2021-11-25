export const userImgReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_IMG":
      return [...action.payload];
    case "CLEAR_USER_IMG":
      return [...action.payload];

    default:
      return [state];
  }
};
