import React, { useContext } from "react";

import Context from "../../context/context";

function Home() {
  const context = useContext(Context);

  return (
    <div>
      <div className="home">
        <h1>Home</h1>
      </div>
      <div className="home">
        <h1>Home</h1>
      </div>
      <div className="home">
        <h1>Home</h1>
      </div>
      <div className="home">
        <h1>Home</h1>
      </div>
      <div className="home">
        <h1>Home</h1>
      </div>
      <div className="home">
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
