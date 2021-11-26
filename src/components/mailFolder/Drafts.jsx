import React from "react";
import { useSelector } from "react-redux";

function Drafts() {
  const folder = useSelector((state) => state.mailFolders);
  const mailFolderId = folder[0].value.find(
    (v) => v.displayName === "Drafts"
  ).id;

  return (
    <div className="reports">
      <h1>Drafts</h1>
    </div>
  );
}

export default Drafts;
