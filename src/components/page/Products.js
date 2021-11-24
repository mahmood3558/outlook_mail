import React, { useContext, useState } from "react";
import axios from "axios";

import Context from "../../context/context";

function Products() {
  const context = useContext(Context);

  const [user, serUser] = useState("");

  const clickkk = async () => {
    console.log(context.token);

    axios
      .get("https://graph.microsoft.com/v1.0/me", {
        headers: { Authorization: `Bearer ${context.token}` },
      })
      .then((response) => {
        console.log(response);
        serUser(response.data);
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
        console.log("err");
      });
  };

  return (
    <div className="products">
      <h1>{user.displayName}</h1>
      <button type="button" className="btn btn-secondary" onClick={clickkk}>
        logout
      </button>
    </div>
  );
}

export default Products;
