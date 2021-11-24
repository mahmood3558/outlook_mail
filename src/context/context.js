import { createContext } from "react";

const Context = createContext({
  user: "",
  error: "",
  token: "",

  signIn: () => {},
  signOut: () => {},
  displayError: () => {},
  authProvider: () => {},
});

export default Context;
