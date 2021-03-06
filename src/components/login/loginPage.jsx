import React, { useContext } from "react";

import Context from "../../context/context";
import log from "../../img/Logo.png";

function LoginPage() {
  const context = useContext(Context);

  return (
    <div className=" LoginPage">
      <img src={log} alt="" className="img" />
      <button
        type="button"
        className="btn loginButton m-5"
        onClick={context.signIn}
      >
        login to Outlook email
      </button>
    </div>
  );
}

export default LoginPage;
