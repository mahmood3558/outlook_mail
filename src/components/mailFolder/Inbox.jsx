import React, { useContext } from "react";

import Context from "../../context/context";

function Inbox() {
  const context = useContext(Context);

  return (
    <div>
      <div className="home">
        <h1>Inbox</h1>
      </div>
    </div>
  );
}

export default Inbox;
