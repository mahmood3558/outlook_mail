export const mailFoldersReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_MAIL_FOLDERS":
      return { ...action.payload };
    case "CLEAR_MAIL_FOLDERS":
      return { ...action.payload };

    default:
      return [state];
  }
};
