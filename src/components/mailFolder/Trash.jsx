import React from "react";
import { useSelector } from "react-redux";

function Trash() {
  const folder = useSelector((state) => state.mailFolders);
  const mailFolderId = folder[0].value.find(
    (v) => v.displayName === "Deleted Items"
  ).id;

  return (
    <div className="reports">
      <h1>Trash</h1>
    </div>
  );
}

export default Trash;
