import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";

function Archive() {
  const folder = useSelector((state) => state.mailFolders);
  const mailFolderId = folder[0].value.find(
    (v) => v.displayName === "Archive"
  ).id;

  return (
    <div className="products">
      {/* <h1>{user.displayName}</h1>*/}
      <button type="button" className="btn btn-secondary">
        logout
      </button>
      <h1>Archive</h1>
    </div>
  );
}

export default Archive;
