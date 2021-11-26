import React from "react";
import { useSelector } from "react-redux";

function Spam() {
  const folder = useSelector((state) => state.mailFolders);
  const mailFolderId = folder[0].value.find(
    (v) => v.displayName === "Junk Email"
  ).id;

  return (
    <div className="reports">
      <h1>Spam</h1>
    </div>
  );
}

export default Spam;
