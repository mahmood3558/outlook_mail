export const messagesFolderReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_MESSAGES_FOLDER":
      return { ...action.payload };

    case "CLEAR_MESSAGES_FOLDER":
      return { ...action.payload };

    default:
      return [state];
  }
};
