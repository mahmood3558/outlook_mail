import React, { useState } from "react";
import { PublicClientApplication } from "@azure/msal-browser";

import Context from "../context/context";
import { msalConfig, msalRequest } from "../services/Config";
import { Link } from "react-router-dom";

const GlobalState = (props) => {
  const msalClient = new PublicClientApplication(msalConfig);

  const [token, setToken] = useState("");

  const signIn = async () => {
    // Login
    try {
      // Use MSAL to login
      const authResult = await msalClient.loginPopup(msalRequest);
      setToken(authResult.accessToken);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = () => {
    sessionStorage.removeItem("graphUser");
    msalClient.logout();
    setToken("");
    // console.log(token);
  };

  return (
    <Context.Provider
      value={{
        token: token,
        signIn: signIn,
        signOut: signOut,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
